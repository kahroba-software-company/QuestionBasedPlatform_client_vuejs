<template>
    <div class="app-sec bg-white">
        <div class="container flex-col">
            <div class="flex flex-row justify-center items-center text-center" style="height: 20%">
                <h2 class="text-primary text-xl sm:text-4xl font-bold flex align-center justify-center">
                    اپلیکیشن
                </h2>
                <img class="w-1/2" src="~/assets/icons/full-logo.png" alt="لوگوی حل یاب">
            </div>
            <div class="flex flex-row justify-center align-center text-center" style="width: 100%; height: 60%">
                <div class="flex flex-col justify-between sm:justify-evenly items-center" style="width: 50%;">
                    <h2 class="text-xl sm:text-3xl pt-5 sm:pt-20 font-bold text-right items-start w-full flex">
                        همین الان با اپلیکیشن حل یاب به راحتی بر <br class="hidden sm:block"> روی تلفن همراه سوال یا پروژه خود را به <br class="hidden sm:block"> اساتید مجرب حل یاب بسپارید 
                    </h2>
                    <div class="flex flex-col sm:flex-row flex-wrap justify-start items-center">
                        <img class="w-full sm:w-2/5 p-1" style="object-fit: contain;" src="~/assets/img/bazzar.png" alt="کافه بازار">
                        <img class="w-full sm:w-2/5 p-1" style="object-fit: contain;" src="~/assets/img/google-play.png" alt="گوگل پلی">
                    </div>
                </div>
                <div class="hidden sm:flex justify-end items-center pl-16" style="width: 50%;">
                    <img style="width: 50%" src="~/assets/img/App.png" alt="اسکرین شات اپلیکیشن">
                </div>
            </div>
        </div>
        <hr class="hidden sm:block sm:w-full">
    </div>
</template>

<style>

.app-sec {
    min-height: 100vh;
    width: 100vw;
    max-width: 100%;
}

</style>