<template>
  <div class="home">
    <Nav />
    <Hero />
    <Feature />
    <App />
    <Prof />
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/navbar.vue'
import Hero from '~/components/landing/hero_section.vue'
import Feature from '~/components/landing/feature_section.vue'
import App from '~/components/landing/app_section.vue'
import Prof from '~/components/landing/professor_section.vue'
import Footer from '~/components/landing/footer.vue'

export default {
  components: {
    Nav,
    Hero,
    Feature,
    App,
    Prof,
    Footer
  },
  auth: false
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


</style>
