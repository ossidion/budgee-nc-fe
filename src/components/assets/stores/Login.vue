<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/'
import api from '@/services/api'

const username = ref('')
const password = ref('')
const userStore = useUserStore()

const login = async () => {
  try {
    const { data } = await api.post('/auth/login', {
      username: username.value,
      password: password.value,
    })

      userStore.setUser(data.user)
  } catch (err) {
    console.error('Login failed', err)
  }
}
</script>
