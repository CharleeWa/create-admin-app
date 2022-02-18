<template>
  <a-result status="404" title="404" sub-title="对不起，页面走丢了~">
    <template #extra>
      <a-button type="primary" @click="toHome">
        主页
      </a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: 'Exception404',
  methods: {
    toHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
