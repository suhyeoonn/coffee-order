<template>
  <h3>Sign In please!!!!</h3>
  <form @submit.prevent="onSubmit">
    <q-input v-model="nickname" label="닉네임" />
    <q-input v-model="password" label="비밀번호" />
    <Button label="Sign In" />
  </form>
</template>

<script>
import { ref } from 'vue'
import authService from '@/services/authService'
import Button from '@/components/Button'
import { useRouter } from 'vue-router'

export default {
  name: 'SignIn',
  components: { Button },
  setup() {
    const nickname = ref('')
    const password = ref('')

    const route = useRouter()

    const onSubmit = async () => {
      const res = await authService.signIn(nickname.value, password.value)
      localStorage.setItem('token', res.data.token)
      await route.push('/')
    }

    return { nickname, password, onSubmit }
  },
}
</script>

<style scoped></style>
