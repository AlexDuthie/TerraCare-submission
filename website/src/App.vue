<template>
  <main>
    <SiteNavBar/>
    <SiteFooter/>
  </main>
</template>

<script>
import SiteNavBar from '@/components/SiteNavBar.vue';
import SiteFooter from '@/components/SiteFooter.vue';

export default {
  name: 'nav',
  components: {
    SiteNavBar,
    SiteFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(assets/background4.jpeg);
  background-size: cover;
  background-position: center;
  height: 150vh;
}

#app_logo {
  width: 100px;
  height: 100px;
}
</style>
