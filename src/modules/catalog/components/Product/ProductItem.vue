<template>
  <v-card class="mx-2 my-2"  :class="[{ 'w-100': this.$vuetify.breakpoint.xsOnly }]">
    <v-img :src="fullUrl()" :height="calcSize()" :width="calcSize()">
      <template v-slot:placeholder>
        <v-sheet class="fill-height" color="grey lighten-4">
          <v-skeleton-loader class="fill-height" type="image" />
        </v-sheet>
      </template>
    </v-img>
    <v-divider />
    <v-card-title class="py-0 px-2 justify-center">
      {{ item.title }}
    </v-card-title>
    <v-card-actions class="px-1">
      <v-icon>mdi-currency-usd</v-icon>
      {{ item.price }}
      <v-spacer />
      <v-btn color="indigo" class="white--text" rounded>
        <v-icon>mdi-cart</v-icon>
        Add
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Product from '@/modules/catalog/models/Product';
import HelperService from '@/modules/common/services/Helper.service';

export default Vue.extend({
  name: 'ProductItem',
  props: {
    item: {
      type: Object as () => Product,
      required: true,
    },
  },
  methods: {
    fullUrl(): string {
      const partUrl = this.item.imageUrl || '/public/goods/placeholder.png';
      return HelperService.makeUrl(partUrl);
    },
    calcSize(): number {
      return this.$vuetify.breakpoint.mdAndUp ? 250 : 150;
    },
  },
});
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100%;
}
</style>
