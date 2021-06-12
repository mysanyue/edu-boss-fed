<template>
  <div class="role">
    <role-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RoleList from './components/list.vue'

export default Vue.extend({
  name: 'AdvertIndex',
  components: {
    RoleList
  }
})
</script>
