<template>
    <div v-on:mouseover='mouseOver()' 
    v-on:mouseleave='mouseLeave()'>       
      <b-card 
      no-body
      :img-src=" 'img/' + productCategory.description"
      img-alt="productCategory"
      img-top
      tag="article"
      style="max-width:10rem"
      class="mb-2" 
      :footer="productCategory.name" 
      :bg-variant="bgVariant"
      >
      </b-card>
    
    </div>
</template>

<script>
export default {
    props: ['productCategory'],
    data(){
      return {
        bgVariant: 'light'
      }
    },
    methods: {
      mouseOver(){
        this.bgVariant = 'primary'
      },
      mouseLeave(){
        this.bgVariant = 'light'
      },
    }
}
</script>

<style lang="scss" scoped>
.card-img-top {
  width: 100%;
  height: 20vh;
  object-fit: cover;
}
</style>