<template>
  <div class="menu-create">
    <create-or-edit :is-edit="false" />
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
