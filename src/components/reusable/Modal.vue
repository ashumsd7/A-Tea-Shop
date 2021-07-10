<template>
  <div>
    <div class="modal-container" :class="{'show' : true}" id="modal_container">
        
      <div class="modal">
        ☕
            <div class="loading"></div>
        <h3  v-if="!isOrdered">{{ title}}</h3>
           <input maxlength="20" v-if="!isOrdered" v-model="name" required  placeholder="Your Good Name" type="text">
          <input v-if="!isOrdered" v-model="number" required  placeholder="Your Mobile Number" type="number">
          <div  v-if="isOrdered" class="">
             <h3> Thanks for Your Order </h3>
          <h3>Check Your Inbox</h3>
          </div>
         
        <h3  v-if="isOrdered">ORDER PLACED</h3>
       <div class="button-container">
 <button  v-if="!isOrdered" @click="orderNow" id="close">{{ btnValue}}</button>
          <button  id="cancel"  v-if="!isOrdered" @click="handleCancel">Cancel</button>
       </div>
       
        <div  class="loading"></div>
        ☕

        <div class="">
         <a href="https://feedback-aat.netlify.app/"> Feedback </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import axios from 'axios'
export default {
 
    props:['title' ,'toShow'],
     mounted() {
            this.calculateTotal()
        },
    data() {
      return {
        btnValue:'Order',
        isOrdered:false,
        totalPrice:null,
        number:null,
        name:''
      }
    },
    computed:{
      cartData(){
                return this.$store.getters['cart/getCartData']
            },
       orderNumbers(){
                return this.$store.getters['cart/getCartData'].length
            },
    },
    methods: {
     
      orderNow(){
        if(!this.number){
          alert("enter Mobile number to order")
          return;
        }
        this.btnValue='Ordering...'
        var fullMsg = `Dear ${this.name}, ${this.orderNumbers} orders of price ₹${this.totalPrice} is suceessfully Placed. Thanks for shopping with Ashu-Tea, Give Feedback https://feedback-aat.netlify.app/, Keep Smiling :D `
        var num= this.number
       
          axios.get(
        `https://www.fast2sms.com/dev/bulkV2?authorization=wLr7nZRfemK0lptNoIEaM5gGc2VQY9JvDyb1H4A3jqF86SUsXxS9xKen4PtTskwH0dgQAfEa68MXrZhb&sender_id=TXTIND&message=${fullMsg}&route=v3&numbers=${num},`
      ).then(res=>{
          console.log(res);
           this.btnValue='Ordered'
           this.isOrdered= true
            this.$store.dispatch('clearCartAction');
          setTimeout(() => {
            this.$store.dispatch('cart/clearCartAction')
            this.$router.push('/')
          }, 3000);
      }).catch(err=>{
           this.btnValue="!Sent Error"
          alert(err)
          console.log(err);
      })
      },
        calculateTotal(){
               
         this.totalPrice=   this.cartData.reduce((accum,curr)=>{
 
                return accum + (curr.mainPrice*curr.orderCount)
            },0)
            
            
        },
        handleCancel(){
          this.$emit('cancelOrder')
        }
    },
};
</script>

<style  scoped>
.modal-container{
      position: fixed;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0%;
      left: 0%;
      width: 100vw;
      height: 100vh;
      opacity: 0;
      pointer-events:none;
      transition: opacity .5s ease;
      background-color: rgba(0, 0, 0, .3);
      -webkit-transition: opacity .5s ease;
      -moz-transition: opacity .5s ease;
      -ms-transition: opacity .5s ease;
      -o-transition: opacity .5s ease;
      /* animation: roll 3s infinite forwards; */
}
.loading{
    width: 100px;
    height: 10px;
    background: green;
    margin: 5px auto;
   
     animation: roll 3s infinite forwards;
     
}
.modal{
    background-color: white;
    width: 350px;
    max-width: 100%;
    padding: 20px 40px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    text-align: center;
       box-shadow: 0 2px 4px rgba(0, 0, 0, .5);
}
.modal h3{
    margin: 0;
}
.modal p{
   opacity: .7;
   font-size: 15px;
}
input{
  margin: 10px auto;
  font-size: 1.2rem;
  padding: 5px;
  width: 250px;
  outline: none;

}
.button-container{
  display: flex;
}

.modal button{
    margin: .5rem;
}


.modal-container.show{
      opacity: 1;
      pointer-events:auto;
}

#close{
  font-size: 1rem;
  background: green;
  outline: none;
  width: 100px;
  padding: 5px;
  color: white;
  border: none;

}
#cancel{
   font-size: 1rem;
  background: rgb(248, 62, 62);
  outline: none;
  width: 100px;
  border: none;
  padding: 5px;
  color: rgb(231, 230, 230);
}

@keyframes roll {
    0%{
        transform: rotateX(0deg);
        opacity: .7;
    }
    20%{
      transform: rotateX(180deg);
       opacity: .2;
       background: RED;
    }
    40%{
        transform: rotateX(0deg);
           opacity: .7;
           background: rgb(36, 12, 252);
    }
    60%{
        transform: rotateY(180deg);
         opacity: .2;
         background: rgb(141, 252, 15);
    }
    80%{
        transform: rotateY(0deg);
         opacity: .7;
         background: rgb(0, 0, 0);
    }
    90%{
        transform: scale(.9);
         opacity: .2;
         background: rgb(255, 1, 107);
    }
     100%{
        transform: scale(1.1);
         opacity: 1;
         background: rgb(121, 1, 1);
    }
    
}
</style>