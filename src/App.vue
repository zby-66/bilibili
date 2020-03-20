<template>
  <div id="app">
    <TopContainer></TopContainer>
    <!-- <BHeader></BHeader>
    <BContent :rows="rows"></BContent>
    <BNavSide :options="options" v-on:change="isShowMask"></BNavSide> -->
    <div class="wnd-mask" ref="mask" v-show="showMask"></div>
  </div>
</template>

<script>
import TopContainer from './components/common/TopContainer.vue'
// import BHeader from 'components/common/BHeader.vue'
// import BContent from 'components/content/BContent.vue'
// import BNavSide from 'components/nav/BNavSide'

// import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    TopContainer,
    // BHeader,
    // BContent,
    // BNavSide
  },
  mounted() {
    // this.$store.dispatch('getContentRows')
  },
  data() {
    return {
      showMask: false
    }
  },
  watch: {
    options() {
      console.log('options 变化了')
    },
    items() {
      console.log('items 变化了')
    }
  },
  computed: {
    // ...mapGetters([
    //   'requesting',
    //   'error',
    //   'rows'
    // ]),
    options() {
      let options = {
        offset: 100, //偏移的距离
        items: this.rows,
        offsetTop: 0 //距离顶部距离
      }
      return options
    }
  },
  methods: {
    isShowMask() {
      this.showMask = !this.showMask
    }
  }
}
</script>

<style lang="stylus">
  #app 
    font-family "Microsoft YaHei",Arial,Helvetica,sans-serif
    -webkit-font-smoothing antialiased
    font-size 12px
    margin 0
    padding 0
    background #fff
    color #222
    min-width 990px
    tap-highlight-color transparent
    -webkit-tap-highlight-color transparent
    .wnd-mask
      position fixed
      width 100%
      height 150%
      background-color #000
      opacity .5!important
      z-index 1000
      top 0px
      left 0px
      transition .2s
//   html, body, div, span, applet, object, iframe,
// h1, h2, h3, h4, h5, h6, p, blockquote, pre,
// a, abbr, acronym, address, big, cite, code,
// del, dfn, em, img, ins, kbd, q, s, samp,
// small, strike, strong, sub, sup, tt, var,
// b, u, i, center,
// dl, dt, dd, ol, ul, li,
// fieldset, form, label, legend,
// table, caption, tbody, tfoot, thead, tr, th, td,
// article, aside, canvas, details, embed,
// figure, figcaption, footer, header,
// menu, nav, output, ruby, section, summary,
// time, mark, audio, video, input {
//     margin: 0;
//     padding: 0;
//     border: 0;
//     font-size: 100%;
//     font-weight: normal;
//     vertical-align: baseline;
// }

// /* HTML5 display-role reset for older browsers */
// article, aside, details, figcaption, figure,
// footer, header, menu, nav, section {
//     display: block;
// }

// body {
//     line-height: 1;
// }

// blockquote, q {
//     quotes: none;
// }

// blockquote:before, blockquote:after,
// q:before, q:after {
//     content: none;
// }

// table {
//     border-collapse: collapse;
//     border-spacing: 0;
// }

// /* custom */
// a {
//     color: #7e8c8d;
//     text-decoration: none;
//     -webkit-backface-visibility: hidden;
//     cursor: pointer;
// }

// li {
//     list-style: none;
// }

// /*::-webkit-scrollbar {
//     width: 16px;
//     height: 5px;
// }

// ::-webkit-scrollbar-track-piece {
//     background-color: rgba(0, 0, 0, 0.2);
//     -webkit-border-radius: 6px;
// }

// ::-webkit-scrollbar-thumb:vertical {
//     height: 5px;
//     background-color: rgba(125, 125, 125, 0.7);
//     -webkit-border-radius: 6px;
// }

// ::-webkit-scrollbar-thumb:horizontal {
//     width: 5px;
//     background-color: rgba(125, 125, 125, 0.7);
//     -webkit-border-radius: 6px;
// }*/

// html, body {
//     width: 100%;
// }

// body {
//     -webkit-text-size-adjust: none;
//     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
// }

</style>
