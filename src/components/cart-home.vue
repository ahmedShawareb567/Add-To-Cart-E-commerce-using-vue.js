<template>
  <div>
    <button @click="addItem()">Add To Cart</button>
  </div>
</template>
<script>
export default {
  props: {
    productId: {},
    productName: {},
    productPrice: {}
  },
  data() {
    return {
      prodo: {
        id: this.productId,
        name: this.productName,
        price: this.productPrice,
        quantity: 1
      }
    };
  },
  methods: {
    addItem() {
      this.$store.dispatch("addTocart", this.prodo);
    }
  }
};
</script>
<style lang="scss" scoped>
button {
  display: inline-block;
  margin: 1rem auto;
  width: 7rem;
  height: 3rem;
  background-color: #cc0066;
  border-radius: 0.2rem;
  border: none;
  outline: none;
  color: #fff;
  &:focus {
    outline: none;
  }
}
</style>