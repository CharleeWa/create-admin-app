<template>
  <global-footer class="footer custom-render">
    <template v-slot:links></template>
    <template v-slot:copyright>
      <span>@中后台模板</span>
    </template>
  </global-footer>
</template>

<script>
import { GlobalFooter } from '@ant-design-vue/pro-layout'

export default {
  name: 'ProGlobalFooter',
  components: {
    GlobalFooter
  }
}
</script>
