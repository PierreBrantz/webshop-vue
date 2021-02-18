<template>

    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/login">Me connecter</b-nav-item>   
            
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      <b-nav-item>
        <b-button size="sm" class="my-2 my-sm-0" v-b-toggle.collapse-cart>{{ cartItemCount }}  <b-icon icon="cart4" aria-hidden="true"></b-icon></b-button> 
      </b-nav-item>

       <b-nav-item>
         <b-dropdown id="dropdown-1" size="sm" class="my-2 my-sm-0">
         <template #button-content>
        <b-icon icon="filter-square" aria-hidden="true"></b-icon> Filtre
      </template>
          <b-dropdown-item v-on:click="fetchProductCategories()">Par produit</b-dropdown-item>
          <b-dropdown-item v-on:click="fetchProducers()">Par producteur</b-dropdown-item>
         </b-dropdown>
       </b-nav-item>
      
        <b-nav-form @submit.prevent="search">
          <b-form-input size="sm" 
            class="mr-sm-2" 
            placeholder="Search"
            v-model="searchText"          
          ></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">
            <b-icon icon="search" aria-hidden="true"></b-icon>
          </b-button>
        </b-nav-form>
     
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>
export default {
   computed:{
     cartItemCount() {
       return this.$store.getters.cartItemCount; 
     }  
    },
  methods: {
    search(){
      this.$store.dispatch("search", {text: this.searchText});
    },
   async fetchProductCategories(){      
        await this.$store.dispatch("fetchProductCategories");    
    },
    async fetchProducers(){
      await this.$store.dispatch("fetchProducers"); 
    }   
  },
  data(){
    return{
      searchText: ""
    };
  }
    
}
</script>

<style lang="scss" scoped>
 #nav a.router-link-exact-active{
   color: white;
 }
</style>