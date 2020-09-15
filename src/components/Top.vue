<template>
  <div class="top-wrapper">
    <span class="iconfont icon-gerenzhongxin"></span>
    <header>斌斌记账</header>
    <p>{{name}}</p>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Top',
    props: ['name']
  };
</script>

<style lang="scss" scoped>
  @import "../assets/helper.scss";
  .wrapper{
    background: red;
  }
  .top-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.8rem 2.0rem;
    color: #fff;
    background: $color-sky-blue;
    border-bottom: .1rem solid rgba(255,255,255,0.5);
    .icon{
      width:2.5rem;
      height:2.5rem;
    }
    header {
      font-size: 1.4rem;
      color: #ffffff;
    }
    p {
      font-size: 1rem;
    }
  }
</style>