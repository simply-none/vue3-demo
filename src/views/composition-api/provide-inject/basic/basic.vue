<script>
import { ref, reactive, computed } from 'vue'
import Child from './basic-child.vue'
export default {
  components: { Child },
  data () {
    return {
      todos: ['看书', '写字', '找对象']
    }
  },
  provide () {
    return {
      todosLength: this.todos.length,
      todosLengthByComputed: computed(() => this.todos.length)
    }
  },
  setup (props, context) {
    // 此处只能访问props,attrs,slots,emit
  },
  methods: {
    addProperty () {
      if (this.todos.length >= 5) {
        return false
      }
      this.todos.push('找对象' + Date.now())
    },
    subProperty () {
      if (this.todos.length <= 3) {
        return false
      }
      this.todos.pop()
    }
  }
}
</script>

<template>
  <div class="basic">
    父组件<hr/>
    todos: {{ todos }}<br/>
    todosByRef: {{ todosByRef }}<br/>
    <hr/>
    
    <button @click="addProperty">增加属性</button>
    <button @click="subProperty">删除属性</button><br/>
    <hr/>
    子组件：<hr/>
    <Child/>
  </div>
</template>

<style scoped lang="scss">
.basic {
  border: 1px solid red;
  margin: 1em;
  padding: 1em;
}
</style>