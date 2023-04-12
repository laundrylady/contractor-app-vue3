import { useUserStore } from 'src/stores/user'
import { computed } from 'vue'

const useMixinSecurity = () => {
  const store = useUserStore()
  const user = computed(() => store.data)
  return { user }
}
export { useMixinSecurity }
