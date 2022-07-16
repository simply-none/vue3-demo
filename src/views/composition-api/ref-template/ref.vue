<template>
  <!-- 使用divRef，这里不像vue2一样，需要在ref前面加冒号，直接使用就可 -->
  <div ref="divRef">
    <code></code>
    <p></p>
    <span></span>
  </div>
  <pre>
    {{ divRefVal }}
  </pre>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup () {
    // 先定义一个响应式的变量，对应上面的divRef
    const divRef = ref(null)
    let divRefVal = ref(null)

    // 挂载后才能获取到值
    onMounted(() => {
      console.log(divRef.value.innerHTML)
      divRefVal.value = divRef.value.innerHTML
    })

    return {
      divRef,
      divRefVal
    }
  }
}
</script>