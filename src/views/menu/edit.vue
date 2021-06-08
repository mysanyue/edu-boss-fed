<template>
  <div class="menu-edit">
    <create-or-edit :is-edit="true" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CreateOrEdit from './components/createOrEdit.vue'

export default Vue.extend({
  components: {
    CreateOrEdit
  },
  data() {
    return {}
  }
})
</script>
