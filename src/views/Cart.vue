<template>
    <div class="cart-view">
       <div class="cart-header">
           <p v-if="isDataInCart">☕Check Out Fast☕</p>
           <p v-else>No Items Added </p>
           <button v-if="!isDataInCart"><router-link to="/">Buy Now</router-link></button>
       </div>
       <Modal @cancelOrder="checkout= !checkout" v-if="checkout"  title="😊Enter Details to Order😊 "></Modal>
       <CartCard :title="data.title" :mainPrice="data.mainPrice" :orderCount="data.orderCount" :key="data.id" v-for="data in cartData"></CartCard>
        <div v-if="isDataInCart"  class="cart-footer">
            <p>Total Price :{{totalPrice}}₹</p>
        
          <button @click="checkout= !checkout" >Check out</button>
       </div>
    </div>
</template>

<script>
import CartCard from '../components/reusable/CartRow.vue'
import Modal from '../components/reusable/Modal.vue'
    export default {
        components:{
            CartCard,
            Modal

        },
        computed:{
            cartData(){
                return this.$store.getters['cart/getCartData']
            },
            isDataInCart(){
                return !!this.$store.getters['cart/getCartData'].length
            },
           
            
        },
        data() {
            return {
                totalPrice:null,
                checkout:false
            }
        },
        methods: {
            calculateTotal(){
               
         this.totalPrice=   this.cartData.reduce((accum,curr)=>{
 
                return accum + (curr.mainPrice*curr.orderCount)
            },0)
            
            
        }
        },

        mounted() {
            this.calculateTotal()
        },
        
        
    }
</script>

<style scoped>
.cart-view{
    height: 88vh;
}
.cart-header{
    height: 100px;
    font-size: 1.4rem;
    font-weight: bolder;
    color: rgb(0, 0, 0);
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    
    background: linear-gradient(230deg,rgb(95, 252, 231),rgb(255, 255, 255));
}
.cart-footer{
    height: auto;
    font-size: 1.2rem;
    font-weight: bolder;
    color: rgb(0, 0, 0);
    text-align: center;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    
    background: linear-gradient(200deg,rgb(156, 247, 168),rgb(174, 123, 241));
}
.cart-footer button, .cart-header button{
    width: 40%;
    font-size: 1rem;
    margin: 10px;
    border-radius: 5px;
    border: none;
    background: green;
    color: white;
    padding: 8px;
    cursor: pointer;


}
button a{
    text-decoration: none;
    color: white;
}
</style>