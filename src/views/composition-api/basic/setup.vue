<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import testDemo1 from './testDemo1.vue'
import TestDemo2 from './testDemo2.vue'
import TestDemo3 from './testDemo3/index.vue'

import { ref } from 'vue'

export default {
  components: {
    testDemo1,
    TestDemo2,
    TestDemo3
  },
  setup () {
    let msg = ref('test')
    let color = ref('red')
    return {
      msg,
      color
    }
  }
}
</script>

<template>
  <input type="color" v-model="color"/>
  <input v-model="msg"/>
  <testDemo1 :msg="msg" />
  <TestDemo2 :msg="msg" />
  <TestDemo3 :msg="msg" />
  <h6></h6>
</template>

<style>
input {
  color: v-bind(color);
}
h6 {
  background-color: v-bind(color);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100px;
  height: 100px;
  position: fixed;
  right: 10px;
}
</style>
