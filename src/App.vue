<template>
  <v-app>
    <navbar />
    <v-main class="main">
      <category-list />
      <v-container
        class="main-container"
        :class="[{ 'main-container-xs': $vuetify.breakpoint.xsOnly }]"
      >
        <router-view />
      </v-container>
      <bottom-nav v-if="$vuetify.breakpoint.xsOnly" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import Navbar from '@/modules/layout/components/Navbar.vue';
import CategoryList from '@/modules/catalog/components/Category/CategoryList.vue';
import BottomNav from '@/modules/layout/components/BottomNav.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Navbar,
    CategoryList,
    BottomNav,
  },

  data: () => ({
    //
  }),
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

.main-container {
  margin-top: 64px;
}

.main-container-xs {
  padding-bottom: 56px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
}
</style>
