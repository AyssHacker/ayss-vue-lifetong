<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">

      <div v-if="!errorShow">
        <swiper :picDatas="detailData.pics"></swiper>

        <detail-view
          v-if="field === 'view'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openDateTime="detailData.open_datetime"
          :tip="detailData.tip"
          :intro="detailData.intro"
          :ticketInfo="detailData.ticket_info"
        ></detail-view>

        <detail-food
          v-if="field === 'food'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openDateTime="detailData.open_datetime"
          :recom="detailData.recom"
          :commentKeyword="detailData.comment_keyword"
        ></detail-food>

        <detail-hotel
          v-if="field === 'hotel'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :service="detailData.service"
        ></detail-hotel>

        <detail-massage
          v-if="field === 'massage'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :openDateTime="detailData.open_datetime"
          :commentKeyword="detailData.comment_keyword"
          :service="detailData.service"
        ></detail-massage>

        <detail-ktv
          v-if="field === 'ktv'"
          :name="detailData.name"
          :starNum="Number(detailData.star)"
          :score="detailData.score"
          :address="detailData.address"
          :price="Number(detailData.default_price)"
          :service="detailData.service"
        ></detail-ktv>
      </div>

      <error
        :errorShow="errorShow"
      ></error>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll';
import Swiper from './Sub/Swiper';
import DetailView from './Detail/View';
import DetailFood from './Detail/Food';
import DetailHotel from './Detail/Hotel';
import DetailMassage from './Detail/Massage';
import DetailKtv from './Detail/Ktv';
import Error from './Sub/Error';

import tools from 'utils/tools';


import { DetailModel } from 'models/detail';
export default {
  name: 'DetailScrollWrapper',
  components: {
    Swiper,
    DetailView,
    DetailFood,
    DetailHotel,
    DetailMassage,
    DetailKtv,
    Error
  },
  data(){
    return {
      id: 0,
      field: '',
      errorShow: false,
      detailData: {}
    }
  },
  activated(){
    this.currentId = this.$route.query.id;
    this.currentField = this.$route.query.field;

    if(this.currentId !== this.id || this.currentField !== this.currentField){
      this.id = this.currentId;
      this.field = this.currentField;
      this.getDetail(this.field, this.id);
    }
  },
  mounted(){
    this.scroll = new BetterScroll(this.$refs.wrapper,{
      mouseWheel: true,
      click: true,
      tap: true
    });
    this.id = this.$route.query.id;
    this.field = this.$route.query.field;
    this.getDetail(this.field, this.id);
  },
  methods: {
    getDetail(field, id){
      const detailModel = new DetailModel();
      detailModel.getDetail(field, id).then(res => {
        if(res && res.status === 0){
          this.errorShow = false;
          const data = res.data;
          data.pics && (data.pics = tools.jsonToArr(data.pics));
          data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword));
          data.recom && (data.recom = tools.replaceToSpace(data.recom));
          data.service && (data.service = tools.jsonToArr(data.service));

          this.detailData = data;
        }else {
          this.errorShow = true;
          console.log({
            statusCode: res.status,
            errorMsg: res.err
          });
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>