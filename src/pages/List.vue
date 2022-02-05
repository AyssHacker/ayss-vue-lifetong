<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <tab></tab>
    <list-scroll-wrapper></list-scroll-wrapper>
  </div>
</template>

<script>
import fieldDatas from 'data/fields';
import { mapState } from 'vuex';
import CommonHeader from 'components/Header/Common';
import ListScrollWrapper from 'components/ScrollWrapper/List';
import Tab from 'components/Tab/Index';
export default {
  name: 'List',
  components: {
    CommonHeader,
    ListScrollWrapper,
    Tab
  },
  computed: {
    ...mapState(['field']),

    title(){
      return fieldDatas.find(item => item.field === this.field).iconText + '列表';
    }
  }
}
</script>

<style lang="scss" scoped>

</style>