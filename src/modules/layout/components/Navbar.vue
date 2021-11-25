<template>
  <v-app-bar app color="indigo" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="@/assets/brand/logo.png"
        transition="scale-transition"
        width="90"
      />
    </div>

    <v-spacer></v-spacer>
    <template v-if="!isMobile">
      <v-btn class="nav-btn" text to="/menu" color="white">Menu</v-btn>
      <v-btn class="nav-btn" text to="/offers" color="white">Offers</v-btn>
      <v-btn class="nav-btn" text to="/royals" color="white">Azis Royals</v-btn>
      <v-btn class="nav-btn" text to="/restaurants" color="white">We on map</v-btn>
      <v-btn class="nav-btn" text to="/about" color="white">About</v-btn>
    </template>
    <v-spacer></v-spacer>
    <v-btn class="func-btn" color="white" text>
      Login
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-badge
      :value="getCartStatus.visible"
      :content="getCartStatus.count"
      color="red darken-1"
      overlap
      style="margin-left: 10px"
    >
      <v-btn id="cart-btn" class="func-btn" color="white" rounded>
        <v-icon color="red darken-1">mdi-cart</v-icon>
      </v-btn>
    </v-badge>
    <!-- <router-link to="/profile">
        <v-badge
            bordered
            bottom
            color="success"
            dot
            offset-x="10"
            offset-y="10"
            class="pl-2"
        >
            <v-avatar color="primary" size="40"
                ><v-img
                    v-if="true"
                    alt="Avatar"
                    lazy-src="@/assets/defaultProfile.png"
                    src="@/assets/defaultProfile.png" /><v-icon
                    v-else
                    color="secondary"
                    v-text="`ZZ`"
                ></v-icon
            ></v-avatar>
        </v-badge>
    </router-link> -->
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'navbar',
  computed: {
    getCartStatus() {
      const value = 0;
      return {
        visible: value > 0,
        count: value,
      };
    },
    ...mapGetters('ui', ['isMobile']),
  },
});
</script>

<style scoped>
#cart-btn {
  width: 90px;
}

.nav-btn {
  height: 100% !important;
}
</style>
