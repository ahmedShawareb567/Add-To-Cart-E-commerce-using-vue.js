import Vue from "vue";
import Vuex from "vuex";
//import { computeModeSetting } from "vee-validate/dist/types/components/common";

Vue.use(Vuex);

let cart = localStorage.getItem("cart");

export default new Vuex.Store({
  state: {
    cart: cart ? JSON.parse(cart) : [],
    products: [
      {
        id: 1,
        name: "product 1",
        price: 43
      },
      {
        id: 2,
        name: "product 2",
        price: 50
      },
      {
        id: 3,
        name: "product 3",
        price: 78
      },
      {
        id: 4,
        name: "product 4",
        price: 25
      },
      {
        id: 5,
        name: "product 5",
        price: 30
      },
      {
        id: 6,
        name: "product 6",
        price: 40
      },
      {
        id: 7,
        name: "product 7",
        price: 50
      },
      {
        id: 8,
        name: "product 8",
        price: 89
      }
    ]
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getCartNumber(state) {
      return state.cart.length;
    },
    getCartContent(state) {
      return state.cart;
    },
    getTotalePrice(state) {
      let totale = 0;
      state.cart.filter(element => {
        totale += element.price * element.quantity;
      });
      return totale;
    },
    resetLocal(state) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },
  mutations: {
    resteLocal(state) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },
  actions: {
    addTocart({ state, commit }, product) {
      let findItem = state.cart.find(element => element.id == product.id);
      if (findItem) {
        findItem.quantity++;
      } else {
        state.cart.push(product);
      }
      commit("resteLocal");
    },
    removeCart({ state, commit }, productIndex) {
      state.cart.splice(productIndex, 1);
      commit("resteLocal");
    }
  },
  modules: {}
});
