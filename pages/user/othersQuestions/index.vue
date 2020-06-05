<template>
    <div class="user-dash sm:pr-250 h-full sm:h-full flex flex-col">
        <div class="p-10">
            <div class="flex flex-col rounded-md bg-white rouended-md w-full shadow-md">
                <div class="w-full flex justify-start items-center">
                    <h3 class="p-4">
                        پروژه های دیگران
                    </h3>
                </div>
                <hr class="w-full">
                <div class="p-2 flex w-full justify-evenly">
                    <div class="responsive-table mt-2">
                        <table class="w-full">
                            <thead v-show="items.length !== 0" class="w-full ">
                            <tr class="w-full border-b">
                                <th class="pb-2">
                                    وضعیت
                                </th>
                                <th class="pb-2">
                                    نام پروژه
                                </th>
                                <th class="pb-2">
                                    مقطع
                                </th>
                                <th class="pb-2">
                                    مهلت 
                                </th>
                                <th class="pb-2">
                                    سقف هزینه
                                </th>
                                <th class="pb-2">
                                    پیشنهاد
                                </th>
                            </tr>
                        </thead>
                        <tbody v-if="items.length !== 0">
                            <tr @click="goToQuestion(item.id)" v-for="item in items" v-bind:key="item.id" >
                                <td class="py-4 px-2">
                                    <div class="flex justify-start items-center">
                                        <div v-bind:class="item['state_name'] === 'is_active' ? 'bg-primary' : item['state_name'] === 'is_finished' ? 'bg-green' : item['state_name'] === 'wait_for_response' ? 'bg-secondary' : item['state_name'] === 'question_solved_request' ? 'bg-orange' : 'bg-gray-700' " class="w-5 h-5 rounded-full"/>
                                        <p class="flex justify-center w-full">
                                            {{
                                                item['state_name'] === 'is_active' ? 'در انتظار پاسخ' : item['state_name'] === 'is_finished' ? 'پاسخ داده شده' : item['state_name'] === 'wait_for_response' ? 'پذیرفته شده توسط استاد' : item['state_name'] === 'question_solved_request' ? 'سوال حل شده' : 'نامشخص'
                                            }}
                                        </p>
                                    </div>
                                </td>
                                <td class="py-4 px-2">
                                    <div class="flex justify-center items-center">
                                        {{
                                            item['subject']
                                        }}
                                    </div>
                                </td>
                                <td class="py-4 px-2">
                                    <div class="flex justify-center items-center">
                                        {{
                                            item['grade_name']
                                        }}
                                    </div>
                                </td>
                                <td class="py-4 px-2">
                                    <div class="flex justify-center items-center">
                                        {{
                                            item['literal_exp_date']
                                        }}
                                    </div>
                                </td>
                                <td class="py-4 px-2">
                                    <div class="flex justify-center items-center">
                                        {{item['max_cost']}} تومان
                                    </div>
                                </td>
                                <td class="py-4 px-2">
                                    <div class="flex justify-center items-center">
                                        {{item['num_offers']}} پیشنهاد
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else class="w-full">
                                <div class="w-full flex flex-col justify-center items-center p-32">
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
        </div>
    </div>
</template>

<script>
export default {
    mounted: function () {
        this.$store.commit("setUserDashPage", 'others');
    },
    async asyncData({ $axios }) {
        const s_res = await $axios.$get("/api/questions/?others=true")
        return {
            items: s_res.results,
        }
    },
    data() {
        return {
            items: []
        }
    },
    methods: {
        goToQuestion(id) {
            this.$toast.info('این پروژه برای شما قابل باز کردن نیست')
            // this.$router.push(`/user/questions/${id}`)
        },
    },
    auth: true,
    layout: 'dashboard/user',
}
</script>

<style>

</style>