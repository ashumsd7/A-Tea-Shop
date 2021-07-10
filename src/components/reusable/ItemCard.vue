<template>
   <div class="container">
     
       <div class="card-image">
           <img :src="img" alt="">
       </div>
       <div class="rating">
           {{starCount}}🌟 ({{starredBy}}) 
       </div>
       <div class="price">
            ₹{{mainPrice}} 
       </div>
         <div class="card-title">
           <p>{{title}} </p>
       </div>
       
      
       <div class="add-to-cart-count">
            <button @click="subtractOrderCount" class=" counter-btn" :class="{ fade: isClicked }" :disabled="btnValue=='Added'"> - </button>

         <button class="Add-btn"  :disabled="isClicked" :class="{ fade: isClicked }"   @click="handleClick(id,orderCount,title,mainPrice)">{{ btnValue}} {{orderCount}} </button>
                  <button @click="addOrderCount" class="reset-btn" :class="{ fade: isClicked }" :disabled="btnValue=='Added'">  + </button>
       </div>
   </div>
</template>

<script>
    export default {
        props:['title','starCount','starredBy','img','mainPrice','mrp','id'],
      
        computed:{
           
        },
        data() {
            return {
               orderCount:0,
               btnValue:'ADD',
               isClicked:false
            }
        },
        methods: {
      handleClick(id,orderCount,title,mainPrice){
          if(orderCount=='' || orderCount<0){
             this.$emit('showWarning','Please Enter Number of Orders')
              return;
          }
          this.btnValue= "Added"
          this.isClicked= true
        this.$emit('orderData',{id:id, orderCount: orderCount, title:title, mainPrice: mainPrice})
      },
      addOrderCount(){
          if(this.orderCount==9){
              this.$emit('showWarning','Maximum 9 orders are allowed.')
              return;
          }
          this.orderCount++;
      },
      subtractOrderCount(){
          if(this.orderCount==0){
                 this.$emit('showWarning','Order Count is already 0.')
              return;
          }
          this.orderCount--;
      }
     
  },
    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
.container{
    max-width: 250px;
     max-height: 400px;
     margin: 10px;
    /* border: 1px solid black; */
    display: flex;
    flex-flow: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* background: linear-gradient(230deg,#8e9eab,#eef2f3); */
    border-radius: 20px;
    position: relative;
    /* background: rgb(214, 212, 212); */
    box-shadow: 4px 4px 6px rgb(255, 255, 255);
    font-family: 'Roboto', sans-serif;
}
.card-title{
    text-align: left;
    margin-left: 20px;
    font-weight: bolder;
    opacity: .7;
}
.card-image{
width: 240px;
margin:2px auto;
display: flex;
justify-content: space-evenly;
align-items: center;

}
.card-image img{
width: 235px;
margin: auto;
height: 300px;
/* border-radius: 20px; */

}
.rating{
    position: absolute;
    top: 10px;
    right: 15px;
    opacity: .8;
    background: rgb(255, 255, 255);
    padding: 5px;
    border-radius: 2px;
    color: rgb(0, 0, 0);
    font-weight: bolder;

}

.price{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    top: -10px;
    left: -5px;
    opacity: .9;
    background: linear-gradient(250deg,#f37860 ,#dd2476);
    padding: 5px;
    border-radius: 50%;
    color: rgb(243, 243, 243);
    font-weight: bolder;
    width: 50px;
    height: 50px;

}



.add-to-cart-count{
     width: 100%;
     display: flex;
     justify-content: space-evenly;
     align-items: center;
}
.add-to-cart-count input{
     width: 20%;
     margin: 3px;
     font-size: 1.2rem;
      outline: none;
    padding: 3px 10px;
    border: none;
    /* border-radius: 20px; */
}
.add-to-cart-count .Add-btn{
     width: 50%;
     margin: 5px 0;
     font-size: 1.1rem;
       outline: none;
    padding: 3px 0;
    border: none;
    background: linear-gradient(260deg,rgb(66, 236, 248),white);
    /* border-top-right-radius: 10px;
      border-bottom-right-radius: 10px; */
    color: rgb(8, 8, 8);
    /* border-radius: 20px; */
    cursor: pointer;
    margin-bottom: 15px;
    font-family: 'Roboto', sans-serif;
}
.add-to-cart-count .counter-btn{
         width: 20%;
     margin: 5px 0;
     font-size: 1.1rem;
       outline: none;
    padding: 3px 0;
    border: none;
    background: linear-gradient(260deg,rgb(255, 217, 1),white);
    border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    color: rgb(8, 8, 8);
    /* border-radius: 20px; */
    cursor: pointer;
    margin-bottom: 15px;
    font-family: 'Roboto', sans-serif;
}

.add-to-cart-count .reset-btn{
           width: 20%;
     margin: 5px 0;
     font-size: 1.1rem;
       outline: none;
    padding: 3px 0;
    border: none;
    background: linear-gradient(260deg,rgb(255, 217, 1),white);
    border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    color: rgb(8, 8, 8);
    /* border-radius: 20px; */
    cursor: pointer;
    margin-bottom: 15px;
    font-family: 'Roboto', sans-serif;
}
.add-to-cart-count .fade{
    background: rgb(185, 185, 185);
    opacity: .5;

}





@media screen and (max-width:400px) {
    .container{
        max-width: 100vw;
     max-height: 300px;
     
    }
    .card-image{
width: 158px;
margin:2px auto;
display: flex;
justify-content: space-evenly;
align-items: center;

}
.card-image img{
width: 164px;
margin: auto;
height:200px;
/* border-radius: 20px; */

}
.rating{

    top: 10px;
    right: 5px;


    padding: 3px;
    border-radius: 2px;
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: .7rem;
}
}


</style>