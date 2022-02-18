<template>
  <pro-layout
    :menus="menus"
    :collapsed="collapsed"
    :mediaQuery="query"
    :isMobile="isMobile"
    :handleMediaQuery="handleMediaQuery"
    :handleCollapse="handleCollapse"
    v-bind="settings"
  >
    <template v-slot:menuHeaderRender>
      <div>
        <img src="@/assets/icons/logo.png" />
        <h1>{{ title }}</h1>
      </div>
    </template>

    <template v-slot:rightContentRender>
      <right-content :top-menu="settings.layout === 'topmenu'" :is-mobile="isMobile" :theme="settings.theme" />
    </template>

    <template v-slot:footerRender>
      <global-footer />
    </template>

    <router-view />
  </pro-layout>
</template>

<script>
import defaultSettings from '@/config/defaultSettings'
import RightContent from '@/components/global-header/right-content'
import GlobalFooter from '@/components/global-footer'
import { asyncRouterMap } from '@/config/router.config'

export default {
  name: 'BasicLayout',
  components: {
    RightContent,
    GlobalFooter
  },
  data: () => ({

    // base
    menus: [],
    // 侧栏收起状态
    collapsed: false,
    // 媒体查询
    query: {},
    // 是否手机模式
    isMobile: false,
    title: defaultSettings.title,
    // 布局配置
    settings: {
      layout: defaultSettings.layout,
      contentWidth: defaultSettings.contentWidth,
      theme: defaultSettings.navTheme,
      primaryColor: defaultSettings.primaryColor,
      fixedHeader: defaultSettings.fixedHeader,
      fixSiderbar: defaultSettings.fixSiderbar,
      colorWeak: defaultSettings.colorWeak,
      hideHintAlert: false,
      hideCopyButton: false
    }

  }),
  created () {
    const routes = asyncRouterMap.find(item => item.path === '/')
    this.menus = (routes && routes.children) || []
  },
  methods: {
    handleMediaQuery (val) {
      this.query = val
      if (this.isMobile && !val['screen-xs']) {
        this.isMobile = false
        return
      }
      if (!this.isMobile && val['screen-xs']) {
        this.isMobile = true
      }
    },
    handleCollapse (val) {
      this.collapsed = val
    }
  }
}
</script>

<style lang="less">
@import "./basic-layout.less";
</style>
