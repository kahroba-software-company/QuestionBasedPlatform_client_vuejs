<template>
  <div>
    <div class="landing-head">
      <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center shadow-sm lg:py-0 py-2">
        <div class="flex-1 flex justify-between items-center">
          <div v-if="!$auth.loggedIn">
            <nuxt-link to="/auth/login">
              <button class="bg-white border border-gray-500 hover:bg-blue-600 text-primary font-bold py-2 px-4 rounded">
              ورود
              </button>
            </nuxt-link>
            <nuxt-link to="/auth/register">
              <button class="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              ثبت نام
              </button>
          </nuxt-link>
          </div>
          <div v-else class="flex justify-center items-center">
            <img @click="isProfOpen = !isProfOpen" class="rounded-full w-10 h-10 border-2 border-transparent hover:border-primary" v-bind:src="$auth.user.profile_pic_thumb ? $auth.user.profile_pic_thumb : $auth.user.default_profile_pic " v-bind:alt="$auth.user.full_name ? $auth.user.full_name : 'کاربر بدون نام' ">
            <p class="p-2">
              {{ $auth.user.full_name ? $auth.user.full_name : $auth.user.username }}
            </p>
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
      <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
      <input class="hidden" type="checkbox" id="menu-toggle" />
      <div class="hidden justify-end lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <nav>
          <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li><nuxt-link to="/join_us" class="lg:p-3 py-3 px-0 block border-b-2 border-transparent hover:border-primary"> پیوستن به ما </nuxt-link></li>
            <li><nuxt-link to="/about_us" class="lg:p-3 py-3 px-0 block border-b-2 border-transparent hover:border-primary">درباره ما</nuxt-link></li>
            <li><nuxt-link to="/contact_us" class="lg:p-3 py-3 px-0 block border-b-2 border-transparent hover:border-primary">تماس با ما</nuxt-link></li>
            <!-- <li><a class="lg:p-3 py-3 px-0 block border-b-2 border-transparent hover:border-primary" href="#">خانه</a></li> -->
            <!-- <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary lg:mb-0 mb-2" href="#">Support</a></li> -->
          </ul>
        </nav>
          <div class="flex">
            <nuxt-link to="/">
              <img class="w-32" src="~/assets/icons/full-logo.png" alt="icon">
            </nuxt-link>
          </div>
          <!-- <a href="#" class="lg:ml-8 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
            <img src="~/assets/img/halyab_icon.png" alt="icon" class="w-10" style="border-radius: 50%;">
          </a> -->
        <!-- <a href="#" class="lg:ml-8 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
          <img class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg" alt="Andy Leverenz">
        </a> -->
      </div>
      </header>
    </div>
    <hr>
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

.landing-head {
    width: 100vw;
    max-width: 100%;
    direction: ltr;
}

</style>