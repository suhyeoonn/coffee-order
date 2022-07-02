<template>
  <li>
    <span>{{order.nickname}} {{ request }}</span>
  </li>
</template>

<script>
import { computed } from 'vue'

export default {
  name: "OrderDetail",
  props: {
    order: Object,
  },
  setup(props) {
    const request = computed(() =>props.order.request && `(${props.order.request})`)
    return {request}
  }
}
</script>

<style scoped>

</style>
