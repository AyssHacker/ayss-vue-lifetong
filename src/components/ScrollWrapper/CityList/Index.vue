<template>
  <div class="list-wrapper">
    <city-list-sub
      v-for="(item, index) of cityList"
      :key="index"
      :cityInfo="item"
    ></city-list-sub>
  </div>
</template>

<script>
import CityListSub from './Sub';
import cityDatas from 'data/cities'
export default {
  name: 'CityList',
  components: {
    CityListSub
  },
  data () {
    return {
      cityList: cityDatas
    }
  }
}
</script>

<style lang="scss" scoped>

</style>