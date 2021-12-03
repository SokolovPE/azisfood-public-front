<template>
  <v-row class="justify-md-center scrollable-x d-flex">
    <category
      v-for="category in categories"
      :key="category.id"
      :item="category"
      :selected="category.id === selectedCategory.id"
      :height="itemHeight"
      @click="select(category)"
    />
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Category from '@/modules/catalog/models/Category';
import CategoryItem from '@/modules/catalog/components/Category/CategoryItem.vue';

export default Vue.extend({
  name: 'CategorySmList',
  components: {
    category: CategoryItem,
  },
  props: {
    categories: {
      type: Array as () => Category[],
      required: true,
    },
    itemHeight: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      selectedCategory: new Category(),
    };
  },
  methods: {
    select(category: Category) {
      this.selectedCategory = category;
    },
  },
  watch: {
    async selectedCategory(newValue) {
      this.$emit('changed', newValue);
    },
    categories(newValue) {
      [this.selectedCategory] = newValue;
    },
  },
});
</script>

<style scoped>
.scrollable-x {
  flex-wrap: nowrap;
  overflow-x: auto;
}
</style>
