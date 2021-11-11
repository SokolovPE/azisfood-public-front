<template>
  <catalog />
</template>

<script lang="ts">
import Vue from 'vue';
import CatalogView from '@/modules/catalog/views/CatalogView.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    catalog: CatalogView,
  },
});
</script>
