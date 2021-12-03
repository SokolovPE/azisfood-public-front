<template>
  <v-card height="145" class="mx-2 my-2 w-100" v-if="this.$vuetify.breakpoint.smAndDown">
    <div class="d-flex flex-no-wrap fill-height">
      <v-avatar class="mx-3" size="125" tile>
        <v-img :src="fullUrl()"></v-img>
      </v-avatar>
      <div class="w-100">
        <v-card-title class="text-h6 product-title pr-2 pt-2" v-text="item.title"></v-card-title>
        <v-divider />
        <v-card-actions class="px-1 pr-2 product-actions">
          <v-icon>mdi-currency-usd</v-icon>
          {{ item.price }}
          <v-btn color="indigo" class="ml-4 white--text" rounded small>
            <v-icon>mdi-cart</v-icon>
            Add
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
  <v-card class="mx-2 my-2" v-else>
    <v-img :src="fullUrl()" height="250" width="250">
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
  },
});
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100%;
}

.product-title {
  word-break: break-word;
  text-align: end;
  justify-content: flex-end;
  height: 70%;
  align-items: flex-start;
}

.product-actions {
  justify-content: flex-end;
}
</style>
