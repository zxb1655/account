<template>
  <div>
    <div>页面不存在，请输入正确的路径</div>
    <br/>
    <router-link to="home">返回首页</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class NotFount extends Vue {}
</script>
