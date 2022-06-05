<template>
  <q-form @submit.prevent="onSubmit">
    <q-input v-model="nickname" label="닉네임" />
    <q-input v-model="title" label="주문서 이름" />
    <q-input v-model="description" label="설명" />
    <q-btn label="주문서 만들기" type="submit" size="x" />
  </q-form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import billService from '@/services/billService.js'
export default {
  setup() {
    const nickname = ref('')
    const title = ref('')
    const description = ref('')

    const route = useRouter()

    const onSubmit = async () => {
      const res = await billService.createBill(nickname.value, title.value, description.value)
      if (res.data.success) {
        route.push('/list')
      } else alert('error')
    }
    return {
      nickname,
      title,
      description,
      onSubmit,
    }
  },
}
</script>

<style scoped>
button {
  width: 100%;
  background: #ff0080;
  color: white;
}
form > * {
  margin-bottom: 1rem;
}
</style>
