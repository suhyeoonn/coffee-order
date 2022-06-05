<template>
  <h1>주문서 생성</h1>
  <CreateBillForm />
</template>

<script>
import CreateBillForm from '@/components/CreateBillForm'

export default {
  name: 'Home',
  components: {
    CreateBillForm,
  },
}
</script>
<style scoped lang="scss">
h1 {
  font-size: 2rem;
  font-weight: 400;
}
</style>
