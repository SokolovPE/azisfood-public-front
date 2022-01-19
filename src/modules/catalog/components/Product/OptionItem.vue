<template>
  <v-card class="ma-1 pa-1 text-center" max-width="100" outlined>
    <v-img :src="item.fullUrl" />
    <v-card-text class="pa-0">{{ item.title || 'Undefined' }}</v-card-text>
    <v-card-text class="pa-0">{{ item.price }}</v-card-text>
    <v-btn color="indigo" class="white--text" rounded outlined small>Add</v-btn>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Option from '@/modules/catalog/models/Option';

export default Vue.extend({
  name: 'OptionItem',
  props: {
    item: {
      type: Option,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss"></style>
