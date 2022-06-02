<template>
  <q-input v-model="keyword" label="음료 검색">
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
  </q-input>
  <ul>
    <li class="row flex-center" v-for="item in searchResults" :key="item">
      <span>{{ item }}</span>
      <q-btn label="주문하기" color="primary" />
    </li>
    <li v-if="keyword && !searchResults.length" class="row flex-center no-drink">
      <span>해당 음료가 없습니다.</span>
      <q-btn label="추가하기" color="primary" class="add-drink" @click="onClick" />
    </li>
  </ul>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  props: {
    drinks: Array,
  },
  setup(props, context) {
    const keyword = ref('')

    const searchResults = computed(() => props.drinks.filter((drink) => drink === keyword.value))

    const onClick = () => {
      context.emit('add-drink', keyword.value)
      // keyword.value = ''
    }

    return { keyword, searchResults, onClick }
  },
}
</script>

<style></style>
