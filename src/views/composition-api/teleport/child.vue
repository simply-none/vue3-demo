<template>
  <button  @click="visible = true">打开弹窗</button>
  <teleport to="#teleport-root">
    <div v-if="visible" class="dialog">
      我是child组件的teleport<br/>
      展示父组件传入的name的值{{ name }}<br/>
      <button @click="visible = false">关闭弹窗</button>
    </div>
  </teleport>
  <teleport to="#teleport-root">
    <div class="second-tel">
      我是child组件第二个teleport
    </div>
  </teleport>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    name: String
  },
  setup (props) {
    console.log(props.name, 'name的值')
    const visible = ref(null)
    return {
      visible
    }
  }
}
</script>

<style scoped lang="scss">
.dialog {
  position: absolute;
  z-index: 100;
  right: 50%;
  bottom: 50%;
  width: fit-content;
  height: 20%;
  border: 1px solid red;
  background-color: yellow;
}
</style>

