<template>
  <div class="home">
    <Hero />
    <Allque />
    <AllqueNews />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/landing/hero_section.vue'
import Allque from '~/components/web/allque.vue'
import AllqueNews from '~/components/web/allque_news.vue'
import Footer from '~/components/landing/footer.vue'

export default {
  components: {
    Allque,
    AllqueNews,
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
