<template>
  <li class="row flex-center" @click="onShowDetail">
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
import { useQuasar } from 'quasar'
import DetailDialog from '@/components/order/DetailDialog'

export default {
  name: "OrderItem",
  props: {
    item: Object,
  },
  setup(props) {
    const $q = useQuasar()

    const onShowDetail = () => {
      $q.dialog({
        component: DetailDialog,

        // props forwarded to your custom component
        componentProps: {
          drinkId: props.item.drinkId,
          drinkName: props.item.drinkName
          // ...more..props...
        },
      })
        .onOk(() => {
          console.log('OK')
        })
        .onCancel(() => {
          console.log('Cancel')
        })
        .onDismiss(() => {
          console.log('Called on OK or Cancel')
        })
    }
    return {onShowDetail}
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
