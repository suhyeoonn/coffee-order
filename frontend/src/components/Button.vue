<template>
  <q-btn :label="label" type="submit" size="x" />
</template>

<script>
export default {
  name: "Button",
  props: {
    label: String,
  }
}
</script>

<style scoped>
button {
  width: 100%;
  background: #ff0080;
  color: white;
}
</style>
