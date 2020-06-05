<template>
  <div class="user-layout">
    <div class="user-head flex shadow-md">
        <div class="w-full sm:px-16 px-6 bg-white flex flex-wrap items-center shadow-sm sm:py-0 py-2">
            <div class="flex flex justify-between items-center py-2">
                <div class="flex justify-center items-center">
                    <img @click="isProfOpen = !isProfOpen" class="rounded-full w-12 border-2 border-transparent hover:border-primary mx-1" v-bind:src="$auth.user.profile_pic_thumb ? $auth.user.profile_pic_thumb : $auth.user.default_profile_pic " v-bind:alt="$auth.user.full_name ? $auth.user.full_name : 'کاربر بدون نام' ">
                    <div class="flex flex-col justify-center items-start">
                        <p>
                            {{ $auth.user.full_name ? $auth.user.full_name : 'کاربر مهمان' }}
                        </p>
                        <small>
                            {{ $auth.user.username }}
                        </small>
                    </div>
                    <img class="w-6 mx-4" src="~/assets/icons/bell-regular.svg" alt="نوتیفیکیشن">
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                <div v-show="isProfOpen" class="origin-bottom-right absolute left-1-5 sm:left-4 top-5 sm:top-4 mt-2 w-48 rounded-md shadow-lg" style="direction: rtl;">
                      <div class="rounded-md bg-white shadow-xs">
                        <div class="py-1">
                          <nuxt-link to="/user/dashboard" class="flex items-center justify-start w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <img class="pl-2 w-6" src="~/assets/icons/icon-user.svg" alt="پیشخوان" >
                            پیشخوان
                          </nuxt-link>
                          <nuxt-link to="/user/profile" class="flex items-center justify-start w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <img class="pl-2 w-6" src="~/assets/icons/icon-user.svg" alt="پروفایل" >
                            حساب کاربری
                          </nuxt-link>
                          <nuxt-link to="/user/questions" class="flex items-center justify-start w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <img class="pl-2 w-6" src="~/assets/icons/icon-file-plus.svg" alt="پروژه های من" >
                            پروژه های من 
                          </nuxt-link>
                          <nuxt-link to="/user/finance" class="flex items-center justify-start w-full px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                            <img class="pl-2 w-6" src="~/assets/icons/icon-refresh.svg" alt="افزایش اعتبار" >
                            افزایش اعتبار 
                          </nuxt-link>
                          <hr>
                          <form method="POST" action="/auth/logout">
                            <button type="submit" class="flex text-red items-center justify-start w-full text-right px-4 py-2 text-sm leading-5 hover:bg-gray-200 focus:outline-none focus:bg-gray-100">
                              <img class="pl-2 w-1/6" src="~/assets/icons/logout.svg" alt="خروج" >
                              خروج از حساب
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                </transition>
          <!-- <a href="#">
          <img src="~/assets/img/halyab_icon.png" alt="icon" class="w-10" style="border-radius: 50%;">
        </a> -->
        </div>
      </div>
      <div class="side-nav hidden sm:flex flex-col bg-primary" style="box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);">
          <div class="w-full h-fit flex justify-start items-center">
              <img class="w-4/5 mb-4 mt-1" src="~/assets/icons/full_white.png" alt="لوگو حل یاب">
          </div>
          <nav class="text-white">
              <ul>
                <nuxt-link to="/user/dashboard">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'dashboard' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-home.svg" alt="پیشخوان">
                      پیشخوان
                  </li>
                </nuxt-link>
                <nuxt-link to="/user/questions">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'questions' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-file-plus.svg" alt="ثبت پروژه">
                      ثبت پروژه
                  </li>
                </nuxt-link>
                <nuxt-link to="/user/othersQuestions">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'others' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-file-plus.svg" alt="پروژهای دیگران">
                      پروژه های دیگران
                  </li>
                </nuxt-link>
                <nuxt-link to="/user/profile">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'profile' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-user.svg" alt="حساب کاربر">
                      حساب کاربر
                  </li>
                </nuxt-link>
                <nuxt-link to="/user/trx">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'finance' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-refresh.svg" alt="گردش حساب">
                      گردش حساب
                  </li>
                </nuxt-link>
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'contactUs' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-chat.svg" alt="تماس با ما">
                      تماس با ما
                  </li>
                  <nuxt-link to="aboutus">
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'aboutUs' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-exclamation.svg" alt="تماس با ما">
                      درباره ما
                  </li>
                  </nuxt-link>
              </ul>
              <hr>
          </nav>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isProfOpen: false
    }
  }
}
</script>

<style>

.user-layout {
  height: 100%;
}

.user-head {
    width: 100vw;
    max-width: 100%;
    direction: ltr;
}

.side-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    direction: rtl;
    display: block;
    overflow-y: auto;
    width: 100%;
    max-width: 250px;
    padding-right: 1rem;
    padding-left: 1rem;
}


html {
  height: 100%;
}

body {
  height: 100%;
}

#__nuxt {
  height: 100%;
}

#__layout {
  height: 100%;
}


</style>