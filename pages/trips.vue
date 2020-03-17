<template>
  <div class="container">
    <div class="flex justify-center items-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img v-bind:src="trip.imgURL" class="w-full" alt="Sunset in the mountains">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              {{ trip.title }}
            </div>
            <p class="text-gray-700 text-base">
              {{ trip.description }}
            </p>
        </div>
        <div class="px-6 py-4">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  async asyncData({ $axios }) {
      const response = await $axios.$post("http://rest.3tour.ir/trips/getRecent");
      console.log({response})
      return {trip: response.data.trips[0]}
  },
  components: {
    Logo
  }
}
</script>


<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>>