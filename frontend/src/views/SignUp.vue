<template>
  <form @submit.prevent="onSubmit">
    <q-input model-value="nickname" label="닉네임" />
    <q-input model-value="password" label="비밀번호" />
  </form>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "SignUp",
  setup() {
    const nickname = ref('')
    const password = ref('')

    const onSubmit = () => {

    }

    return {nickname, password}
  }
}
</script>

<style scoped>

</style>
