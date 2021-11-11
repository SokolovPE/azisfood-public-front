<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/modules/layout/components/Navbar.vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    navbar: Navbar,
  },
});
</script>
