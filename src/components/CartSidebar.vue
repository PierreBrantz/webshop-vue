<template>
   
 
  <div> 
       
    <b-collapse id="collapse-cart" >
      
        <b-card>
          <b-card-body style="max-height:80px;" v-for="item in cart" :key="item.id">
            <span>
              {{ item.product.name }}  
            
              <b-button size="sm" @click.prevent="removeProductFromCart(item.product)">
                  <b-icon icon="trash" aria-hidden="true"></b-icon>
              </b-button>
            </span>
            <br>
                {{ item.quantity }} X {{ item.product.price }}€
            <hr/>
            
          </b-card-body>
      <template #footer>
        Total : €{{ cartTotalPrice }} <b-button size="sm" @click.prevent="clearCartItems()">Vider</b-button>
      </template>
    </b-card>
  </b-collapse>
    
    

  </div>

</template>

<script>

export default {
   computed:{
     cart() {
       return this.$store.state.cart; 
     },
     cartTotalPrice(){
        return this.$store.getters.cartTotalPrice;
     }  
    },
    methods: {
      removeProductFromCart(product) {
        this.$store.dispatch("removeProductFromCart", product);
      },
      clearCartItems(){
        this.$store.dispatch("clearCartItems");
      }
    }
}
</script>

<style lang="scss" scoped>

</style>