<template>
  <nav class="left">
    <div class="left-item" :class="getMenuItem(route)" v-for="route in routes" @click="toggleRoute(route)">
      {{ route.name }}
    </div>
  </nav>
  <div class="right">
    <router-view/>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const state = reactive({
      routes: []
    })
    const { routes } = toRefs(state)
    const routers = useRouter()
    console.log(routers, '测试')
    routers.options.routes.forEach(route => {
      if (route.children) {
        routes.value.push({
          ...route,
          notLink: true
        })
      } else {
        routes.value.push(route)
      }
      if (route.children && typeof route.children === 'object') {
        route.children.forEach(child => {
          routes.value.push({
            ...child,
            isChild: true
          })
        })
      }
    })

    // 跳转路由
    const toggleRoute = (route) => {
      if (route.notLink) {
        return false
      }
      routers.push({
        name: route.name,
        params: {
          random: Math.random()
        }
      })
    }
    const getMenuItem = (route) => {
      const classs = []
      if (route.isChild) {
        classs.push('is-child')
      }
      if (route.notLink) {
        classs.push('not-link')
      }
      return classs
    }
    return {
      routes,
      toggleRoute,
      getMenuItem
    }
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-flow: row nowrap;
}
</style>

<style lang="scss" scoped>
.left {
  border-right: 3px solid red;
  margin-right: 10px;
  min-width: 200px;
  display: flex;
  flex-flow: column nowrap;
  &-item {
    /* flex: 1; */
    cursor: pointer;
    height: 2em;
    line-height: 2em;
    padding: 0 10px;
    color: blue;
    &.not-link {
      color: #000;
    }
    &.is-child {
      text-indent: 1em;
      color: blue;
    }
  }
}
</style>
