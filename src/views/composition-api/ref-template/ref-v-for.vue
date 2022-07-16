<template>
  <div v-for="(item, i) in list" :ref="el => { if (el) divs[i] = el }">
    {{ item }}
  </div>
  <div>
    {{ divs }}
  </div>
</template>

<script>
  import { ref, reactive, onBeforeUpdate, onMounted, watchEffect } from 'vue'
  export default {
    setup () {
      const list = reactive([1, 2, 3])
      const divs = ref([])
      // 确保在每次更新之前重置ref
      onBeforeUpdate(() => {
        // 下面这行代码会将divs的值置空
        divs.value = []
      })

      onMounted(() => {
        console.log(divs.value, 'divs')
      })

      // 侦听ref的变更
      watchEffect(() => {
        console.log(divs.value, 'watchEffect')
      }, {
        flush: 'post'
      })

      return {
        list,
        divs
      }
    }
  }
</script>