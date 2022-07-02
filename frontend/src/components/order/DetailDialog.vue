<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <div class="dialog">
        <h3>{{drinkName}}</h3>
        <div>
          <h4>Hot: {{orders.hot.length}}</h4>
          <ul>
            <OrderDetail v-for="order in orders.hot" :key="order" :order="order" />
          </ul>
        </div>
        <div>
          <h4>Ice: {{orders.ice.length}}</h4>
          <ul>
            <OrderDetail v-for="order in orders.ice" :key="order" :order="order" />
          </ul>
        </div>
      </div>

      <!-- buttons example -->
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar'
import orderService from '@/services/orderService'
import { reactive } from 'vue'
import OrderDetail from '@/components/order/OrderDetail'

export default {
  components: { OrderDetail },
  props: {
    drinkId: Number,
    drinkName: String,
    // ...your custom props
  },
  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
  ],
  setup(props) {
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK } = useDialogPluginComponent()
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome

    const orders = reactive({hot:[], ice:[]})
    const fetchOrderDetail = async () => {
      const res = await orderService.getOrderDetail(1, props.drinkId)
      orders.hot = res.data.filter(v => v.drinkType === 0)
      orders.ice = res.data.filter(v => v.drinkType === 1)
    }
    fetchOrderDetail()
    return {
      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      dialogRef,
      onDialogHide,

      // other methods that we used in our vue html template;
      // these are part of our example (so not required)
      onOKClick() {
        // on OK, it is REQUIRED to
        // call onDialogOK (with optional payload)
        onDialogOK()
        // or with payload: onDialogOK({ ... })
        // ...and it will also hide the dialog automatically
      },

      // we can passthrough onDialogCancel directly
      orders
    }
  },
}
</script>

<style lang="scss" scoped>
.dialog {
  padding: 1rem;
}

.field-group {
  padding: 0 0.5rem;
}
</style>
