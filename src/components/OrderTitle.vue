<template>
  <div class="title">
    <h3>{{ orderName }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  setup() {
    const orderName = '6/1 커피 타임'
    const description = '10시까지 주문 부탁드립니다.'
    return { orderName, description }
  },
}
</script>

<style></style>
