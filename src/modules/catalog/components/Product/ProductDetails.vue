<template>
  <v-card>
    <v-row class="mr-0">
      <v-col class="product-details-left pr-0" cols="5">
        <v-card-title class="product-details-title pa-0">
          <!-- TODO: Add placeholder for loading-->
          <v-img class="product-image" :src="product.fullUrl" max-width="250">
            <template v-slot:placeholder>
              <v-sheet>
                <v-skeleton-loader />
              </v-sheet>
            </template>
          </v-img>
          <span class="product-title">{{ product.title }}</span>
        </v-card-title>
        <v-card-text class="product-description pt-2"> {{ product.description }} </v-card-text>
      </v-col>
      <v-col class="product-details-right">
        <v-card-title class="pa-2">Available options</v-card-title>
        <v-container class="px-0">
          <v-row class="mx-auto">
            <option-item
              :item="option"
              v-for="option in product.optionId"
              :key="option"
            />
          </v-row>
        </v-container>
        <v-card-title class="pa-2">Ingredients</v-card-title>
      </v-col>
    </v-row>

    <v-card-actions class="product-details-actions mt-2">
      <v-btn color="deep-purple lighten-2" text> Reserve</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { plainToInstance } from 'class-transformer';
import ProductQL from '@/modules/catalog/models/ProductQL';
import Option from '@/modules/catalog/models/Option';
import { ProductDetailsQuery } from '@/modules/catalog/graphql/Queries.graphql';

import OptionItem from '@/modules/catalog/components/Product/OptionItem.vue';

export default Vue.extend({
  name: 'ProductDetails',
  components: {
    OptionItem,
  },
  props: {
    itemId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: {} as ProductQL,
      loading: true,
    };
  },
  methods: {
    makeFakeOption(id: string) {
      return new Option(id);
    },
  },
  apollo: {
    product: {
      query: ProductDetailsQuery,
      variables() {
        return {
          productId: this.itemId,
        };
      },
      update: (data) => plainToInstance(ProductQL, data.singleProduct),
    },
  },
});
</script>

<style scoped lang="scss">
.product-details-left {
  .product-details-title {
    flex-direction: column;
    background-color: #3f51b5;

    .product-title {
      color: white;
      margin-top: -20px;
      margin-bottom: 10px;
      font-size: 1.85rem;
      font-weight: bold;
      text-align: center;
    }
  }

  .product-description {
    font-size: 1.05rem;
  }
}

.product-details-right {
  background-color: #eeeeee;
}

.product-details-actions {
  justify-content: flex-end;
}
</style>
