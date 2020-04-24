<template>
    <div class="flex flex-col rounded-md bg-white rouended-md w-full shadow-md" style="word-wrap: break-word;">
        <div class="flex justify-between items-center p-6">
            <h2>
                {{ title }}
            </h2>
            <button class="bg-white text-sm text-secondary font-bold p-1 rounded focus:outline-none focus:shadow-outline">
                مشاهده همه
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
                            {{ item[head.english] }}
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