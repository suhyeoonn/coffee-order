<template>
  <q-form @submit.prevent="onSubmit">
    <q-input v-model="nickname" label="닉네임" />
    <q-input v-model="title" label="주문서 이름" />
    <q-input v-model="description" label="설명" />
    <Button label="주문서 만들기"></Button>
  </q-form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import billService from '@/services/billService.js'
import Button from '@/components/Button'
export default {
  components: { Button },
  setup() {
    const nickname = ref('')
    const title = ref('')
    const description = ref('')

    const route = useRouter()

    const onSubmit = async () => {
      const res = await billService.createBill(nickname.value, title.value, description.value)
      if (res.status === 200) {
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
form > * {
  margin-bottom: 1rem;
}
</style>
