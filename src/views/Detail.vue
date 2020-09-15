<template>
  <div>
    <Layout name="明细">
      <div class="top">
        全部收支
      </div>
    <RecordShow/>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import RecordShow from '../components/RecordsShow.vue';
  import Layout from '../components/Layout.vue'
  @Component({
    components: {RecordShow,Layout}
  })
  export default class Detail extends Vue {

  }
</script>

<style lang="scss" scoped>
  .top {
    background: #0066cc;
    line-height: 1rem;
    font-size: 1.2rem;
    color: white;
    vertical-align: center;
    padding: 1rem 1rem;
  }



</style>