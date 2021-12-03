<template>
  <v-row>
    <v-col
      :cols="overflow ? 9 : 12"
      :sm="overflow ? 11 : 12"
      ref="categories"
      class="categories justify-center"
      :class="getState()"
    >
      <v-row :class="[{ 'justify-md-center': !overflow }]">
        <category
          v-for="category in categories"
          :key="category.id"
          :item="category"
          :selected="category.id === selectedCategory.id"
          :height="itemHeight"
          @click="select(category)"
        />
      </v-row>
    </v-col>
    <v-col v-if="overflow">
      <v-row class="categories justify-center" @click.stop="toggle">
        <div class="categories-expander d-flex align-center justify-start my-1">
          <v-icon :class="[{ 'chevron--expanded': expanded }]">mdi-chevron-down</v-icon>
          {{ expanded ? 'less' : 'more' }}
        </div>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Category from '@/modules/catalog/models/Category';
import CategoryItem from '@/modules/catalog/components/Category/CategoryItem.vue';

export default Vue.extend({
  name: 'CategoryMdList',
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
      overflow: false,
      expanded: false,
    };
  },
  methods: {
    select(category: Category) {
      this.selectedCategory = category;
    },
    getState() {
      return {
        'categories--expanded': this.overflow && this.expanded,
        'categories--collapsed': this.overflow && !this.expanded,
      };
    },
    toggle() {
      this.expanded = !this.expanded;
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
  async updated() {
    this.$nextTick(() => {
      const container = this.$refs.categories as HTMLElement;
      this.overflow = container.offsetHeight / (this.itemHeight + 10) > 1;
    });
  },
});
</script>

<style lang="scss" scoped>
.categories {
  justify-content: start !important;

  & .categories--collapsed {
    height: 70px;
    overflow: hidden;
  }

  & .categories--expanded {
    overflow: unset;
  }

  .categories-expander {
    font-size: 18px;
    font-weight: 300;
    height: 50px;

    & :hover {
      color: #e53935;
      cursor: pointer;
    }

    i {
      color: inherit;
    }

    .chevron--expanded {
      transform: rotate(-180deg);
    }
  }
}
</style>
