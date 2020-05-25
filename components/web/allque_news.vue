<template>
<div class="bg-secondary">
<div class="container ">
	   <div class="flex flex-col rounded-md bg-white rouended-md w-full shadow-md" style="word-wrap: break-word;">
        <div class="flex justify-between items-center p-6">
            <div>
                <h2>
                  سوال های دوستان شما
                </h2>
                <!-- <button v-if="title === 'پروژه های من'" class="bg-white text-sm text-secondary font-bold p-1 rounded focus:outline-none focus:shadow-outline">
                مشاهده همه
                </button> -->
            </div>
            <!-- <button  class="bg-white text-sm text-secondary font-bold p-1 rounded focus:outline-none focus:shadow-outline">
                مشاهده همه
            </button> -->
            <button class="flex justify-center items-center bg-green text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline" style="box-shadow: 5px 5px 14px -6px rgba(23,198,152,0.9);">
                ثبت پروژه
                <img class="w-4 mx-2" src="~/assets/icons/plus.svg"/>
            </button>
        </div>
        <hr class="w-full">
        <div class="responsive-table mt-2">
            <table class="w-full">
				<thead class="w-full p-4">
                    <tr class="w-full">
                        <th class="text-right border-b p-2" v-for="head in heads" v-bind:key="head.id" >
                            {{ head.persian }}
                        </th>
                    </tr>
                </thead>
                <thead >
                    <tr>
                        <td>

                        </td>
                    </tr>
                </thead>
                <tbody >
                    <tr class="border-b" v-for="item in items" v-bind:key="item.id">
                        <td class="p-4" v-for="head in heads" v-bind:key="head.id">
                            <div>
                              
                            </div>
                            <div class="flex justify-start items-center">
        
                            </div>
                            <div class="flex justify-start items-center" >

                            </div>
                  
                        </td>
                    </tr>
                </tbody>
                <tbody  class="w-full">
                    <div class="w-full flex flex-col justify-center items-center p-12">
                        <img class="w-20" src="~/assets/icons/empty-box.svg" alt="جعبه خالی">
                        <p class="font-bold">
                            نتیجه ای یافت نشد
                        </p>
                        <p>
                            لیست پروژه ها خالیست !
                        </p>
                    </div>
                </tbody>
            </table>
        </div>
    </div>
</div>
        <hr class="hidden sm:block sm:w-full">
<head>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://kit.fontawesome.com/479346cc73.js" crossorigin="anonymous"></script>

</head>

<div class=" w-full text-blue-800 bg-white h-auto py-20">



    <div class=" text-center  ">

        <h1 class=" md:text-4xl sm:text-2xl text-xl mb-4"> Titre h1 SKILLS </h1>

        <hr class="W-1/4 mx-auto mb-10 shadow-4xl">
    </div>

    <div class="sm:flex content-center justify-center">


        <div class=" sm:w-2/4 w-3/4 mx-auto h-auto my-6 lg:mx-8 md:mx-4">
            <h3 class="text-center text-xl my-2"> <i class=" fas fa-user-astronaut text-4xl"></i> </h3>
            <p class=" text-sm text-justify mx-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                vitae,
                nesciunt
                ipsa
                deleniti asperiores
                provident velit similique officiis ab reiciendis cupiditate illo incidunt aspernatur magnam dolorem
                quae. Facere, ex voluptatum.</p>
        </div>


        <div class=" sm:w-2/4 w-3/4 mx-auto h-auto my-6 lg:mx-8 md:mx-4">
            <h3 class="text-center text-xl my-2"> <i class=" fas fa-user-astronaut text-4xl"></i> </h3>
            <p class=" text-sm text-justify mx-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                vitae,
                nesciunt
                ipsa
                deleniti asperiores
                provident velit similique officiis ab reiciendis cupiditate illo incidunt aspernatur magnam dolorem
                quae. Facere, ex voluptatum.</p>
        </div>

        <div class=" sm:w-2/4 w-3/4 mx-auto h-auto my-6 lg:mx-8 md:mx-4">
            <h3 class="text-center text-xl my-2"> <i class=" fas fa-user-astronaut text-4xl"></i><br> </h3>
            <p class=" text-sm text-justify mx-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                vitae,
                nesciunt
                ipsa
                deleniti asperiores
                provident velit similique officiis ab reiciendis cupiditate illo incidunt aspernatur magnam dolorem
                quae. Facere, ex voluptatum.</p>
        </div>
    </div>

</div>
</div>
</template>>
<style>

.responsive-table {
    display: block;
    overflow-x: auto;
    width: 100%;
    -webkit-overflow-scrolling: touch;
}

</style>