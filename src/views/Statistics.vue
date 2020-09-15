<template>
  <div>
    <Layout name="统计">
      <div class="top">
        {{currentYear}}年{{currentMonth}}月
      </div>
      <LineChart :xData="xData" :yData="yData"/>
      <div class="show"><span>支出:{{collect[0]}}元 | 收入: {{collect[1]}}元</span></div>
    </Layout>

  </div>
</template>

<script lang="ts">
  import {Component ,Vue} from 'vue-property-decorator';
  import Layout from '../components/Layout.vue'
  import Type from '../components/Type.vue';
  import LineChart from '../components/Statistics/LineChart.vue'
  import dayjs from 'dayjs';
  @Component({
    components: {Type,Layout,LineChart}
  })
  export default class Statistics extends Vue {
    type = '-';
    beforeCreate() {
      this.$store.commit('fetchRecords');
    }

    get records() {
      return this.$store.state.records;
    }
    get xData() {
      const date = new Date();
      const array = [];
      date.setMonth(date.getMonth() + 1);
      date.setDate(0);
      for (let i = 1; i <= date.getDate(); i++) {
        array.push(i);
      }
      return array;
    }

    get currentYear() {
      const time = new Date().toISOString();
      return dayjs(time).format('YYYY');
    }

    get currentMonth() {
      const time = new Date().toISOString();
      return dayjs(time).format('MM');
    }
    get yData(){
      // 1. 筛选出当月的有效数据

      const usefulRecords=[];
      for(let i=0;i<this.records.length;i++){
        const recordYear = dayjs(this.records[i].date).format('YYYY');
        const recordMonth = dayjs(this.records[i].date).format('MM');
        if(recordYear===this.currentYear && recordMonth===this.currentMonth){
          usefulRecords.push(this.records[i])
        }
      }
      // 2. 区分收入和支出归类
      const length = this.xData.length;
      const commitData1=[];
      const commitData2=[];
      for(let i=0;i<length;i++){
        commitData1[i]=0;
        commitData2[i]=0;
      }
      for(let i=0;i<usefulRecords.length;i++){
        const recordDay = usefulRecords[i].date.split('-')[2].split('T')[0];
        const location = recordDay-1;
        if(usefulRecords[i].type==='-'){
          commitData1[location] += parseFloat(usefulRecords[i].amount);
        }else{
          commitData2[location] += parseFloat(usefulRecords[i].amount);
        }
      }
      return [commitData1,commitData2];
    }
    get collect(){
      let collect1 = 0;
      let collect2 = 0;
      for(let i=0;i<this.yData[0].length;i++){
        collect1 += this.yData[0][i];
        collect2 += this.yData[1][i];
      }
      return [collect1,collect2]
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/helper.scss";

  .top {
    background: #0066cc;
    line-height: 1rem;
    font-size: 1.2rem;
    color: white;
    vertical-align: center;
    padding: 1.1rem 1.2rem;
  }
  .show{
    text-align: center;
    background: #0066cc;
    border-radius: 1.0rem;
    padding:.5rem 0;
    >span{
      color: white;
    }


  }
</style>