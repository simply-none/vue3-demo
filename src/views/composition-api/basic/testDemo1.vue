<!-- 传统类似vue2 选项式用法 -->
<script>
// 导入ref函数，创建响应式引用，使得任何响应式变量在任何地方起作用
import { ref } from 'vue'

export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup (props, context) {
    console.log(props, context, '测试')
    // 可以写其他内容，若是直接使用常规赋值的形式，list的值是非响应式的，追踪不到变化
    let list = []
    let changeCount = 0
    // 引入ref，将list变成响应式变量，设置他的值时，是对该对象的value属性进行设置的
    let changeCountRef = ref(0)
    let listRef = ref([])
    const getList = async () => {
      const reqList = await Promise.resolve([1, 2, 3, 4, 100, props.msg])
      list = reqList
      changeCount += 1
      changeCountRef.value += 1
      listRef.value = reqList
      console.log(list, listRef.value, '多大但')
    }
    // 这里返回的任何内容都可以用于组件的其余部分
    return {
      // 返回props数据
      take: props.msg,
      // 返回请求函数
      getList,
      list,
      listRef,
      changeCount,
      changeCountRef
    }
  },
  created () {
    console.log(this.take, 'take 测试')
  },
  watch: {
    msg: 'getList'
  },
  mounted () {
    this.getList()
    console.log(this.listRef, this.list, 'ces')
  }
}
</script>

<template>
  <div class="testDemo1">
    <div>test demo 1</div>
    <h1>{{ msg }}</h1>
    <pre>
      msg值的改变次数：{{ changeCountRef }}，此处使用了ref
      msg值的改变次数：{{ changeCount }}，此处未使用ref
      {{ list }}
      {{ listRef }}
    </pre>
  </div>
</template>

<style scoped lang="scss">
.testDemo1 {
  border: 1px solid red;
  margin: 1em;
  padding: 1em;
}
a {
  color: #42b983;
}
</style>
