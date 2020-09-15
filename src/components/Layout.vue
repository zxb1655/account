<template>
  <div class="layout-wrapper">
    <Top :name="name"/>
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot />
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import Top from "./Top.vue";
import Nav from "./Nav.vue";
export default {
    name:'Layout',
    props: ['name','classPrefix'],
    components:{
      Top,
      Nav
    }
  }
</script>

<style lang="scss" scoped>
  .layout-wrapper{
    height:100vh;
    min-height: 612px;
    display:flex;
    flex-direction:column;
    .content{
      flex-grow:1;
      overflow: auto;
    }
  }
</style>