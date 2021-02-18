<template>

<b-container fluid>
  <b-row >
    <b-col class="col-md-9 col-sm-9 col-xs-9">
      <b-card-group deck v-if="producers"> 
        <producer-card v-for="producer in producers" :key="producer.id" :name="producer.companyName"></producer-card>
      </b-card-group>
      <b-card-group deck v-if="productCategories"> 
        <product-category-card  @click.native="fetchProducts(productCategory.id)" v-for="productCategory in productCategories" :key="productCategory.id" :name="productCategory.name"></product-category-card>
      </b-card-group>
       <b-card-group deck v-if="products"> 
        <product-card v-for="product in products" :key="product.id" :product="product"></product-card>
      </b-card-group>       
    </b-col>   
  
   <b-col class="col-md-3 col-sm-3 col-xs-3">
    <cart-sidebar></cart-sidebar>
   </b-col>
  
  </b-row>
</b-container>

</template>

<script>
import ProductCategoryCard from '@/components/ProductCategoryCard.vue';
import ProducerCard from '@/components/ProducerCard.vue';
import ProductCard from '@/components/ProductCard.vue';
import CartSidebar from '@/components/CartSidebar.vue'
import { mapGetters } from 'vuex';


export default {
  name: "Home",
  components: { "product-category-card": ProductCategoryCard,
                "producer-card": ProducerCard,
                "product-card": ProductCard,
                "cart-sidebar": CartSidebar  
    },
    computed:{
      ...mapGetters(["productCategories"]),
      ...mapGetters(["products"]),
      ...mapGetters(["producers"])
    },
  mounted() { 
    this.fetchProductCategories();
  },  
  methods: {
    async fetchProducts(categoryId){     
      await this.$store.dispatch("fetchProducts",{
        categoryId: categoryId
      });      
    } , 
     async fetchProductCategories(){      
        await this.$store.dispatch("fetchProductCategories");    
    }   
  }
};
</script>
