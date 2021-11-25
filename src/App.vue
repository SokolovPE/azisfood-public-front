<template>
  <v-app>
    <navbar />
    <v-main class="main">
      <v-container class="main-container">
        <!--        <v-row style="height: 200px">-->
        <!--        </v-row>-->
        <router-view />
      </v-container>
      <bottom-nav v-if="isMobile" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

import Navbar from '@/modules/layout/components/Navbar.vue';
import BottomNav from '@/modules/layout/components/BottomNav.vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    navbar: Navbar,
    'bottom-nav': BottomNav,
  },
  methods: {
    onResize() {
      const isMobile = window.innerWidth < 600;
      this.setDeviceType(isMobile);
    },
    ...mapActions('ui', ['setDeviceType']),
  },
  computed: {
    ...mapGetters('ui', ['isMobile']),
  },
  beforeDestroy() {
    if (typeof window === 'undefined') return;

    window.removeEventListener('resize', this.onResize);
  },

  mounted() {
    this.onResize();

    window.addEventListener('resize', this.onResize, { passive: true });
  },
});
</script>

<style lang="scss">
.main {
  background-color: #eeeeee;

  /* background-color: #fefefe; */
  /* background-color: #f5f5f5;*/
}

@media (min-width: 1264px) {
  .container {
    max-width: 1254px;
  }
}
</style>
