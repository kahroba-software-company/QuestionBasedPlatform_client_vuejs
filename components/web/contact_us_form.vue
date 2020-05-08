<template>
    <div class="app-sec bg-white">
    <div class="container flex-col">
         <form action="" class="form bg-gray-50 rounded  shadow-2xl  p-6 my-10 relative">
               
                <!-- <div class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5" style="left:-40px"><i class="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div> -->
                <h3 class="text-2xl mb-5 text-gray-700 font-semibold"> با ما در تماس باشید</h3>
                <p class="text-gray-600 my-5"> سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                <div class="flex space-x-5 mt-3">
                    <input type="text" name="" id="" placeholder="نام و نام خانوادگی" class="border p-2  w-1/2">
                    <input type="txt" name="" id="" placeholder="موضوع پیام" class="border p-2 w-1/2">
                </div>
                <input type="email" name="" id="" placeholder="ایمیل شما" class="border p-2 w-full mt-3">
                <textarea name="" id="" cols="10" rows="3" placeholder="متن پیام خود را اینجا وارد نمایید" class="border p-2 mt-3 w-full"></textarea>
                <!-- <p class="font-bold text-sm mt-3">GDPR Agreement *</p> -->
                <!-- <div class="flex items-baseline space-x-2 mt-2">
                    <input type="checkbox" name="" id="" class="inline-block">
                    <p class="text-gray-600 text-sm">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
                </div> -->
                <input type="submit" value="ارسال" class="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3">

            </form>
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