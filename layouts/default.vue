<template>
  <div id="#app">
    <NavBar />
    <Nuxt />
    <FooterBar />
  </div>
</template>

<script type="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DefaultLayout'
});
</script>
