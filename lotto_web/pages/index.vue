<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://lotterywd.com">
      <img src="@root/static/images/logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>

export default {
  layout: 'home',
  components: {
    
  },
  head() {
    return {
      title: '',
      meta: [
        {name:'og:title', content:''},
        {name:'og:description', content:''},
        {name:'og:type', content:'website'},
        {name:'og:url', content:'https://lotterywd.com'},
        {name:'og:image', content:'https://www.lotterywd.com/icon.png'},
        {name:'twitter:card', content:'summary'},
        {name:'twitter:site', content:''},
        {name:'twitter:title', content:''},
        {name:'twitter:title', content:''},
        {name:'twitter:description',content:''},
        {name:'twitter:image',content:''},
        {name:'twitter:image:alt',content:''},
      ]
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
*{outline:2pxdottedred} 
**{outline:2pxdottedgreen} 
***{outline:2pxdottedorange} 
****{outline:2pxdottedblue} 
*****{outline:1pxsolidred} 
******{outline:1pxsolidgreen} 
*******{outline:1pxsolidorange} 
********{outline:1pxsolidblue} 
</style>
