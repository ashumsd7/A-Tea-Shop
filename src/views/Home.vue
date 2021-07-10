<template>
<div class="main">

     <!-- <Banner></Banner> -->
    
    <home-cards ></home-cards>
    <div v-if="isDataInCart" class="">
       <Popup></Popup>
    </div>
   
</div>
   
   
</template>

<script>

import Banner from '../components/boss/Banner.vue'

import HomeCards from '../components/boss/HomeCards.vue'

import Popup  from '../components/reusable/OrderPopup.vue'

export default {
  components:{

      HomeCards,
      Banner,
      Popup,
     
  },
  computed:{
     isDataInCart(){
                return !!this.$store.getters['cart/getCartData'].length
            },
     
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  position: relative;
}
.Popup{
  /* position: fixed; */
  bottom: 100px;
  right: 100px;
}

</style>
