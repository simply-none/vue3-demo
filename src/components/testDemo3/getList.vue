<!-- 函数式组件，只有逻辑处理，无ui模板 -->
<script>
import { ref, watch, onMounted } from 'vue'

export default function getList (msg) {
  let list = []
  let listRef = ref([])
  const getList = async () => {
    const reqList = await Promise.resolve([1, 2, 3, 4, 100, msg.value])
    list = reqList
    listRef.value = reqList
    console.log(list, listRef.value, '组合式函数')
  }

  // 使用钩子函数
  onMounted(getList)

  // 监听msg变化
  watch(msg, getList)

  return {
    list,
    listRef,
    getList
  }
}
</script>
