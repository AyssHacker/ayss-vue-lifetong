<template>
  <div class="list-wrapper">
    <food-list-sub
    v-for="(item, index) of foodDatas"
    :key="index"
    :data="item"
  ></food-list-sub>
  </div>
</template>

<script>
import FoodListSub from './Sub';
export default {
  name: 'FoodList',
  components: {
    FoodListSub
  },
  props: {
    foodDatas: Array
  }
}
</script>

<style lang="scss" scoped>

</style>