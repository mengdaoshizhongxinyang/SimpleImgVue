<template>
  <div class="main">
    <simple-img-vue></simple-img-vue>
  </div>
</template>

<script>
import SimpleImgVue from "../src/component/SimpleImgVue.vue";
export default {
  name: 'Demo',
  components:{
      SimpleImgVue
  }
};
</script>
<style lang="less">
    .main{
        width: 200px;
        height: 200px;
        background: #1890ff;
    }
</style>
