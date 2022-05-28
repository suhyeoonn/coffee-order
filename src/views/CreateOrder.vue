<template>
  <div class="q-pa-md">
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
  font-size: 3rem;
}
div {
  width: 400px;
}
</style>
