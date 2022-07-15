<!-- 将其他内容放到setup选项中使用 -->
<script>
// 导入ref函数，创建响应式引用，使得任何响应式变量在任何地方起作用
import { ref, watch, computed, onMounted, toRefs } from 'vue'

export default {
  props: {
    msg: String
  },
  setup (props, context) {
    console.log(props, context, '测试')
    // 对应下面的watch msg，创建对props msg属性的响应式引用
    const { msg } = toRefs(props)
    // 可以写其他内容，若是直接使用常规赋值的形式，list的值是非响应式的，追踪不到变化
    let list = []
    // 引入ref，将list变成响应式变量，设置他的值时，是对该对象的value属性进行设置的
    let listRef = ref([])
    const getList = async () => {
      const reqList = await Promise.resolve([1, 2, 3, 4, 100, props.msg])
      list = reqList
      listRef.value = reqList
      console.log(list, listRef.value, '多大但')
    }

    // 在内部使用钩子函数
    onMounted(getList)

    // props的变量不能直接使用，需要先用toRefs解构后才能使用
    watch(msg, getList)

    // 使用computed，在computed中使用props的变量，也需要使用value引用，不然要报错
    const padStartMsg = computed(() => {
      console.log(msg, 'msg')
      return msg.value.padStart(10, 'T')
    })

    // 这里返回的任何内容都可以用于组件的其余部分
    return {
      // 返回props数据
      take: props.msg,
      // 返回请求函数
      getList,
      list,
      listRef,
      padStartMsg
    }
  }
}

</script>

<template>
  <div class="testDemo2">
    <div>test demo 2</div>
    <h1>{{ msg }}</h1>
    <pre>
      {{ list }}
      {{ listRef }}
      {{ padStartMsg }}
    </pre>
  </div>
</template>

<style scoped lang="scss">
.testDemo2 {
  border: 1px solid red;
  margin: 1em;
  padding: 1em;
}
a {
  color: #42b983;
}
</style>
