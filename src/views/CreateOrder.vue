<template>
  <div class="q-pa-lg shadow-6">
    <h1>주문서 생성</h1>
    <CreateOrderForm />
  </div>
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
div {
  width: 400px;
  border-radius: 5px;
}
</style>
