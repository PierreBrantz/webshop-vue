<template>
    <div> 
           
      <b-card 
      :title="product.name"
      :img-src=" 'img/' + product.label"
      img-alt="img-info"
      img-top
      tag="article"
      style="max-width:12rem"
        
      >
     <b-card-body>
       <b-card-text>
       Prix: {{product.price}} Stock: {{product.stock}}
       </b-card-text>
      
      <b-button size="sm" @click="addToCart()">
        <b-icon icon="plus" aria-hidden="true"></b-icon>
      </b-button>
     
     </b-card-body>
      
      </b-card>
   
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    props: ['product'],
    data(){
      return{
       count: 0
      }
    },
    methods: {
      addToCart(){ 
        this.$store.dispatch("addProductToCart", {
          product: this.product,
          quantity: 1
          });
      }
    },
    computed:{
      ...mapGetters(["addProductToCart"])
   
      
    }
}
</script>

<style lang="scss" scoped>
.card-body {
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: 1;
}

</style>