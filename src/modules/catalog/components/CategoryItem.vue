<template>
  <div
    class="category d-flex align-center justify-center mx-4 my-1"
    :class="[{ active: selected }]"
    :style="{ height: `${height}px`}"
  >
    {{ item.title }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Product from '@/modules/catalog/models/Product';

export default Vue.extend({
  name: 'CategoryItem',
  props: {
    item: {
      type: Object as () => Product,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
    height: {
      type: Number,
      default: 50,
    },
  },
});
</script>

<style scoped lang="scss">
.category {
  font-size: 18px;
  font-weight: 300;

  &:hover {
    color: #e53935;
    cursor: pointer;
  }

  &.active {
    border-bottom: #e53935 solid 2px;
  }
}
</style>
