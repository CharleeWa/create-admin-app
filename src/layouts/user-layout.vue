<template>
  <div id="userLayout" :class="['user-layout-wrapper', isMobile && 'mobile']">
    <div class="container">
      <div class="user-layout-content">
        <div class="top">
          <div class="header">
            <span class="title">中后台管理系统</span>
          </div>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { deviceMixin } from '@/store/device-mixin'

export default {
  name: 'UserLayout',
  mixins: [deviceMixin],
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style lang="less" scoped>
#userLayout.user-layout-wrapper {
  height: 100%;

  &.mobile {
    .container {
      .main {
        max-width: 368px;
        width: 98%;
      }
    }
  }

  .container {
    width: 100%;
    min-height: 100%;
    background:#f0f2f5 url(~@/assets/background.png) no-repeat 50%;
    background-size: 1920px 1082px;
    position: relative;

    @media screen and (min-width: 1000px){
      .user-layout-content {
        width: 664px;
        height: 664px;
        position: absolute;
        top: 50%;
        right: 163px;
        transform: translateY(-50%);
        background: url(~@/assets/login-bg.png) no-repeat;
        background-size: 664px 664px;
        background-position: center;
      }
    }

    @media screen and (max-width: 1000px){
      .user-layout-content {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .user-layout-content {
      .top {
        text-align: center;

        .header {
          height: 44px;
          line-height: 44px;
          position: relative;
          top: 150px;

          .title {
            font-size: 33px;
            color: #146EFB;
            font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 500;
          }
        }
      }

      .main {
        min-width: 260px;
        width: 368px;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50% ,-60%);
      }
    }
  }
}
</style>
