<template>
  <div class="advert">
    <resource-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ResourceList from './components/list.vue'

export default Vue.extend({
  name: 'AdvertIndex',
  components: {
    ResourceList
  }
})
</script>

<style lang="scss" scoped></style>
