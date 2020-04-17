<template>
  <div class="register w-full sm:w-auto">
      <Nav />
        <div class="sm:w-auto w-full">
        <!-- <div class="p-10 flex flex-col justify-center items-center">
                <h1 class="p-2">
                    تعداد سطر و ستون ها را وارد کنید.
                </h1>
            </div> -->
        <form class="bg-white shadow-lg rounded-lg flex w-max-md justify-center m-4 border">
            <div class="px-8 pt-6 mb-4">
              <nuxt-link to="/">
                <img src="~/assets/icons/arrow-right-solid.svg" alt="back" class="w-4">
              </nuxt-link>
              <div class="flex justify-center items-center">
                <img src="~/assets/img/halyab_icon.png" alt="icon" class="w-10" style="border-radius: 50%;">
              </div>
              <div class="flex items-center justify-center py-8">
                <h1 class="font-bold text-size-20">
                  فرم ثبت نام
                </h1>
              </div>
              <div class="mb-4">
              <label class="flex text-gray-700 text-sm font-bold mb-2" for="row">
                  شماره همراه
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="شماره همراه" required/>
              </div>
              <div class="mb-4">
              <label class="flex text-gray-700 text-sm font-bold mb-2" for="row">
                  رمز عبور
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pass" type="text" placeholder="رمز عبور" required/>
              </div>
              <div class="mb-6">
              <label class="flex text-gray-700 text-sm font-bold mb-2" for="column">
                  تکرار رمز عبور
              </label>
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="column" type="text" placeholder="تکرار رمز عبور" required/>
              </div>
              <div class="flex items-center justify-center">
              <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline" style="box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);" type="submit" value="Submit">
                  ثبت نام
              </button>
              </div>
              <div class="block items-center justify-center p-4">
                <nuxt-link to="/auth/login" class="text-gray-600">
                  قبلا ثبت نام کردی ؟
                </nuxt-link>
              </div>
            </div>
            <div class="hidden bg-blue-600 text-bold items-center justify-center md:flex md:flex-col md:max-w-md" style="box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39); color:white; border-top-left-radius: inherit; border-bottom-left-radius: inherit;">
              <img class="p-4" src="~/assets/img/register.svg" style="width: 50%;" alt="auth-logo">
              <div class="block items-center justify-center pb-2">
                <h1 class="f  ont-bold" style="font-size: xx-large;">
                 ثبت نام در حل یاب
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
  async asyncData({ $axios }) {
    //   const response = await $axios.$post("http://rest.3tour.ir/trips/getRecent");
    //   return {trip: response.data.trips[0]}
  },
  components: {
    Logo,
    Nav
  }
}
</script>


<style>

.register {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  direction: rtl;
}

</style>>