<template>
    <div class="head">
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
        <img class="rounded-full w-10 h-10 border-2 border-transparent hover:border-primary" v-bind:src="$auth.user.profile_pic_thumb" v-bind:alt="$auth.user.full_name">
        <p class="p-2">
          {{ $auth.user.full_name }}
        </p>
      </div>
      <!-- <a href="#">
      <img src="~/assets/img/halyab_icon.png" alt="icon" class="w-10" style="border-radius: 50%;">
    </a> -->
  </div>

   <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <div class="hidden justify-end lg:flex lg:items-center lg:w-auto w-full" id="menu">
    <nav>
      <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
        <li><a class="lg:p-3 py-3 px-0 block border-b-2 border-transparent hover:border-primary" href="#">درباره ما</a></li>
        <li><a class="lg:p-3 py-3 px-0 block border-b-2 border-transparent hover:border-primary" href="#">تماس با ما</a></li>
        <li><a class="lg:p-3 py-3 px-0 block border-b-2 border-transparent hover:border-primary" href="#">خانه</a></li>
        <!-- <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary lg:mb-0 mb-2" href="#">Support</a></li> -->
      </ul>
    </nav>
      <nuxt-link to="/">
        <img src="~/assets/icons/full-logo.png" alt="icon" style="width:60%">
      </nuxt-link>
      <!-- <a href="#" class="lg:ml-8 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
        <img src="~/assets/img/halyab_icon.png" alt="icon" class="w-10" style="border-radius: 50%;">
      </a> -->
    <!-- <a href="#" class="lg:ml-8 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
      <img class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg" alt="Andy Leverenz">
    </a> -->

  </div>

  </header>
    </div>
</template>

<style>

.head {
    position: absolute;
    width: 100vw;
    max-width: 100%;
    top: 0;
    direction: ltr;
}

</style>