<script>
import { ref, computed } from 'vue'
export default {
  inject: ['todosLength', 'todosLengthByReactive', 'todosLengthByComputed']
}
</script>

<template>
  <div class="basic1">
    todosLength: {{ todosLength }}<br/>
    todosLengthByComputed: {{ todosLengthByComputed }}<br/>
  </div>
</template>

<style scoped lang="scss">
</style>