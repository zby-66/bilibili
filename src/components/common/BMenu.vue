<template>
  <div class="menu">
    <div class="menu-wrapper">
      <ul class="nav-menu">
        <BMenuItem v-for="i in classify" :item="i" :key="i.title" ></BMenuItem>
      </ul>
      <div class="menu-r">
        <a
          href="http://search.bilibili.com/all?keyword=%E8%B9%A6%E8%BF%AA"
          target="_blank"
          title="蹦迪"
          class="random-p"
        >
          <div class="random-p-movie">
            <img
              src="//i2.hdslb.com/bfs/active/84f323e3a77a6eafee656f832847603751f3857d.gif"
              alt="蹦迪"
            />
          </div>
        </a>
        <a
          id="mobile_p"
          class="mobile-p"
          href="//app.bilibili.com"
          target="_blank"
          @mouseover="showMobileLink=true"
          @mouseout="showMobileLink=false"
        >
          <transition name="fade">
            <div class="mobile-p-box" v-show="showMobileLink">
              <div class="mobile-p-qrcode"></div>
            </div>
          </transition>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import BMenuItem from "./BMenuItem";
export default {
  data() {
    return {
      showMobileLink: false,
      classify: [
        {
          title: "首页",
          num: 0,
		  home: true,
		  href:"https://www.bilibili.com/"
        },
        {
          title: "动画",
		  num: 999,
		  href:"https://www.bilibili.comhttps://www.bilibili.com/v/douga/?spm_id_from=333.851.b_7072696d6172794368616e6e656c4d656e75.1/"
        },
        {
          title: "番剧",
		  num: 110,
		  href:"https://www.bilibili.com/anime/?spm_id_from=333.5.b_7072696d6172795f6d656e75.8"
		},
		{
          title: "国创",
		  num: 119,
		  href: "https://www.bilibili.com/guochuang/?spm_id_from=666.4.b_7072696d6172795f6d656e75.15"
        },
        {
          title: "音乐",
		  num: 999,
		  href: "https://www.bilibili.com/v/music/?spm_id_from=666.5.b_7072696d6172795f6d656e75.23"
        },
        {
          title: "舞蹈",
		  num: 359,
		  href: "https://www.bilibili.com/v/dance/?spm_id_from=333.5.b_7072696d6172795f6d656e75.33"
        },
        {
          title: "游戏",
		  num: 999,
		  href: "https://www.bilibili.com/v/game/?spm_id_from=333.5.b_7072696d6172795f6d656e75.40"
        },
        {
          title: "科技",
		  num: 999,
		  href: "https://www.bilibili.com/v/technology/?spm_id_from=333.5.b_7072696d6172795f6d656e75.50"
		},
		{
          title: "数码",
		  num: 544,
		  href: "https://www.bilibili.com/v/digital/?spm_id_from=333.5.b_7072696d6172795f6d656e75.57"
        },
        {
          title: "生活",
		  num: 999,
		  href: "https://www.bilibili.com/v/life/?spm_id_from=333.5.b_7072696d6172795f6d656e75.62"
        },
        {
          title: "鬼畜",
		  num: 172,
		  href: "https://www.bilibili.com/v/kichiku/?spm_id_from=333.5.b_7072696d6172795f6d656e75.71"
        },
        {
          title: "时尚",
		  num: 861,
		  href: "https://www.bilibili.com/v/fashion/?spm_id_from=333.5.b_7072696d6172795f6d656e75.76"
        },
        {
          title: "广告",
		  num: 120,
		  href: "https://www.bilibili.com/v/ad/ad/?spm_id_from=333.5.b_7072696d6172795f6d656e75.82#/"
        },
        {
          title: "娱乐",
		  num: 999,
		  href: "https://www.bilibili.com/v/ent/?spm_id_from=333.6.b_7072696d6172795f6d656e75.83"
        },
        {
          title: "影视",
		  num: 999,
		  href: "https://www.bilibili.com/v/cinephile/?spm_id_from=333.5.b_7072696d6172795f6d656e75.87"
		},
		{
          title: "放映厅",
		  num: 42,
		  href: "https://www.bilibili.com/cinema/?spm_id_from=333.5.b_7072696d6172795f6d656e75.92"
        },
        {
          title: "广场",
          num: 0,
          href: "https://t.bilibili.com/?spm_id_from=333.851.b_7072696d61727950616765546162.2",
          sequare: true
        },
        {
          title: "直播",
          num: 0,
          href: "https://live.bilibili.com/?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.1",
          live: true
        }
      ]
    };
  },
  components: {
    BMenuItem
  }
};
</script>

<style lang="stylus" scoped>
.menu {
  width: 100%;
  background: #fff;

  .menu-wrapper {
    position: relative;
    width: 1140px;
    margin: 0 auto;
    padding: 6px 0;
    z-index: 100;

    .nav-menu {
      zoom: 1;
      display: inline-block;
      vertical-align: top;
      height: 50px;
    }

    .menu-r {
      position: absolute;
      right: 0px;
      top: 0px;
      height: 50px;
      padding: 6px 0;

      .random-p {
        width: 80px;
        height: 44px;
        margin: 3px 12px;
        display: inline-block;
        vertical-align: top;
        overflow: hidden;

        img {
          display: block;
          max-width: 100%;
          height: 100%;
          margin: 0 auto;
        }
      }

      .mobile-p {
        display: inline-block;
        vertical-align: top;
        margin: 3px 0;
        width: 58px;
        height: 44px;
        background: url('../../assets/images/app-link.png') center center no-repeat;
        position: relative;
        overflow: visible;

        .mobile-p-box {
          position: absolute;
          overflow: hidden;
          top: 44px;
          width: 259px;
          height: 174px;
          right: -20px;
          background: url('../../assets/images/app-box.png') center center no-repeat;
          transition: 0.2s;
          transition-property: opacity;

          &.fade-enter-active, &.fade-leave {
            opacity: 1;
          }

          &.fade-enter, &.fade-leave-active {
            opacity: 0;
          }

          .mobile-p-qrcode {
            position: absolute;
            top: 30px;
            width: 100px;
            height: 100px;
            left: 80px;
            background: url('../../assets/images/app-qrcode.png') center center no-repeat;
          }
        }
      }
    }
  }
}
</style>