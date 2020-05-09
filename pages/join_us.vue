<template>
  <div class="home">
    <Hero />
    <Join_us_form />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/landing/hero_section.vue'
import Join_us_form from '~/components/web/join_us_form.vue'
import Footer from '~/components/landing/footer.vue'

export default {
  components: {
    Join_us_form,
    Footer
  },
  auth: false,
  layout: "landing"
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


</style>
