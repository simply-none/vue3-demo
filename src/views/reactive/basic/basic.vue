<script>
import { ref, reactive, toRefs, readonly } from 'vue'

export default {
  setup () {
    // 创建响应式变量
    const count = ref(0)
    const person = reactive({
      name: 'jade qiu',
      age: 27,
      count
    })

    // 若要使响应式对象解构后的属性和原对象保持关联，必须this用toRefs
    let { name } = person
    let { age } = toRefs(person)
    
    // 创建非object对象，例如数组类型
    const nums = reactive([1, 2, 3, 4, count])
    const personNoReactive = {
      name: 'jade qiu',
      age: 27,
      count
    }
    // 对于响应式对象非object类型的ref变量，不会直接解包，通过.value访问属性
    console.log(nums[4].value, '响应式变量非object类型')
    // 对于响应式对象Object类型的ref变量，会直接解包，直接访问属性
    console.log(person.count, '响应式变量object类型')


    // 修改响应式变量的值
    const addCount = () => {
      count.value += 1
    }
    const addPersonSex = () => {
      person.sex = 'male'
    }
    const changeVarInNoReactive = () => {
      person.name = 'jade new name' + Math.floor(Math.random() * 100)
      // name解构后就是一个普通的变量，失去了响应式，使用name或者name.value都无效，当前就算一个字符串罢了
      // Cannot create property 'value' on string 'jade qiu'
      name.value = 'test name'
    }
    const changeVarInReactive = () => {
      age.value = 'test age'
      person.age = 100 + Math.floor(Math.random() * 100)
    }

    // 只读的person
    const readonlyPerson = readonly(person)
    const changeReadonlyPerson = () => {
      // Set operation on key "name" failed: target is readonly. 
      readonlyPerson.name = 'only read name'
    }

    return {
      nums,
      count,
      person,
      personNoReactive,
      addCount,
      addPersonSex,
      age,
      name,
      changeVarInNoReactive,
      changeVarInReactive,
      readonlyPerson,
      changeReadonlyPerson
    }
  }
}
</script>

<template>
<div class='reactive-basic'>
  <div>
    count：{{ count }}<br/>
    非响应式对象: {{ personNoReactive }}<br/>
    响应式对象： {{ person }}<br/>
    只读的对象：{{ readonlyPerson }}<br/>
    响应式非object类型对象：{{ nums }}<br/>
    从reactive对象解构的变量，非响应式：{{ name }}<br/>
    从reactive对象解构的变量，响应式：{{ age }}<br/>
    <hr/>
    <div>
      使用函数的形式，函数内部要使用count.value：
      <button @click="addCount">加一</button>
    </div>
    <div>
      使用JavaScript表达式，直接使用count：
      <button @click="count ++">加一</button>
    </div>
    <div>
      使用JavaScript表达式，count嵌套在非响应式对象中要使用.value：
      <button @click="personNoReactive.count.value ++">加一</button>
    </div>
    <div>
      使用JavaScript表达式，count嵌套在响应式对象中直接使用：
      <button @click="person.count ++">加一</button>
    </div>
  </div>
  <div>
    <button @click="addPersonSex">增加性别</button><br/>
    <button @click="changeVarInReactive">解构的响应式变更</button>
    <button @click="changeVarInNoReactive">解构的非响应式变更</button><br/>
    <button @click="changeReadonlyPerson">对只读的person进行修改</button>
  </div>
</div>
</template>

<style scoped lang="scss">
.reactive-basic {
  border: 1px solid red;
  margin: 1em;
  padding: 1em;
}
</style>