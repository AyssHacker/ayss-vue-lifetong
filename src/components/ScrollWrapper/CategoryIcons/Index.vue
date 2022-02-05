<template>
  <div class="icons-wrapper">
    <category-icons-sub
      v-for="item of itemList"
      :key="item.id"
      :bgColor="item.bgColor"
      :field="item.field"
      :iconText="item.iconText"
      :icon="item.icon"
    >
    </category-icons-sub>
  </div>
</template>

<script>
import CategoryIconsSub from './Sub';
import fieldDatas from 'data/fields';

import { mapState } from 'vuex'
export default {
  name: 'CategoryIcons',
  components: {
    CategoryIconsSub
  },
  data(){
    return {
      itemList: fieldDatas
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
@import '~styles/variables.scss';

.icons-wrapper {
  @include flex-row;
  flex-wrap: wrap;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
</style>