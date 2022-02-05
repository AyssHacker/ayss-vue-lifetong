<template>
  <div class="city-item">
    <span class="city" @click="onCityClick(cityInfo)">{{
      cityInfo.cityName
    }}</span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "CityListSub",
  props: {
    cityInfo: Object,
  },
  methods: {
    ...mapMutations(['selectCity']),
    onCityClick(cityInfo) {
      this.selectCity(cityInfo);
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
@import "~styles/variables.scss";

.city-item {
  @include flex-row;
  align-items: center;
  height: 0.5rem;
  padding-left: 0.15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  font-size: 0.16rem;
}
</style>