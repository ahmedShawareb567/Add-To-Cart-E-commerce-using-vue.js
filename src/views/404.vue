<template>
  <div>
    <h2>404 Error</h2>
  </div>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      this.redirectFunc();
    }, 2000);
  },
  data() {
    return {};
  },
  methods: {
    redirectFunc() {
      this.$router.replace("/");
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  h2 {
    font-size: 4rem;
  }
}
</style>
