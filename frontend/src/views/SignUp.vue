<template>
  <h3>Sign Up</h3>
  <form @submit.prevent="onSubmit">
    <q-input v-model="nickname" label="닉네임" />
    <q-input v-model="password" label="비밀번호" />
    <Button label="Sign Up"/>
  </form>
</template>

<script>
import {ref} from 'vue'
import authService from '@/services/authService'
import Button from '@/components/Button'
import { useRouter } from 'vue-router'

export default {
  name: "SignUp",
  components: { Button },
  setup() {
    const nickname = ref('')
    const password = ref('')

    const route = useRouter()

    const onSubmit = async () => {
      await authService.signUp(nickname.value, password.value)
      await route.push("/signIn")
    }

    return {nickname, password, onSubmit}
  }
}
</script>

<style scoped>

</style>
