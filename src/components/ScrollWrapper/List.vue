<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!errorShow">
        <view-list
        v-if="field === 'view'"
        :viewDatas="listData[cityId]"
        ></view-list>

        <food-list 
          v-if="field === 'food'" 
          :foodDatas="listData[cityId]"
        ></food-list>

        <hotel-list 
          v-if="field === 'hotel'" 
          :hotelDatas="listData[cityId]"
        ></hotel-list>

        <massage-list
          v-if="field === 'massage'"
          :massageDatas="listData[cityId]"
        ></massage-list>

        <ktv-list 
          v-if="field === 'ktv'" 
          :ktvDatas="listData[cityId]"
        ></ktv-list>

        <loading 
          :loadingShow="loadingShow"
        ></loading>
      </div>

      <error
        :errorShow="errorShow"
      ></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import { mapState } from "vuex";
import { ListModel } from "models/list";
import tools from "utils/tools";

import ViewList from "./ViewList";
import FoodList from "./FoodList";
import HotelList from "./HotelList";
import MassageList from "./MassageList";
import KtvList from "./KtvList";
import Loading from "./Sub/Loading";
import Error from './Sub/Error';

export default {
  name: "ListScrollWrapper",
  components: {
    ViewList,
    FoodList,
    HotelList,
    MassageList,
    KtvList,
    Loading,
    Error
  },
  data() {
    return {
      listData: {},
      loadingShow: true,
      errorShow: false
    };
  },
  computed: {
    ...mapState(["cityId", "field"]),
  },
  watch: {
    cityId() {
      this.getListDatas(this.cityId, this.field);
    },
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      mouseWheel: true,
      click: true,
      tap: true
    });
    this.getListDatas(this.cityId, this.field);
  },
  methods: {
    getListDatas(cityId, field) {
      if (!this.listData[cityId]) {
        const listModel = new ListModel();
        this.loadingShow = true;
        listModel.getListDatas(cityId, field).then((res) => {
          if (res && res.status === 0) {
            const data = tools.formatJSON(res.data, "keyword");
            this.errorShow = false;

            setTimeout(() => {
              this.listData[cityId] = data;
              this.loadingShow = false;
            }, 500);
          }else{
            this.errorShow = true;
            console.log({
            statusCode: res.status,
            errorMsg: res.err
          });
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>