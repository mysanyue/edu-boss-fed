<template>
  <div class="user">
    <user-list />

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import userList from './components/userList.vue'

export default Vue.extend({
  name: 'AdvertIndex',
  components: {
    userList
  }
})
</script>
