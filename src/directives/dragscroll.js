import Vue from 'vue'

Vue.directive('dragscroll', function (el) {
  el.onmousedown = function (ev) {
    console.log(el)
    const disX = ev.clientX
    const disY = ev.clientY
    const originalScrollLeft = el.scrollLeft
    const originalScrollTop = el.scrollTop
    const originalScrollBehavior = el.style['scroll-behavior']
    const originalPointerEvents = el.style['pointer-events']
    el.style['scroll-behavior'] = 'auto'
    el.style['cursor'] = 'grabbing'
    // 鼠标移动事件是监听的整个document，这样可以使鼠标能够在元素外部移动的时候也能实现拖动
    document.onmousemove = function (ev) {
      ev.preventDefault()
      const distanceX = ev.clientX - disX
      const distanceY = ev.clientY - disY
      console.log(el.scrollTop)
      el.scrollTo(originalScrollLeft - distanceX, originalScrollTop - distanceY)
      console.log(originalScrollLeft - distanceX, originalScrollTop - distanceY)
      // 由于我们的图片本身有点击效果，所以需要在鼠标拖动的时候将点击事件屏蔽掉
      // https://zhuanlan.zhihu.com/p/86347430
      el.style['pointer-events'] = 'none'
      document.body.style['cursor'] = 'grabbing'
      el.style['cursor'] = 'grabbing'
    }
    document.onmouseup = function () {
      document.onmousemove = null
      document.onmouseup = null
      el.style['scroll-behavior'] = originalScrollBehavior
      el.style['pointer-events'] = originalPointerEvents
      el.style['cursor'] = 'grab'
    }
  }
})