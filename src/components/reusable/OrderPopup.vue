<template>
    <div class="order">
        <p><router-link to="/cart">Order</router-link></p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.order{
     position: fixed;
    bottom: 20px;
    right: 20px;
    width: 80px;
    height: 80px;
    background: green;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;

    animation: popup 2s infinite alternate ease-in;
}
a{
    text-decoration: none;
       color: white;
}


@keyframes popup {
    0%{
        transform: scale(.9);
    }
    100%{
        transform: scale(1.1);
    }
}
</style>