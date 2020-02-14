<template>
  <div>
    <nav>
      <div class="navMenu">
        <ul>
          <li>
            <router-link to="/" exact>Home</router-link>
          </li>
          <li>
            <router-link to="/about/1">About</router-link>
          </li>
          <li>
            <router-link to="/login">Login</router-link>
          </li>
          <li>
            <router-link to="/register">Register</router-link>
          </li>
          <li class="cart">
            <a>
              <span @click="actFunc()">
                <i class="fa fa-quote-left"></i>
                <p v-if="cart">{{cart}}</p>
              </span>
              <ul class="cart-Menu" :class="{activeMenu: menuClass}" v-if="cart">
                <li v-for="(cart, index) in cartItems" :key="cart.id">
                  <p>
                    {{cart.name}}
                    <b>{{cart.price}}$</b>
                    <font
                      style="color :#c70d3a; float: right; padding-right: .5rem;"
                    >{{cart.quantity}}</font>
                  </p>
                  <i class="fa fa-close" @click="removeItem(index)"></i>
                </li>
                <hr />
                <p class="total">Total: {{totalePric}} $</p>
              </ul>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="viewSec">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuClass: false
    };
  },
  computed: {
    cart() {
      return this.$store.getters.getCartNumber;
    },
    cartItems() {
      return this.$store.getters.getCartContent;
    },
    totalePric() {
      return this.$store.getters.getTotalePrice;
    }
  },
  methods: {
    actFunc() {
      if (this.$store.getters.getCartNumber) {
        this.menuClass = !this.menuClass;
      }
    },
    removeItem(elementId) {
      this.$store.dispatch("removeCart", elementId);
    }
  }
};
</script>
<style lang="scss" scoped>
.cart {
  position: relative;
  span {
    position: relative;
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
    p {
      position: absolute;
      text-align: center;
      line-height: 1rem;
      top: -0.5rem;
      right: -1rem;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #c70d3a;
      font-size: 0.7rem;
      color: #fff;
    }
  }
  .cart-Menu {
    position: absolute;
    top: 3rem;
    left: -8rem;
    width: 12rem;
    height: auto;
    background-color: #fff;
    border-radius: 0.3rem;
    box-shadow: 0.1rem 0.1rem 0.2rem 0.4rem rgba(0, 0, 0, 0.01);
    transform: scaleY(0);
    transform-origin: top;
    transition: all 0.2s ease-in-out;
    padding: 0rem;
    li {
      position: relative;
      width: 100%;
      height: 3rem;
      display: block;
      padding: 0.5rem;
      color: #000;
      margin: 0rem;
      p {
        display: inline-block;
        width: 90%;
        margin: 0rem;
      }
      i {
        display: inline-block;
        width: 10%;
        cursor: pointer;
      }
    }
    &.activeMenu {
      transform: scaleY(1);
    }
    .total {
      color: #000;
      padding-left: 1rem;
    }
  }
}
</style>