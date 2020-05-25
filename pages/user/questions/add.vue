<template>
    <div class="user-dash sm:pr-250 h-full sm:h-full flex flex-col" style="direction: rtl;">
        <div class="p-10">
            <div class="flex flex-col rounded-md bg-white rouended-md w-full shadow-md">
                <div class="w-full flex justify-start items-center">
                    <h3 class="p-4">
                        اضافه کردن پروژه 
                    </h3>
                </div>
                <hr class="w-full">
                <div>
                    <div class="p-2 flex w-full justify-center">
                        <form class="flex flex-col w-full sm:w-3/5 h-full" action="">
                            <div class="flex flex-col w-full p-2">
                                <div class="flex w-full justify-between items-center p-2">
                                    <h3>
                                        نوع پروژه
                                    </h3>
                                    <div>
                                        <input v-show="false" type="text" list="qtype" name="qtype" class="form-input">
                                        <div class="flex-auto flex flex-col items-center">
                                            <div class="flex flex-col items-center relative">
                                                <div class="w-full">
                                                    <div @click="opener(1)" class="my-2 bg-white p-1 flex border rounded" style="border-color: #d2d6dc;">
                                                        <input v-bind:value="dd1Selected" placeholder="پروژه درسی" disabled class="p-1 px-2 appearance-none outline-none w-full bg-white text-gray-800 unselecting">
                                                        <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-r flex justify-center items-center border-gray-200">
                                                            <div class="flex justify-center items-center cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4" v-bind:style="ddOpen === 1 ? 'transform: rotate(0deg);' : 'transform: rotate(180deg);'">
                                                                    <polyline points="18 15 12 9 6 15"></polyline>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <transition
                                                enter-active-class="transition ease-out duration-100"
                                                enter-class="transform opacity-0 scale-95"
                                                enter-to-class="transform opacity-100 scale-100"
                                                leave-active-class="transition ease-in duration-75"
                                                leave-class="transform opacity-100 scale-100"
                                                leave-to-class="transform opacity-0 scale-95"
                                                >
                                                <div v-show="ddOpen === 1" class="absolute shadow-md top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto">
                                                    <div class="flex flex-col w-full">
                                                        <div @click="dd1Selected = item.name; opener(0)" v-for="item in dd1" v-bind:key="item.id" class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                                                            <div class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-primary hover:text-teal-100" v-bind:class="dd1Selected === item.name ? 'border-primary': ''">
                                                                <div class="w-full items-center flex">
                                                                    <div class="mx-2 leading-6  "> {{item.name}} </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </transition>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                            </div>
                            <div class="flex flex-col w-full p-2">
                                <div class="w-full flex justify-between items-center p-2">
                                    <div class="relative right-0">
                                        <h3>
                                            عنوان پروژه
                                        </h3>
                                    </div>
                                    <div>
                                        <input id="title" class="form-input block w-full pr-7 pl-12 sm:text-sm sm:leading-5" placeholder="سوال ریاضیات" />
                                    </div>
                                </div>
                                <hr>
                            </div>
                            <div class="flex flex-col w-full p-2">
                                <div class="w-full flex justify-between items-center p-2">
                                <h3>
                                    توضیحات
                                </h3>
                                <div>
                                    <textarea class="form-input" name="desc" id="desc" cols="20" rows="3">

                                    </textarea>
                                </div>
                                </div>
                                <hr>
                            </div>
                            <div class="flex flex-col w-full p-2">
                                <div class="w-full flex justify-between items-center p-2">
                                    <div class="relative right-0">
                                        <h3>
                                            قیمت پیشنهادی
                                        </h3>
                                    </div>
                                    <div>
                                        <input type="number" id="price" class="form-input block w-full pr-7 pl-12 sm:text-sm sm:leading-5" placeholder="10000" />
                                        <small> به تومان </small>
                                    </div>
                                </div>
                                <hr>
                            </div>
                            <div class="flex flex-col w-full p-2">
                                <h3>
                                    پیوست
                                </h3>
                                <div class="w-full flex justify-center items-center p-2">
                                        <Uploader />
                                        <!-- <div class="flex items-center justify-center bg-grey-lighter p-2">
                                            <label class="w-32 flex flex-col items-center px-4 py-2 bg-white text-blue rounded-lg shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-primary">
                                                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                                </svg>
                                                <span class="mt-1">آپلود</span>
                                                <input type='file'  class="hidden" />
                                            </label>
                                        </div>
                                        <div class="flex items-center justify-center bg-grey-lighter p-2">
                                            <label class="w-32 flex flex-col items-center px-4 py-2 bg-white text-blue rounded-lg shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-primary">
                                                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                                </svg>
                                                <span class="mt-1">آپلود</span>
                                                <input type='file'  class="hidden" />
                                            </label>
                                        </div>
                                        <div class="flex items-center justify-center bg-grey-lighter p-2">
                                            <label class="w-32 flex flex-col items-center px-4 py-2 bg-white text-blue rounded-lg shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-primary">
                                                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                                </svg>
                                                <span class="mt-1">آپلود</span>
                                                <input type='file'  class="hidden" />
                                            </label>
                                        </div>
                                        <div class="flex items-center justify-center bg-grey-lighter p-2">
                                            <label class="w-32 flex flex-col items-center px-4 py-2 bg-white text-blue rounded-lg shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-primary">
                                                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                                </svg>
                                                <span class="mt-1">آپلود</span>
                                                <input type='file' class="hidden" id="uploaded" name="uploaded" @change="upload()"/>
                                            </label>
                                        </div> -->
                                </div>
                                <hr>
                            </div>
                            <div class="flex flex-col w-full p-2">
                                <div class="w-full flex justify-between items-center p-2">
                                    <div class="w-full">
                                        <div class="relative right-0">
                                            <h3>
                                                اطلاعات تکمیلی
                                            </h3>
                                        </div>
                                        <div class="flex flex-col pt-4 pb-2 w-full">
                                            <div class="flex w-full justify-between items-center">
                                            <div class="flex-col items-center">
                                                <small>مقطع تحصیلی</small>
                                                <div class="flex flex-col items-center relative">
                                                    <div class="w-full">
                                                        <div @click="opener(2)" class="my-2 bg-white p-1 flex border rounded" style="border-color: #d2d6dc;">
                                                            <input v-bind:value="dd2Selected" placeholder="پروژه درسی" disabled class="p-1 px-2 appearance-none outline-none w-full bg-white text-gray-800 unselecting">
                                                            <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-r flex justify-center items-center border-gray-200">
                                                                <div class="flex justify-center items-center cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4" v-bind:style="ddOpen === 2 ? 'transform: rotate(0deg);' : 'transform: rotate(180deg);'">
                                                                        <polyline points="18 15 12 9 6 15"></polyline>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <transition
                                                    enter-active-class="transition ease-out duration-100"
                                                    enter-class="transform opacity-0 scale-95"
                                                    enter-to-class="transform opacity-100 scale-100"
                                                    leave-active-class="transition ease-in duration-75"
                                                    leave-class="transform opacity-100 scale-100"
                                                    leave-to-class="transform opacity-0 scale-95"
                                                    >
                                                    <div v-show="ddOpen === 2" class="absolute shadow-md top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto">
                                                        <div class="flex flex-col w-full">
                                                            <div @click="dd2Handler(item);" v-for="item in dd2" v-bind:key="item.id" class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                                                                <div class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-primary hover:text-teal-100" v-bind:class="dd2Selected === item.name ? 'border-primary': ''">
                                                                    <div class="w-full items-center flex">
                                                                        <div class="mx-2 leading-6  "> {{item.name}} </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </transition>
                                                </div>
                                            </div>
                                        <div v-show="dd3Active" class="flex-col items-center">
                                            <small>رشته تحصیلی</small>
                                            <div class="flex flex-col items-center relative">
                                                <div class="w-full">
                                                    <div @click="opener(3)" class="my-2 bg-white p-1 flex border rounded" style="border-color: #d2d6dc;">
                                                        <input v-bind:value="dd3Selected" placeholder="پروژه درسی" disabled class="p-1 px-2 appearance-none outline-none w-full bg-white text-gray-800 unselecting">
                                                        <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-r flex justify-center items-center border-gray-200">
                                                            <div class="flex justify-center items-center cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4" v-bind:style="ddOpen === 3 ? 'transform: rotate(0deg);' : 'transform: rotate(180deg);'">
                                                                    <polyline points="18 15 12 9 6 15"></polyline>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <transition
                                                enter-active-class="transition ease-out duration-100"
                                                enter-class="transform opacity-0 scale-95"
                                                enter-to-class="transform opacity-100 scale-100"
                                                leave-active-class="transition ease-in duration-75"
                                                leave-class="transform opacity-100 scale-100"
                                                leave-to-class="transform opacity-0 scale-95"
                                                >
                                                <div v-show="ddOpen === 3" class="absolute shadow-md top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto">
                                                    <div class="flex flex-col w-full">
                                                        <div @click="dd3Handler(item)" v-for="item in dd3" v-bind:key="item.id" class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                                                            <div class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-primary hover:text-teal-100" v-bind:class="dd3Selected === item.name ? 'border-primary': ''">
                                                                <div class="w-full items-center flex">
                                                                    <div class="mx-2 leading-6  "> {{item.name}} </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </transition>
                                            </div>
                                        </div>
                                            </div>
                                            <div class="flex w-full justify-between items-center">
                                            <div class="flex-col items-center">
                                                <small>عنوان درس</small>
                                                <div class="flex flex-col items-center relative">
                                                    <div class="w-full">
                                                        <div @click="opener(4)" class="my-2 bg-white p-1 flex border rounded" style="border-color: #d2d6dc;">
                                                            <input v-bind:value="dd4Selected" placeholder="پروژه درسی" disabled class="p-1 px-2 appearance-none outline-none w-full bg-white text-gray-800 unselecting">
                                                            <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-r flex justify-center items-center border-gray-200">
                                                                <div class="flex justify-center items-center cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4" v-bind:style="ddOpen === 4 ? 'transform: rotate(0deg);' : 'transform: rotate(180deg);'">
                                                                        <polyline points="18 15 12 9 6 15"></polyline>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <transition
                                                    enter-active-class="transition ease-out duration-100"
                                                    enter-class="transform opacity-0 scale-95"
                                                    enter-to-class="transform opacity-100 scale-100"
                                                    leave-active-class="transition ease-in duration-75"
                                                    leave-class="transform opacity-100 scale-100"
                                                    leave-to-class="transform opacity-0 scale-95"
                                                    >
                                                    <div v-show="ddOpen === 4" class="absolute shadow-md top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto">
                                                        <div class="flex flex-col w-full">
                                                            <div @click="dd4Selected = item.name; opener(0)" v-for="item in dd4" v-bind:key="item.id" class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                                                                <div class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-primary hover:text-teal-100" v-bind:class="dd4Selected === item.name ? 'border-primary': ''">
                                                                    <div class="w-full items-center flex">
                                                                        <div class="mx-2 leading-6  "> {{item.name}} </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </transition>
                                                </div>
                                            </div>
                                        <div class="flex-col items-center">
                                            <small>تاریخ پایان پرسش</small>
                                            <Picker v-bind:ddOpen="this.ddOpen" v-bind:opener="this.opener" />
                                            <!-- <div class="flex flex-col items-center relative">
                                                <div class="w-full">
                                                    <div @click="dd5Open=!dd5Open" class="my-2 bg-white p-1 flex border rounded" style="border-color: #d2d6dc;">
                                                        <input v-bind:value="dd5Selected" placeholder="پروژه درسی" disabled class="p-1 px-2 appearance-none outline-none w-full bg-white text-gray-800 unselecting">
                                                        <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-r flex justify-center items-center border-gray-200">
                                                            <div class="flex justify-center items-center cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up w-4 h-4" v-bind:style="dd5Open ? 'transform: rotate(0deg);' : 'transform: rotate(180deg);'">
                                                                    <polyline points="18 15 12 9 6 15"></polyline>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <transition
                                                enter-active-class="transition ease-out duration-100"
                                                enter-class="transform opacity-0 scale-95"
                                                enter-to-class="transform opacity-100 scale-100"
                                                leave-active-class="transition ease-in duration-75"
                                                leave-class="transform opacity-100 scale-100"
                                                leave-to-class="transform opacity-0 scale-95"
                                                >
                                                <div v-show="dd5Open" class="absolute shadow-md top-100 z-40 w-full lef-0 rounded max-h-select overflow-y-auto">
                                                    <div class="flex flex-col w-full">
                                                        <div @click="dd5Selected = item.name; dd5Open = !dd5Open" v-for="item in dd5" v-bind:key="item.id" class="cursor-pointer w-full border-gray-100 border-b hover:bg-teal-100">
                                                            <div class="flex w-full items-center p-2 pl-2 border-transparent bg-white border-l-2 relative hover:bg-primary hover:text-teal-100" v-bind:class="dd5Selected === item.name ? 'border-primary': ''">
                                                                <div class="w-full items-center flex">
                                                                    <div class="mx-2 leading-6  "> {{item.name}} </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </transition>
                                            </div> -->
                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                            </div>
                            <div class="flex flex-col w-full p-2 justify-center items-center">
                                <div class="flex w-1/2 justify-center items-center">
                                    <button class="flex justify-center items-center bg-green w-full text-white font-bold p-2 m-4 rounded focus:outline-none focus:shadow-outline" style="box-shadow: 5px 5px 14px -6px rgba(23,198,152,0.9);">
                                        ثبت پروژه
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Picker from '~/components/dashboard/date_picker'
import Uploader from '~/components/dashboard/upload_file'

export default {
    mounted: function () {
        this.$store.commit("setUserDashPage", 'questions');
    },
    async asyncData({ $axios }) {
        const s_res = await $axios.$get("/api/initdata")
        return {
            categories: s_res.categories,
            dd2: s_res.halyab_grades,
        }
    },
    methods: {
        opener(id) {
            if (id === 3 && this.dd2Selected === '') {
                this.$toast.info(" ابتدا مقطع تحصیلی را انتخاب کنید ")
            } else if (id === 4 && this.dd3Selected === '') {
                this.$toast.info(" ابتدا رشته تحصیلی را انتخاب کنید ")
            } else {
                this.ddOpen === id ? this.ddOpen = 0 : this.ddOpen = id;
            }
        },
        dd2Handler(item) {
            this.dd3Selected = '';
            this.dd4Selected = '';
            this.dd5Selected = '';
            this.dd2Selected = item.name;
            this.ddOpen = 0;
            this.dd3Active = !item.category_less;
            if (!item.category_less) {
                function isInCat(x) {
                    return JSON.stringify(x.id) === JSON.stringify(item.id)
                }
                this.dd3 = this.categories.filter(category => category.grades.some(isInCat))
            }
        },
        dd3Handler(item) {
            this.dd4Selected = '';
            this.dd3Selected = item.name;
            this.ddOpen = 0;
            this.dd4 = item.sub_cats.map(sub => ({id: sub.id, name: sub.name}) );
        },
        upload() {
            console.log('change')
        }
    },
    data() {
        return {
            categories: [],
            ddOpen: 0,
            dd1: [],
            dd1Selected: '',
            dd2: [],
            dd2Selected: '',
            dd3Active: true,
            dd3: [],
            dd3Selected: '',
            dd4Enable: false,
            dd4: [],
            dd4Selected: '',
            dd5: [],
            dd5Selected: '',
        }
    },
    components: {
        Picker,
        Uploader
    },
    auth: true,
    layout: 'dashboard/user'
}
</script>

<style>

.form-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    border-color: #d2d6dc;
    border-width: 1px;
    border-radius: .375rem;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
}

.top-100 {
    top: 100%
}

.bottom-100 {
    bottom: 100%
}

.max-h-select {
    max-height: 300px;
}

.unselecting {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.unselecting::selection {
    background-color:transparent;
}

.unselecting::-moz-selection {
    background-color:transparent;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

</style>