<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <div class="dialog">
        <div class="radio-group">
          <q-radio
            v-model="isHot"
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="hot"
            label="Hot"
          />
          <q-radio
            v-model="isHot"
            checked-icon="task_alt"
            unchecked-icon="panorama_fish_eye"
            val="ice"
            label="Ice"
          />
        </div>
        <div class="field-group">
          <q-input v-model="nickname" label="닉네임" />
          <q-input v-model="request" label="요청 사항" />
        </div>
      </div>

      <!-- buttons example -->
      <q-card-actions align="right">
        <q-btn label="Cancel" @click="onCancelClick" />
        <q-btn color="primary" label="OK" @click="onOKClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar'
import { ref } from 'vue'

export default {
  props: {
    // ...your custom props
  },

  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
  ],

  setup() {
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome
    const isHot = ref('hot')
    const nickname = ref('')
    const request = ref('')

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
      onCancelClick: onDialogCancel,
      isHot,
      nickname,
      request,
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
