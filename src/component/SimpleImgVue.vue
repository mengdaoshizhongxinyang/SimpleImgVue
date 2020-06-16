<template>
  <div class="gan-image">
    <slot name="message">
      <div class="over" v-if="this.state!=='resolve'">{{text?message():text}}</div>
    </slot>
    <img
      :src="src"
      alt
      :style="imgStyle"
      @load.prevent="inImageResolve"
      @error.prevent="onImageReject"
      @click="imgClick"
    />
  </div>
</template>

<script>
export default {
  name: "SimpleImgVue",
  props: {
    src: {
      type: String,
      default: ""
    },
    imgStyle: {
      type: String,
      default: ""
    },
    preventClick: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      state: "pending",
      visible: false
    };
  },
  methods: {
    inImageResolve() {
      this.state = "resolve";
      this.$emit("resolve", this.state);
    },
    onImageReject() {
      this.state = "reject";
      this.$emit("reject", this.state);
    },
    message() {
      const { state } = this;
      let message = "加载中";
      switch (state) {
        case "pending":
          message = "加载中";
          break;
        case "reject":
          message = "加载失败";
          break;
        case "resolve":
          message = "加载成功";
          break;
      }
      return message;
    },
    imgClick() {
      this.$emit("imgClick");
    }
  }
};
</script>

<style lang="css" scoped>
.gan-image {
  position: relative;
}
.gan-image .over {
  z-index: -1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.gan-image img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>