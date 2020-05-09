<template>
  <div class="home">
    <Hero />
    <Contact_us_form />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/landing/hero_section.vue'
import Contact_us_form from '~/components/web/contact_us_form.vue'
import Footer from '~/components/landing/footer.vue'

export default {
  components: {
    Contact_us_form,
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
