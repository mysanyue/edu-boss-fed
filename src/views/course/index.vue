<template>
  <div class="course">
    <course-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import courseList from './components/courseList.vue'

export default Vue.extend({
  name: 'CourseIndex',
  components: { courseList }
})
</script>
