<template>
    <div class="app-sec bg-white">
    <div class=" flex-col">
               
    <div class="mx-auto max-w-6xl p-12 ">
   <div class="flex flex-col md:flex-row shadow justify-center bg-blue-700 rounded">
     <div></div>
      <div class="xl:w-1/2 max-w-md my-5 mx-5 flex flex-col justify-center ">
         <div class="text-bold md:text-5xl  text-white  ">به ما ملحق شوید !</div>
         <p class="text-xl text-base text-white mt-4 hidden sm:block">سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
      </div>
      <div class="md:w-1/2 flex justify-start my-5 md:justify-end w-full md:w-1/2 ">
         <form class="rounded flex-auto max-w-sm bg-gray-100 p-10 pb-20 shadow-2xl">
            <div class="w-full">
               <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span> نام شما</div>
               <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input placeholder="نام" class="p-1 px-2 appearance-none outline-none w-full text-gray-800">  </div>
            </div>
            <div class="w-full">
               <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span> مدرک شما </div>
               <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input placeholder="مدرک" class="p-1 px-2 appearance-none outline-none w-full text-gray-800">  </div>
            </div>
            <div class="w-full">
               <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"><span class="text-red-400 mr-1">*</span> ایمیل شما</div>
               <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">  <input placeholder="ایمیل" class="p-1 px-2 appearance-none outline-none w-full text-gray-800">  </div>
            </div>
            <div class="mt-6 relative">
               <button class="shadow-md font-medium py-2 px-4 text-green-100 text-white text-bold text-2xl
                  cursor-pointer bg-blue-600 rounded text-lg tr-mt   text-center w-full">ارسال</button>
            </div>
         </form>
      </div>
   </div>
</div>
    </div>    
        <hr class="hidden sm:block sm:w-full">
    </div>
</template>

<style>

.app-sec {
    direction: rtl;
    min-height: 100vh;
    width: 100vw;
    max-width: 100%;
}


</style>