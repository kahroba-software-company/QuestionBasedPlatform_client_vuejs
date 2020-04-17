<template>
  <div class="login w-full sm:w-auto">
      <Nav />
        <div class="sm:w-auto w-full">
        <!-- <div class="p-10 flex flex-col justify-center items-center">
                <h1 class="p-2">
                    تعداد سطر و ستون ها را وارد کنید.
                </h1>
            </div> -->
        <form @submit="authLogin" class="bg-white shadow-lg rounded-lg flex w-max-md justify-center m-4 border">
            <div class="px-8 pt-6 mb-4">
              <div>
                <nuxt-link to="/">
                  <img src="~/assets/icons/arrow-right-solid.svg" alt="back" class="w-4">
                </nuxt-link>
              </div>
              <div class="flex justify-center items-center">
                <img src="~/assets/img/halyab_icon.png" alt="icon" class="w-10" style="border-radius: 50%;">
              </div>
              <div class="flex items-center justify-center py-8">
                <h1 class="font-bold text-size-20">
                  فرم ورود
                </h1>
              </div>
              <div class="mb-4">
              <label class="flex text-gray-700 text-sm font-bold mb-2" for="row">
                  شماره همراه
              </label>
              <input v-model="login.username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="شماره همراه" required/>
              </div>
              <div class="mb-4">
              <label class="flex text-gray-700 text-sm font-bold mb-2" for="row">
                  رمز عبور
              </label>
              <input v-model="login.password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pass" type="text" placeholder="رمز عبور" required/>
              </div>
              <div class="flex items-center justify-center">
              <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline" style="box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);">
                  ورود
              </button>
              </div>
              <div class="block items-center justify-center pt-8">
                <nuxt-link to="/auth/register" class="text-gray-600">
                  تا حالا ثبت نام نکردی ؟
                </nuxt-link>
              </div>
                <div class="block items-center justify-center p-4">
                <nuxt-link to="/auth/forgotPass" class="text-gray-600">
                    رمزت رو فراموشی کردی ؟
                </nuxt-link>
              </div>
            </div>
            <div class="hidden bg-blue-600 text-bold items-center justify-center md:flex md:flex-col md:max-w-md" style="box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39); color:white; border-top-left-radius: inherit; border-bottom-left-radius: inherit;">
              <img class="p-4" src="~/assets/img/register.svg" style="width: 50%;" alt="auth-logo">
              <div class="block items-center justify-center pb-2">
                <h1 class="font-bold" style="font-size: xx-large;">
                    ورود به حل یاب
                </h1>
              </div>
              <div class="block items-center justify-center p-2">
                <p>
                  دسترسی به اساتید مجرب سایت حل یاب
                </p>
              </div>
            </div>
        </form>
        </div> 
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Nav from '~/components/home_nav_unsigned.vue'

export default {
  // async asyncData({ $axios }) {
  //     const response = await $axios.$post("https://halyab.com/accounts/", {
  //       username: "09011887171",
  //       password: "12345"
  //     });
  //     console.log({response})
  // },
  auth: false,
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async authLogin() {
        this.$auth.loginWith('local', {data: this.login})
          .then((res) => {
            console.log(res.data)
            this.$axios.$get("https://halyab.com/accounts/users/", {headers: {Authorization: 'bearer ' + res.data.access}})
            .then((resp) => {
              console.log(resp.data);
            })
            // this.$auth.setUserToken('local', res.data.access)
            // .then((res) => {
            //   console.log("asdjhaskdjahsdkjadshaksjdhaksjdhaskdjadsk")
            // }).catch((e) => {
            //   console.error(e);
            // })

          }).catch((e) => {
            console.log({e});
            // this.$toast.error({e})
          });
        // .then((res) => {
        //   console.log({res});
        //   alert('alah')
        //   // this.$auth.setUserToken(res.data.access)
        //   //   .then(() => {
        //   //     console.log("alllaaaah")
        //   //   }).catch(() => {
        //   //     console.log("error")
        //   //   })
        // }).catch((e) => {
        //   alert(e)
        // })
    }
  },
  components: {
    Logo,
    Nav
  }
}
</script>


<style>

.login {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  direction: rtl;
}

</style>>