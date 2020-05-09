<template>
    <div class="flex flex-col rounded-md bg-white rouended-md w-full shadow-md" style="word-wrap: break-word;">
        <div class="flex justify-between items-center p-6">
            <div>
                <h2>
                    {{ title }}
                </h2>
                <!-- <button v-if="title === 'پروژه های من'" class="bg-white text-sm text-secondary font-bold p-1 rounded focus:outline-none focus:shadow-outline">
                مشاهده همه
                </button> -->
            </div>
            <button v-if="title !== 'پروژه های من'" class="bg-white text-sm text-secondary font-bold p-1 rounded focus:outline-none focus:shadow-outline">
                مشاهده همه
            </button>
            <button v-else class="flex justify-center items-center bg-green text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline" style="box-shadow: 5px 5px 14px -6px rgba(23,198,152,0.9);">
                ثبت پروژه
                <img class="w-4 mx-2" src="~/assets/icons/plus.svg"/>
            </button>
        </div>
        <hr class="w-full">
        <div class="responsive-table mt-2">
            <table class="w-full">
                <thead v-if="items.length !== 0" class="w-full p-4">
                    <tr class="w-full">
                        <th class="text-right border-b p-2" v-for="head in heads" v-bind:key="head.id" >
                            {{ head.persian }}
                        </th>
                    </tr>
                </thead>
                <thead v-else>
                    <tr>
                        <td>

                        </td>
                    </tr>
                </thead>
                <tbody v-if="items.length !== 0">
                    <tr class="border-b" v-for="item in items" v-bind:key="item.id">
                        <td class="p-4" v-for="head in heads" v-bind:key="head.id">
                            <div v-if="head.english !== 'state' && head.english !== 'state_name'">
                                {{ item[head.english] }}
                            </div>
                            <div v-else-if="head.english === 'state_name'" class="flex justify-start items-center">
                                <!-- <div v-bind:class="item[head.english] === 'is_active' ? 'bg-orange' : item[head.english] === 'is_finished' ? 'bg-gray-700' : item[head.english] === 'wait_for_response' ? 'bg-secondary' : item[head.english] === 'question_solved_request' ? 'bg-green' : 'bg-gray-700' " class="w-3 h-3 rounded-full mx-2">
                                </div> -->
                                {{ item[head.english] === 'is_active' ? 'در انتظار پاسخ' : item[head.english] === 'is_finished' ? 'پاسخ داده شده' : item[head.english] === 'wait_for_response' ? 'پذیرفته شده توسط استاد' : item[head.english] === 'question_solved_request' ? 'سوال حل شده' : 'نامشخص' }}
                            </div>
                            <div class="flex justify-start items-center" v-else>
                                <!-- <div v-bind:class="item[head.english] === 'در انتظار پاسخ' ? 'bg-orange': 'bg-gray-700' " class="w-3 h-3 rounded-full mx-2">
                                </div> -->
                                {{ item[head.english] }}
                            </div>
                            <!-- <p v-if="head.english == 'state' || 'state_name' ">
                                {{ item[head.english] }}
                            </p>
                            <div v-else>
                                hamid
                            </div> -->
                        </td>
                    </tr>
                </tbody>
                <tbody v-else class="w-full">
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
</template>


<script>

export default {
  props: [
      'title',
      'heads',
      'items'
    ]
}

</script>

<style>

.responsive-table {
    display: block;
    overflow-x: auto;
    width: 100%;
    -webkit-overflow-scrolling: touch;
}

</style>