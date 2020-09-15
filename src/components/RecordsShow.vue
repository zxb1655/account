<template>
  <div>
    <div class="label-wrapper">
      <div class="noRecord" :style="newRecords.length===0?'':'display: none' ">{{"暂无记录"}}</div>
      <ul class="records">
        <li v-for="(record,index) in newRecords"
            @click.capture="clicked=record.date"
            :class="{expend:record.type ==='-',income:record.type==='+'}"
            :key="index">
          <span>{{record.choice}}</span>
          <span>{{record.note}}</span>
          <span>{{record.type==='+'?' ￥ ':'￥- '}}{{record.amount}}</span>
          <span class="iconfont icon-shanchu" @click="removeRecord(clicked)"></span>
          <span>{{record.date2}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator';
  import dayjs from 'dayjs';

  @Component
  export default class RecordShow extends Vue {
    clicked = '';
    @Prop() value?: number;
    beforeCreate() {
      this.$store.commit('fetchRecords');
    }

    get newRecords() {
      const newRecords = this.$store.state.records;
      for (let i = 0; i < newRecords.length; i++) {
        const newDate = newRecords[i].date;
        newRecords[i].date2 = (dayjs(newDate).format('YYYY/MM/DD'))
      }
      if(this.value){
        return newRecords.reverse().slice(0,this.value)
      }
      return newRecords.reverse();
    }
    removeRecord(clicked: string){
      if(window.confirm('确认要删除这条记录吗')){
        this.$store.commit('deleteRecord',clicked)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .label-wrapper {
    margin: .6rem 0;
    .noRecord{
      margin-left:1rem;
    }
    .records {
      padding-left: 0;

      > li {
        padding: .3rem .5rem;
        background: #fff;
        border-radius: .4rem;
        margin: .7rem 0;

        &::after {
          content: '';
          display: block;
          clear: both;
        }

        > span {
          margin: 0 1.0rem;

          &:nth-child(1) {

            float: left;
          }

          &:nth-child(2) {
            float: left;
            color: #999999;
          }

          &:nth-child(4) {
            float: right;

          }
          &:nth-child(5) {
            float: right;
            font-size: 1.0rem;
            color: #999999;
          }

        }

        &.expend > span:nth-child(3) {
            color: red;
            margin: 0 0;

        }

        &.income > span:nth-child(3) {
            margin: 0 0;
            color: #029202;
        }
        
      }
    }
  }
</style>