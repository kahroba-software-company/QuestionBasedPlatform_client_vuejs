<template>
  <div class="user-dash sm:pr-250 h-full flex flex-col">
      <!-- <Title title="پیشخوان" /> -->
      <div class="p-4 flex sm:flex-row flex-col w-full">
        <div class="sm:w-2/3 w-full sm:pl-4">
          <List v-bind:heads="this.others_heads" v-bind:items="this.others_items" title="پروژه های دیگران" />
        </div>
        <div class="sm:w-1/3 sm:pt-0 pt-4 w-full">
          <Finance v-bind:transactions="this.transactions" />
        </div>
      </div>
      <div class="p-4 pt-2 h-full sm:pr-4">
        <div class="w-full">
          <List v-bind:heads="this.my_heads" v-bind:items="this.my_items" title="پروژه های من" />
        </div>
      </div>
  </div>

  
</template>

<script>
import Title from '~/components/dashboard/title.vue';
import List from '~/components/dashboard/narrow_list.vue';
import Finance from '~/components/dashboard/finance_card.vue';

export default {
  mounted: function () {
    this.$store.commit("setUserDashPage", 'dashboard');
  },
    async asyncData({ $axios }) {
    const f_res = await $axios.$get("/api/questions?others=true")
    const s_res = await $axios.$get("/api/questions")
    const t_res = await $axios.$get("/api/transactions")
    return {
      others_items: f_res.results.slice(0,4),
      my_items: s_res.results.slice(0,4),
      transactions: t_res.results.slice(0,3)
    }
  },
  data() {
    return {
      others_items: [],
      my_items: [],
      transactions: [],
      others_heads: [
        {
          id: 1,
          persian: "وضعیت",
          english: "state_name",
        },
        {
          id: 2,
          persian: "موضوع",
          english: "subject",
        },
        {
          id: 3,
          persian: "مقطع",
          english: "grade_name"
        },
        {
          id: 4,
          persian: "سقف هزینه",
          english: "max_cost"
        },
        {
          id: 5,
          persian: "تعداد پیشنهاد",
          english: "num_offers"
        },
      ],
      my_heads: [
        {
          id: 1,
          persian: "وضعیت",
          english: "state",
        },
        {
          id: 2,
          persian: "موضوع",
          english: "subject",
        },
        {
          id: 3,
          persian: "مقطع",
          english: "grade_name"
        },
        {
          id: 4,
          persian: "سقف هزینه",
          english: "max_cost"
        },
        {
          id: 5,
          persian: "تعداد پیشنهاد",
          english: "num_offers"
        },
      ]
    }
  },
  components: {
    Title,
    List,
    Finance

  },
  auth: true,
  layout: 'dashboard/user',
}
</script>

<style>

.user-dash {
    background-color: #f7fafc;
    height: 100%;
    width: 100%;
    direction: rtl;
}

</style>
