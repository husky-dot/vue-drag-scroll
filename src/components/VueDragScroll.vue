<template>
  <div class="alignment-wrapper">
    <div v-dragscroll  class="vue-drag-scroll-out-wrapper">
      <div  class="vue-drag-scroll-wrapper" :style="zoomStye">
        <div  class="inner-div-wrapper">
          <div class="inner-div"></div>
          <div class="inner-div"></div>
          <div class="inner-div"></div>
        </div>
      </div>
    </div>

    <div class="tolbox-zoom-wrapper">
      <div class="zoom-inner">
        <span class="iconfont iconsuoxiao"
          :class="{'disabled': scale === 25}" style="font-size:22px"
          @click="handleReduce"
        />
        <span class="iconfont iconfangda"
          :class="{'disabled': scale === 100}"
          @click="handleEnlarge"  
        />
        <div class="scale-text">{{scale}}%</div>
      </div>
    </div>
  </div>
</template>
<script>
import  dragscroll  from '@/directives/dragscroll'
export default {
  directives: dragscroll,
  name: 'VueDragScroll',
  props: {
    msg: String
  },
  data () {
    return {
      scale: 100
    }
  },
  computed: {
    zoomStye () {
      const INIT_WIDTH = 2208
      const INIT_HEIGHT = 1206
      const width = INIT_WIDTH * (1 + (100 - this.scale)/100)
      const height = INIT_HEIGHT * (1 + (100 - this.scale)/100)
      console.log(width)
      console.log(height)
      return {
        width: `${width}px`,
        height: `${height}px`,
        transform: `scale(${this.scale/100})`
      }
    }
  },
  methods: {
    handleReduce (){
      if (this.scale === 25) return
      this.scale -= 25
    },
    handleEnlarge () {
      if (this.scale === 100) return
      this.scale += 25
    }
  }
}
</script>

<style scoped lang="scss">
.alignment-wrapper{
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  overflow: hidden;
}
.vue-drag-scroll-out-wrapper{
  /* &::-webkit-scrollbar { width: 0 !important } */
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    cursor: grab;
    position: absolute;
    top:0;
    left: 0;
    &::-webkit-scrollbar { width: 0 !important }
}
.vue-drag-scroll-wrapper{
  position: relative;
}
.vue-drag-scroll-wrapper{
  display: flex;
  flex-direction: column;
  position: relative;
}
.inner-div-wrapper{
  top: 10%;
  position: absolute;
  left: 25%;
}
.inner-div{
  display: block;
  width: 300px;
  height: 100px;
  background: #A3F3E9;
  margin: 20px;
}
 .tolbox-zoom-wrapper{
    position: absolute;
    left: 24px;
    bottom: 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
    box-shadow: 0 1px 10px rgba(31,35,41,.06);
    background: #fff;
    box-sizing: border-box;
    cursor: auto;
    user-select: none;
    .zoom-inner{
      display: inline-flex;
      align-items: center;
      .iconfont{
        font-size: 24px;
        color: #1f2329;
        cursor: pointer;
        &.disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      }
      .iconfont:nth-child(2){
        margin-left: 8px;
      }
    }
    .scale-text{
      margin-left: 14px;
      color: #646a73;
      font-weight: 500;
      line-height: 22px;
      font-size: 14px;
    }
  }
</style>
