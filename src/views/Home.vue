<template>
  <div class="home">
    <Layout name="首页">
      <div class="record">
        <div class="month">今天是</div>
        <div class="number">{{year}}年{{month}}月{{day}}日</div>
        <div class="numbers">点击下方「记账」记一笔吧~</div>
      </div>
      <div class="recent">
        <div class="text">
          <span class="iconfont icon-wenjian"></span>
          <span>最近</span></div>
          <RecordShow :value="7"/>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Layout from '../components/Layout.vue'; 
import RecordShow from '../components/RecordsShow.vue'

@Component({
  components: {
    Layout,
    RecordShow
  },
})
export default class Home extends Vue {
  beforeCreate() {
    this.$store.commit('fetchRecords')
  }
  get year(){
    return new Date().getFullYear()
  }
  get month(){
    return new Date().getMonth()+1
  }
  get day(){
    return new Date().getDate()
  }
}
</script>

<style lang="scss" scoped>
  .record {
    background: #0066cc;
    height: 12rem;
    color: white;

    .month {
      padding: 1rem 1.5rem;
      font-size: 1rem;
    }

    .number {
      padding: 1rem 3rem;
      text-align: center;
      font-size: 2rem;
    }

    .numbers {
      text-align: center;
      padding: .6rem 3rem;
      font-size: 1rem;
    }
  }

  .recent {
    margin-top: .8rem;

    .text {
      font-weight: bold;
      color: #000;
      display: flex;
      margin-left: 1rem;
      align-items: center;

      > span {
        margin-right: .6rem;
      }
    }

    .records {
      padding-left: 0;

      > li {
        padding: .1rem .5rem;
        background: #fff;
        border-radius: .4rem;
        margin: .6rem 0;

        &::after {
          content: '';
          display: block;
          clear: both;
        }

        > span {
          margin: 0 1rem;

          &:nth-child(1) {
            float: left;
          }

          &:nth-child(2) {
            float: left;
            color: #999999;
          }
        }

        &.expend > span:nth-child(3) {
          float: right;
          color: red;
        }

        &.income > span:nth-child(3) {
          float: right;
          color: #029202;
        }
      }
    }
  }
</style>