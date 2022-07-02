<template>
  <li class="row flex-center">
    <span>{{ item.nickname }}</span>
    <q-btn label="주문하기" color="primary" @click="$emit('order-drink')" />
  </li>
</template>

<script>
export default {
  name: "OrderItem",
  props: {
    item: Object,
  }
}
</script>

<style scoped>

</style>
