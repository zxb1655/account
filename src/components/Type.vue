<template>
  <ul>
    <li :class="{selected: value==='-'}" @click="toggle('-')">支出</li>
    <li :class="{selected: value==='+'}" @click="toggle('+')">收入</li>
  </ul>
</template>

<script lang="ts">
  import {Vue,Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Type extends Vue {
    @Prop() readonly value!: string;
    toggle(value: string) {
      this.$emit('update:value',value);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/helper.scss";

  ul {
    background: $color-sky-blue;
    display: flex;
    padding-left: 0;
    padding-right: 0;

    > li {
      text-align: center;
      width: 50%;
      color: #ffffff;
      padding: .8rem 0;

      &.selected {
        position: relative;

        &::after {
          $width: 5.0rem;
          content: '';
          position: absolute;
          left: 50%;
          bottom: .5rem;
          background: #ffffff;
          height: .3rem;
          width: $width;
          margin-left: -$width/2;
        }
      }
    }
  }
</style>