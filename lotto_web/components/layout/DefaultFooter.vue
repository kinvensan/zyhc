<template>
  <!-- uiView: foot -->
  <div class="view-footer">
    <div class="foot-down">
      <div class="w-1200 footer-nav clearfix">
        <ul class="clearfix">
          <li><a ui-sref="about" href="/index/help/about">关于我们</a><i>/</i></li>
          <!--<li><a>隐私政策</a></li>-->
          <li><a ui-sref="duty" href="/index/help/duty">责任博彩</a><i>/</i></li>
          <li><a ui-sref="link" href="/index/help/link">联系我们</a><i>/</i></li>
          <!--<li><a ui-sref="disclaimer">免责声明</a><i>/</i></li>-->
          <li><a ui-sref="faq" href="/index/help/faq">常见问题</a><i>/</i></li>
          <li><a ui-sref="support" href="/index/help/support">技术支援</a><i>/</i></li>
          <!--<li><a ui-sref="depoit">存款帮助</a><i>/</i></li>-->
          <!--<li><a>转账帮助</a></li>-->
          <!--<li><a ui-sref="withdrawalHelp">取款帮助</a><i>/</i></li>-->
          <li><a ui-sref="cooperation" href="/index/agent/cooperation">代理中心</a></li>
          <!--<a ui-sref="personalInformation"><span>111111111111</span></a>-->
        </ul>
      </div>
      <div class="w-1200 footer-copyright clearfix"><span>版权所有 © 2007-2019 智远合合创 保留所有权</span></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    copyright:'lotterywd.com'
  }
}
</script>
<style lang="sass" scoped>
.view-footer {
  .foot-down {
    background: url(~/asset/images/footer-bg.png) no-repeat top center;
    width: 100%;
    height: 280px;
    color: #0259B4;
    margin-top: -1px;

    .footer-nav {
      padding-top: 145px;
      margin: 0 auto;
    }

    .footer-copyright {
      width: 280px;
      margin: 0 auto;
      font-size: 14px;
      height: 32px;
      line-height: 32px;
    }
  }
}
</style>


