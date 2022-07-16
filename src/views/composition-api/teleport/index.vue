<template>
  <div id="teleport-root"></div>
  <Child :name="jade"></Child>
</template>

<script>
import { ref } from 'vue'
import Child from './child.vue'

export default {
  components: { Child },
  setup () {
    const jade = ref('jade')
    return {
      jade
    }
  }
}
</script>
