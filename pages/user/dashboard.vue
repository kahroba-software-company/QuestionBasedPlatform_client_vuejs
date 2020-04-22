<template>
  <div class="user-dash">
      <!-- <Title title="پیشخوان" /> -->
      <div class="p-4 flex w-full">
        <div class="sm:w-1/2 w-full">
          <List v-bind:heads="this.heads" v-bind:items="this.items" title="پروژه های دیگران" />
        </div>
      </div>
  </div>
</template>

<script>
import Title from '~/components/dashboard/title.vue';
import List from '~/components/dashboard/narrow_list.vue';

export default {
  created: function () {
    this.$store.commit("setUserDashPage", 'dashboard');
  },
    async asyncData({ $axios }) {
      console.log("started")
    const res = await $axios.$get("/api/questions?others=true")
    return {items: res.results.slice(0,5)}
  },
  data() {
    return {
      items: [],
      heads: [
        {
          id: 1,
          persian: "موضوع",
          english: "subject",
        },
        {
          id: 2,
          persian: "مقطع",
          english: "grade_name"
        },
        {
          id: 3,
          persian: "سقف هزینه",
          english: "max_cost"
        },
        {
          id: 4,
          persian: "تعداد پیشنهاد",
          english: "num_offers"
        },
      ]
    }
  },
  components: {
    Title,
    List
  },
  auth: false,
  layout: 'dashboard/user',
}
</script>

<style>

.user-dash {
    background-color: rgb(240, 240, 240);
    height: 100%;
    height: 100vh;
    width: 100%;
    direction: rtl;
    padding-right: 250px;
}

</style>
