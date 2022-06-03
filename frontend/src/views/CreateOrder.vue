<template>
  <h1>주문서 생성</h1>
  <CreateOrderForm />
</template>

<script>
import CreateOrderForm from '@/components/CreateOrderForm'

export default {
  name: 'Home',
  components: {
    CreateOrderForm,
  },
}
</script>
<style scoped lang="scss">
h1 {
  font-size: 2rem;
  font-weight: 400;
}
</style>
