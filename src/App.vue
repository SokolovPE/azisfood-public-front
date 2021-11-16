<template>
  <v-app>
    <navbar />
    <v-main>
      <v-container>
<!--        <v-row style="height: 200px">-->
<!--        </v-row>-->
        <v-row>
          <router-view/>
        </v-row>
      </v-container>
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
