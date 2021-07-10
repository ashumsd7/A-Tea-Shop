<template>
<div class="">

    <div class="cart-card-container">
        <div class="title">
            <strong>☕{{title}}</strong>
        </div>
        <div class="price">
            ₹{{ mainPrice}} *  {{orderCount}} =  ₹{{mainPrice*orderCount}}
        </div>

    </div>
    </div>
</template>

<script>
    export default {
        props:['title','orderCount','mainPrice']
        
    }
</script>

<style scoped>
.cart-card-container{
    max-width:90vw;
    background: rgb(95, 252, 231);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 5px auto;
}
.title strong{
    font-size: 1.4rem
}
.price{
    font-size: 1.1rem;
}
</style>