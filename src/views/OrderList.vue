<template>
  <div class="wrap">
    <div class="title">
      <h3>{{ orderName }}</h3>
      <p>{{ description }}</p>
    </div>
    <q-btn label="주문 마감하기" type="submit" size="x" class="close-order" />
    <p class="total">전체 {{ total }} 잔</p>
    <SearchDrink :drinks="drinks" @add-drink="addDrink" />
  </div>
</template>

<script>
import { reactive } from 'vue'
import SearchDrink from '../components/SearchDrink.vue'
export default {
  components: { SearchDrink },
  setup() {
    const orderName = '6/1 커피 타임'
    const description = '10시까지 주문 부탁드립니다.'
    const total = 0
    const drinks = reactive(['americano', 'lattee', 'milk', 'juice'])

    const addDrink = (drink) => drinks.push(drink)
    return { orderName, description, total, drinks, addDrink }
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
