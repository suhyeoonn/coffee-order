<template>
  <q-input v-model="keyword" label="음료 검색">
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  props: {
    drinks: Array,
  },
  setup(props) {
    const keyword = ref('')

    const searchResults = computed(() => props.drinks.filter((drink) => drink === keyword.value))

    return { keyword, searchResults }
  },
}
</script>

<style></style>
