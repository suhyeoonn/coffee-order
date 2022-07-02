<template>
  <li class="row flex-center">
    <span>{{ item.drinkName }}</span>
    <div class="drink-types">
      <div class="drink-type hot">
        <span>HOT</span>
        <span>{{item.hot}}</span>
      </div>
      <div class="drink-type ice">
        <span>ICE</span>
        <span>{{item.ice}}</span>
      </div>
    </div>
    <!--    <q-btn label="주문하기" color="primary" @click="$emit('order-drink')" />-->
  </li>
</template>

<script>
// import { reactive } from 'vue'

export default {
  name: "OrderItem",
  props: {
    item: Object,
  },
  setup(props) {
    console.log(props.item)
  }
}
</script>

<style scoped lang="scss">
.drink-types {
  .drink-type {
    display: flex;
    justify-content: space-between;
    span:nth-child(1) {
      margin-right: 3px;
    }
    span:nth-child(2) {
      text-align: right;
    }
  }

  .hot {
    color: var(--q-negative);
  }
  .ice {
    color: var(--q-primary);
  }


}
</style>
