<script>
import { ref, reactive, computed, provide, readonly } from 'vue'
import Child from './basic-child.vue'
export default {
  components: { Child },
  setup (props, context) {
    // 此处只能访问props,attrs,slots,emit
    let count = ref(0)
    let optionsCount = ref(null)
    // reactive对于不修改引用，仅修改内部的属性时，readonly对其不生效
    let todos = reactive(['看书', '写字', '找对象'])
    function addProperty () {
      console.log(todos)
      if (todos.length >= 5) {
        return false
      }
      count.value++
      todos.push('找对象' + Date.now())
    }
    function subProperty () {
      if (todos.length <= 3) {
        return false
      }
      count.value--
      todos.pop()
    }

    // 使用provide
    // 若是设置length，todos变化，不会跟着变😢😢😢
    provide('todosLength', todos.length)
    provide('todos', todos)
    provide('todosReadonly', readonly(todos))
    provide('count', count)
    provide('countReadonly', readonly(count))
    provide('optionsCount', optionsCount)

    return {
      todos,
      count,
      optionsCount,
      addProperty,
      subProperty
    }
  },
  methods: {
    addPropertyByMethod () {
      if (this.todos.length >= 5) {
        return false
      }
      this.todos.push('找对象' + Date.now())
    },
    subPropertyByMethod () {
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
    count: {{ count }}<br/>
    optionsCount: {{ optionsCount }}<br/>
    <hr/>
    
    <button @click="addProperty">增加属性</button>
    <button @click="subProperty">删除属性</button><br/>
    <button @click="addPropertyByMethod">增加属性在方法中</button>
    <button @click="subPropertyByMethod">删除属性在方法中</button><br/>
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