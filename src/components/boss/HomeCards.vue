<template>
  <div class="home-cards-container">
    <Filter @sortIt="setSortKey"  />
   <WarningModal @hideWarning="hideWarning"  v-if="isWarning" :title="warningTitle"/>
    <ItemCard  @showWarning="handleWarning"
      @orderData="addedToCart"
      :title="data.title"
      :starCount="data.starCount"
      :starredBy="data.starredBy"
      :key="data.id"
      :img="data.img"
      :mainPrice="data.mainPrice"
      :id="data.id"
      v-for="data in filteredData"
    ></ItemCard>
  </div>
</template>

<script>
import ItemCard from "../reusable/ItemCard.vue";
import Filter from "../reusable/Filter.vue";
import WarningModal from '../reusable/WarningModal.vue'
export default {
  components: {
    ItemCard,
    Filter,
    WarningModal
  },
  computed: {
    allData() {
      return this.$store.getters["all/getAllData"];
    },
    filteredData(){
    return  this.sortProduct()
      // var ascending = homes.sort((a, b) => Number(a.price) - Number(b.price));
// var descending = homes.sort((a, b) => Number(b.price) - Number(a.price));
    },

  },
  data() {
    return {
      sortBy:'rel',
      warningTitle:'',
      isWarning:false
    };
  },
  methods: {
    addedToCart(orderData) {
      this.$store.dispatch("cart/addToCartAction", orderData);
    },
    setSortKey(sortBy) {
        this.sortBy=sortBy;
      },
      sortProduct(){
        if(this.sortBy=='ltoh'){
          let ascending = this.allData.sort((a, b) => Number(a.mainPrice) - Number(b.mainPrice));
          return ascending;
        }
       else if(this.sortBy=='htol'){
           let descending = this.allData.sort((a, b) => Number(b.mainPrice) - Number(a.mainPrice));
            return descending;
       }
       else{
        return this.$store.getters["all/getAllData"];
       }
      },
      handleWarning(title){
       
        this.warningTitle= title;
        this.isWarning= true
      },
      hideWarning(){
        this.isWarning= false
         this.warningTitle= '';
      }

  
  },
};
</script>

<style scoped>
.home-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
</style>