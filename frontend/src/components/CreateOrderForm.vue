<template>
  <q-form @submit.prevent="onSubmit">
    <q-input v-model="nickname" label="닉네임" />
    <q-input v-model="orderName" label="주문서 이름" />
    <q-input v-model="description" label="설명" />
    <q-btn label="주문서 만들기" type="submit" size="x" />
  </q-form>
</template>

<script>
export default {
  data() {
    return {
      nickname: '',
      orderName: '',
      description: '',
    }
  },
  methods: {
    onSubmit() {
      //submit
    },
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
