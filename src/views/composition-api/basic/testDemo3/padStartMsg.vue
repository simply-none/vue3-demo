<script>
import { ref, computed} from 'vue'

export default function padStartMsg(msg) {
  const padStartMsg = computed(() => {
    console.log(msg, 'msg')
    return msg.value.padStart(10, 'T')
  })
  return {
    padStartMsg
  }
}
</script>