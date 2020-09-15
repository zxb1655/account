<template>
  <div>
    <Layout name="标签">
      <div class="top">
        全部标签
      </div>
      <ul class="labels">
        <li v-for="label in labels" :key="label" @click.capture="clickLabel=label">
          <span>{{label}}</span>
          <div>
            <span class="iconfont icon-bianji edit" :value="label" name="edit" @click="updateLabel"></span>
            <span class="iconfont icon-shanchu delete" name="delete" @click="removeLabel"></span>
          </div>
        </li>
      </ul>
      <div class="createLabel" @click="generatorLabel">
        <button>新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Type from '../components/Type.vue';
  import store from '../store/index';
  import Layout from '../components/Layout.vue'

  @Component({
    components: {Type,Layout},
    computed: {
      labels() {
        return store.state.labels;
      }
    }
  })
  export default class Label extends Vue {
    clickLabel = '';
    beforeCreate(){
      this.$store.commit('fetchLabels')
    }

    generatorLabel() {
      const name = window.prompt('请输入标签名',);
      if (name) {
        this.$store.commit('createLabel', name);
      } else {
        window.alert('标签名不能为空');
      }
    }

    updateLabel() {
      const newName = window.prompt('请输入新的标签名');
      const oldName = this.clickLabel;
      if (newName) {
        this.$store.commit('editLabel', {oldName, newName});
      } else if(newName ==='') {
        window.alert('标签名不能为空');
      }else {
        return
      }
    }

    removeLabel() {
      const name = this.clickLabel;
      if(window.confirm('确认要删除该标签吗')){
        this.$store.commit('deleteLabel', name);
      }else{
        return
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top {
    background: #0066cc;
    line-height: 1rem;
    font-size: 1.2rem;
    color: white;
    vertical-align: center;
    padding: .8rem 1.5rem;
  }

  .labels {
    padding-left: 0;
    margin-top: .8rem;

    > li {
      background: #ffffff;
      margin: .6rem 0;
      padding: 0 1.2rem;
      border-radius: .4rem;
      min-height: 2.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #000;

      .edit {
        width: 2.2rem;
        height: 2.2rem;
        color: blue;
        margin: 0 .8rem;
      }

      .delete {
        width: 2.0rem;
        height: 2.0rem;
        color: red;
        margin: 0 .8rem;
      }
    }
  }

  .createLabel {
    text-align: center;
    margin-top: 2.0rem;

    > button {
      background: #0066cc;
      color: #ffffff;
      padding: .5rem 1.0rem;
      border-radius: .4rem;
    }
  }
</style>