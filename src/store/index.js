import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productCategories: [],
    producers: [],
    products: [],
    cart: []

  
  },
  mutations: {
    SET_PRODUCT_CATEGORIES(state, productCategories){
      state.productCategories = productCategories;
    },
    SET_PRODUCERS(state, producers){
      state.producers = producers;
    },
    SET_PRODUCTS(state, products){
      state.products = products;
    },
    ADD_TO_CART(state, {product, quantity}){
      let productInCart = state.cart.find(item => {
        return item.product.id == product.id;
      })
  
      if(productInCart){
        productInCart.quantity += quantity;
        return;
      }
      state.cart.push({
        product,
        quantity
      })
    },
    REMOVE_PRODUCT_FROM_CART(state, product){
      state.cart = state.cart.filter(item => {
        return item.product.id !== product.id;
      })
    },
    CLEAR_CART_ITEMS(state){
      state.cart = [];
    }
    

  },
  actions: {
    async fetchProductCategories({commit}){
      const json = await axios.get("http://localhost:8081/product-categories").then(response => this.productCategories = response.data);
      commit("SET_PRODUCT_CATEGORIES",json);
      commit("SET_PRODUCTS",null);
      commit("SET_PRODUCERS", null);
    },  
    async search({ commit },{ text }){
      
      const json = await axios.get("http://localhost:8081/products/name/" + text).then(response => this.products = response.data);
      commit("SET_PRODUCTS", json);  
      commit("SET_PRODUCT_CATEGORIES",null);  
      commit("SET_PRODUCERS", null);  
    },
    async fetchProducts({ commit },{ categoryId }){
      const json = await axios.get("http://localhost:8081/products/category/" + categoryId).then(response => this.products = response.data);
      commit("SET_PRODUCTS", json);
      commit("SET_PRODUCT_CATEGORIES",null);  
      commit("SET_PRODUCERS", null); 
    },
    async fetchProducers({ commit }){
      const json = await axios.get("http://localhost:8081/producers").then(response => this.producers = response.data);
      commit("SET_PRODUCERS", json);
      commit("SET_PRODUCTS",null);  
      commit("SET_PRODUCT_CATEGORIES", null); 
    },
    addProductToCart({ commit }, { product, quantity }){
      commit('ADD_TO_CART', { product, quantity });
    },
    removeProductFromCart({ commit }, product){
      commit('REMOVE_PRODUCT_FROM_CART', product);
    },
    clearCartItems({ commit }){
      commit('CLEAR_CART_ITEMS');
    }
    
  },
  getters: {
    productCategories(state){
      return state.productCategories;
    },
    producers(state){
      return state.producers;
    },
    products(state){
      return state.products;
    },
    cartItemCount(state){
      let total = 0;

      state.cart.forEach(item => {
        total += item.quantity;
      })

      return total;
    },
    cartTotalPrice(state){
      let total = 0;

      state.cart.forEach(item => {
        total += item.product.price * item.quantity;
      })

      return total;
    }
   
   
  },
  modules: {}
});
