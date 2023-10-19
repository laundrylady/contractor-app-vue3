import { useCommonStore } from 'src/stores/common'
import { computed } from 'vue'

const useMixinCommon = () => {
  const store = useCommonStore()
  const common = computed(() => store.data)
  return common
}
export { useMixinCommon }
