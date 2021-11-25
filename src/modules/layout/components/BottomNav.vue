<template>
  <v-bottom-navigation grow fixed color="primary">
    <v-btn to="/menu">
      <span>Menu</span>

      <v-icon>mdi-food</v-icon>
    </v-btn>

    <v-btn to="/offers">
      <span>Offers</span>

      <v-icon>mdi-ticket-percent</v-icon>
    </v-btn>

    <v-btn to="/royals">
      <span>Royals</span>

      <v-icon>mdi-crown</v-icon>
    </v-btn>

    <v-btn to="/about">
      <span>About</span>

      <v-icon>mdi-information</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BottomNav',
});
</script>

<style scoped></style>
