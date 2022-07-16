<script>
import { ref, computed, inject } from 'vue'
export default {
  setup () {
    const parentTodosLength = inject('todosLength', 0)
    const parentTodos = inject('todos', [])
    const parentTodosReadonly = inject('todosReadonly', [])
    const parentCount = inject('count', 0)
    // readonly也没用啊😢😢😢
    const parentCountReadonly = inject('countReadonly', 0)
    // 默认值怎么没有用呢？😢😢😢
    const parentOptionalCount = inject('optionsCount', 100)

    return {
      parentTodosReadonly,
      parentTodosLength,
      parentTodos,
      parentCount,
      parentCountReadonly,
      parentOptionalCount
    }
  }
}
</script>

<template>
  <div class="basic1">
    todos: {{ parentTodos }}<br/>
    无效的todosReadonly: {{ parentTodosReadonly }}<br/>
    todosLength: {{ parentTodosLength }}<br/>
    count: {{ parentCount }}<br/>
    countReadonly: {{ parentCountReadonly }}<br/>
    optionsCount: {{ parentOptionalCount }}
  </div>
</template>

<style scoped lang="scss">
</style>