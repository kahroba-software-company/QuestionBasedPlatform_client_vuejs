<template>
  <div>
    <div class="user-head flex shadow-md">
        <div class="w-full sm:px-16 px-6 bg-white flex flex-wrap items-center shadow-sm sm:py-0 py-2">
            <div class="flex flex justify-between items-center py-2">
                <div class="flex justify-center items-center">
                    <img class="rounded-full w-12 border-2 border-transparent hover:border-primary mx-1" v-bind:src="$auth.user.profile_pic_thumb ? $auth.user.profile_pic_thumb : $auth.user.default_profile_pic " v-bind:alt="$auth.user.full_name ? $auth.user.full_name : 'کاربر بدون نام' ">
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
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'dashboard' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-home.svg" alt="پیشخوان">
                      پیشخوان
                  </li>
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'project' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-file-plus.svg" alt="ثبت پروژه">
                      ثبت پروژه
                  </li>
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'profile' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-user.svg" alt="پروفایل">
                      پروفایل
                  </li>
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'finance' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-refresh.svg" alt="گردش حساب">
                      گردش حساب
                  </li>
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'contactUs' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-chat.svg" alt="تماس با ما">
                      تماس با ما
                  </li>
                  <li class="py-2 flex" v-bind:class="this.$store.state.user.dashboard.page === 'aboutUs' ? 'bg-primedark rounded-md' : '' ">
                    <img class="w-4 mx-2" src="~/assets/icons/icon-exclamation.svg" alt="تماس با ما">
                      درباره ما
                  </li>
              </ul>
          </nav>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<style>

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

</style>