<template>
    <nav>
        <ul>
          
            <li>
  <img height="48" src="../../assets/logo.png" alt="">
            </li>
            <li class="tag">Ashu-Tea Shop </li>
            
        </ul>
        
        
        <ul v-if="!!isDataInCart"  class="cart">
              <router-link to="/cart">
           <li  class="cart-icon"><img src="../../assets/cart2.png" alt="" srcset=""></li>
           <span class="cart-number"> {{isDataInCart}}</span>
         
            <!-- <li class="order">Order</li> -->
            </router-link>
          
        </ul>
        
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
          computed:{
           
            isDataInCart(){
                return this.$store.getters['cart/getCartData'].length
            },
          

        },
      
       
    }
</script>

<style scoped>
nav{
    width: 99.5vw;
    height: 50px;
    background: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    
   
}
nav ul{
    display: flex;
    align-items: center;
    justify-content: center;
}
.tag{
    font-weight: bolder;
    color: white;
    list-style: none;
    text-transform: capitalize;
    font-size: 1.4rem;
    text-shadow: 0px 2px 4px rgb(243, 208, 208);
}
.cart{
    position: relative;
    animation: animateCart .5s infinite alternate ease-in;

}
.cart-number{
    position: absolute;
    top: 0px;
    left: -10px;
    width: 20px;
    height: 20px;
    background: rgb(238, 0, 0);
    color: rgb(215, 238, 5);
    font-weight: bolder;
    opacity: .9;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* .order{
    background: greed;
    width: 80px;
    height: 30px;
   text-align: center;
    color: white;
    background: green;
    padding: 0px;
    border-radius: 20px;
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
} */
a{
    text-decoration: none;
}
li{
    list-style: none;
}

@keyframes animateCart{
    to{
        transform: translateX(-3px)
    }
    from{
        transform: translateX(0px)
    }
}
</style>