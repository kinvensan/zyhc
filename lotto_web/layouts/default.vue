<template>
  <div class="index-wrap">
    <div class="indexMinWidth">
      <default-header />
      <nuxt/>
      <default-footer />
    </div>
  </div>
</template>
<script>
import DefaultHeader from '~/components/layout/DefaultHeader'
import DefaultFooter from '~/components/layout/DefaultFooter'
export default {
  components: {
    DefaultFooter
  }
}
</script>
<style lang="scss">
.index-wrap {
  height: 100%;
  .indexMinWidth {
      min-width: 1200px;
      overflow: hidden;
  }
}
</style>


