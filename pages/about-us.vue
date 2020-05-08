<template>
  <div class="home">
    <Hero />
    <About_us />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/landing/hero_section.vue'
import About_us from '~/components/web/about_us.vue'
import Footer from '~/components/landing/footer.vue'

export default {
  components: {
    About_us,
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
