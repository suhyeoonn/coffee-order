<template>
  <div class="wrap">
    <OrderTitle />
    <q-btn label="주문 마감하기" type="submit" size="x" class="close-order" />
    <p class="total">전체 {{ total }} 잔</p>
    <SearchDrink :drinks="drinks" @add-drink="addDrink" @order-drink="orderDrink" />
    <ul>
      <OrderItem v-for="item in orders" :key="item" :item="item"/>
      <!--    <li v-if="keyword && !searchGroup.length" class="row flex-center no-drink">-->
      <!--      <span>해당 음료가 없습니다.</span>-->
      <!--      <q-btn label="추가하기" color="primary" class="add-drink" @click="onAddDrink" />-->
      <!--    </li>-->
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useQuasar } from 'quasar'
import SearchDrink from '../components/SearchDrink.vue'
import OrderTitle from '../components/OrderTitle.vue'
import OrderOptionDialog from '../components/OrderOptionDialog.vue'
import OrderItem from '@/components/order/OrderItem'
import orderService from '@/services/orderService'

export default {
  components: { SearchDrink, OrderTitle, OrderItem },
  setup(_, {emit}) {
    const total = 0
    const drinks = reactive(['americano', 'latte', 'milk', 'juice'])
    const $q = useQuasar()

    const addDrink = (drink) => drinks.push(drink)
    const orderDrink = () => {
      $q.dialog({
        component: OrderOptionDialog,

        // props forwarded to your custom component
        componentProps: {
          text: 'something',
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

    const onAddDrink = () => {
      // emit('add-drink', keyword.value)
      emit('add-drink', 'dummy')
      // keyword.value = ''
    }

    const data = reactive({
      orders: null
    })
    const fetchOrders = async () => {
      const res = await orderService.getOrders(1)
      data.orders = res.data
    }
    fetchOrders()

    return { total, drinks, addDrink, orderDrink, onAddDrink, ...toRefs(data) }
  },
}
</script>

<style lang="scss">
.wrap {
  text-align: left;
}
.title {
  margin-bottom: 2rem;
  h3 {
    margin: 0;
  }
}
.total {
  /* text-align: left; */
  margin: 1rem 0;
}

.close-order {
  width: 100%;
  background: #ff0080;
  color: white;
}
ul {
  padding: 0 1rem;
  li {
    border-bottom: 1px solid #eee;
    padding: 0.5rem 0;
    span {
      flex: 1;
    }
  }
}

.no-drink {
  text-align: center;
  & > span {
    color: gray;
    font-style: italic;
  }
  button {
    width: 100%;
  }
}
</style>
