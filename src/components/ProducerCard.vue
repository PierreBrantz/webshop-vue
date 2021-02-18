<template>
    <div>       
      <b-card 
      no-body 
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="product"
      img-top
      tag="article"
      style="max-width:10rem"
      class="mb-2" 
      :footer="name" 
      
      >
      </b-card>
    </div>
</template>

<script>
export default {
    props: ['name']
}
</script>

<style lang="scss" scoped>

</style>