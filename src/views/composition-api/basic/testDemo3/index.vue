<!-- 组合式函数用法  -->
<script>
import { toRefs } from 'vue'

import getListC from './getList.vue'
import padStartMsgC from './padStartMsg.vue'

export default {
  props: {
    msg: String
  },
  setup (props, context) {
    const { msg } = toRefs(props)

    const { list, listRef, getList } = getListC(msg)
    const { padStartMsg } = padStartMsgC(msg)

    return {
      list,
      listRef,
      getList,
      padStartMsg
    }
  }
}
</script>

<template>
  <div class="testDemo3">
    <div>test demo 3</div>
    <h1>{{ msg }}</h1>
    <pre>
      {{ list }}
      {{ listRef }}
      {{ padStartMsg }}
    </pre>
  </div>
</template>

<style scoped lang="scss">
.testDemo3 {
  border: 1px solid red;
  margin: 1em;
  padding: 1em;
}
a {
  color: #42b983;
}
</style>