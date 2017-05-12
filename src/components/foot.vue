<template>
<div class="foot-menu">
  <ul class="menu">
    <li class="menu-home" @click="gotoMenu({path: '/cases'})"><i></i></li>
    <li class="menu-jj" @click="gotoMenu({path: '/typeList'})"><i></i></li>
    <li class="menu-jx" @click="gotoMenu({path: '/infoTypeList'})"><i></i></li>
    <li class="menu-sp" @click="gotoMenu({path: '/videoList'})"><i></i></li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    gotoMenu(path) {
      _hmt.push(['_trackEvent', 'menu', 'click'])
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.foot-menu {
    position: fixed;
    bottom: -5px;
    z-index: 99;
    width: 100%;
    height: 2.5rem;
}

.menu {
    height: 100%;
}

.menu li {
    width: 25%;
    height: 100%;
    float: left;
    margin-top: 0 !important;
}
.menu li i {
    width: 1.3rem;
    height: 1.3rem;
    display: block;
    margin: 0.5rem auto;
}

.menu li.menu-home {
    background-color: #247ede;
}

.menu li.menu-home i {
    background-image: url("../images/menu-a.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
}

.menu li.menu-jj {
    background-color: #2789e2;
}

.menu li.menu-jj i {
    background-image: url("../images/menu-b.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
}

.menu li.menu-jx {
    background-color: #2990e7;

}
.menu li.menu-jx i {
    background-image: url("../images/menu-c.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
}
.menu li.menu-sp {
    background-color: #339df9;
}
.menu li.menu-sp i {
    background-image: url("../images/menu-d.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
}
</style>
