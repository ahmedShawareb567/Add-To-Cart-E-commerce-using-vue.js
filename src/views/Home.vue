<template>
  <div class="home">
    <section>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-3 col-md-4 col-sm-6 col-12"
            v-for="(product) in products"
            :key="product.id"
          >
            <div class="productsContent">
              <h2>{{product.name}}</h2>
              <p>{{product.price}}$</p>
              <Cart
                :productId="product.id"
                :productName="product.name"
                :productPrice="product.price"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Cart from "../components/cart-home.vue";
export default {
  name: "home",
  created() {},
  mounted() {},
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    }
  },
  methods: {},
  components: {
    Cart
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: auto;
  text-align: center;
  .element {
    width: 100%;
    height: auto;
    font-size: 4rem;
    background-color: #ccc;
    display: none;
    &:first-of-type {
      background-color: #f00;
    }
    &.activeEl {
      display: block;
    }
  }
  .productsContent {
    position: relative;
    width: 100%;
    height: auto;
    background-color: #fff;
    border-radius: 0.2rem;
    margin-bottom: 2rem;
    h2 {
      display: inline-block;
      font-size: 1rem;
      padding: 1rem 0rem;
    }
    p {
      display: block;
      padding: 1rem 0rem;
      font-size: 1.2rem;
      color: #ffcc00;
    }
  }
}
@keyframes spinningElement {
  100% {
    transform: rotate(360deg);
  }
}
</style>
