### 说明

使用 Vue 实现一个简单的鼠标拖拽滚动效果插件


### 演示地址

http://www.longstudy.club/vue-drag-scroll/index.html


### 核心代码


```
<div class="vue-drag-scroll-wrapper" :style="zoomStye">
  // 这里省略一些不太重要的代码
</div>

<script>
export default {
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
  }
}
</script>
```