<template>
  <header class="header">
    <back-ward></back-ward>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
import BackWard from './Sub/BackWard';
export default {
  name: "CommonHeader",
  components: {
    BackWard
  },
  props: {
    title: {
      type: String,
      default() {
        return "一线通生活";
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
@import "~styles/variables.scss";

.header {
  position: relative;
  @include flex-row;
  @include vh-center;
  height: $headerHeight;
  background-color: $defaultBgColor;

  h1 {
    font-size: .18rem;
  }
}
</style>