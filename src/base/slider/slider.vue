<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots" :class="active: currentPageIndex === index" v-for="(item, index)"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import {addClass} from 'common/js/dom'

export default {
  name: 'slider',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>