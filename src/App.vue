<template>
  <div id="app">
    <VueDragScroll/>
  </div>
</template>

<script>
import VueDragScroll from './components/VueDragScroll.vue'

export default {
  name: 'app',
  components: {
    VueDragScroll
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding: 0;
}
body, html{
  width: 100%;
  height: 100%;
}
</style>
