<template>
  <div class="course-create">
    <create-or-update />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import createOrUpdate from './components/createOrUpdate.vue'

export default Vue.extend({
  name: 'CourseCreate',
  components: {
    createOrUpdate
  }
})
</script>
