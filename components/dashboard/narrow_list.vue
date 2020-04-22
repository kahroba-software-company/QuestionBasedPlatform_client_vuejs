<template>
    <div class="flex flex-col rounded-md bg-white rouended-md w-full shadow-md" style="word-wrap: break-word;">
        <div class="flex justify-between items-center p-6">
            <h2>
                {{ title }}
            </h2>
            <button class="bg-secondary hover:shadow-md text-sm text-white font-bold p-1 rounded focus:outline-none focus:shadow-outline">
                مشاهده لیست
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
                <tbody>
                    <tr class="border-b" v-for="item in items" v-bind:key="item.id">
                        <td class="p-4" v-for="head in heads" v-bind:key="head.id">
                            {{ item[head.english] }}
                        </td>
                    </tr>
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