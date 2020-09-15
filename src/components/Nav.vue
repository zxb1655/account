<template>
    <nav>
      <router-link to="/home" class="item iconfont icon-shouye" active-class="selected">首页</router-link>
      <router-link to="/detail" class="item iconfont icon-mingxi" active-class="selected">明细</router-link>
      <router-link to="/account" class="item iconfont icon-icon-" active-class="selected">记账</router-link>
      <router-link to="/label" class="item iconfont icon-biaoqian" active-class="selected">标签</router-link>
      <router-link to="/statistics" class="item iconfont icon-tongji" active-class="selected">统计</router-link>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

  export default class Nav extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/reset.scss";
  nav{
    background: #e5e5e5;
    font-size: 1.3rem;
    display: flex;
    justify-content:center;
    align-items: center;
    box-shadow: 0 0 2px rgba(0,0,0,0.2);
    .item{
      width:20%;
      padding: 5px 0;
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
    }
    .iconfont{
      font-size: 1rem;
    }
    .item.selected{
      color:blue;
    }
  }
</style>