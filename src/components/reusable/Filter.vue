<template>
    <div class="conatiner">
      <span>PRICE: </span>  
    <input  @change="setFilters" value="ltoh" v-model="sortBy" name="sort" type="radio">    <label   for="">Low to High</label> 
  <input  @change="setFilters"  value="htol" v-model="sortBy"  name="sort" type="radio">     <label for="">High to Low</label>  
   <!-- <input  @change="setFilters"  checked value="rel" v-model="sortBy" name="sort" type="radio">     <label for="">Releveance</label>  -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
               sortBy:'' 
            }
        },
        methods: {
            setFilters(){          
                this.$emit('sortIt',this.sortBy)
            }
        },
        
    }
</script>

<style scoped>
.conatiner{
    width:100vw;
    height: 30px;
    margin: auto;
    padding: .2rem;
    margin: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(120deg,black,rgb(174, 241, 194));
    color: white;
}
.conatiner input{
    font-weight: bolder;
    margin: .2rem;
}
span,label{
    font-weight: bolder;
    font-size: 1rem;

}
</style>