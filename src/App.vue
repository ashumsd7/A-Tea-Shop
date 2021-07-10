<template>
<NavBar/>
   <transition name="slide" mode="out-in">
     <router-view></router-view>
     </transition>
  <Footer/>
</template>
<script>
import NavBar from './components/boss/Navbar.vue'
import Footer from './components/boss/Footer.vue'
export default {
  components:{
    NavBar,
    Footer
  }
}
</script>
<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin:0;

}
body{
  background: rgb(255, 255, 255);
}
.slide-enter-active {
  animation: slide-in 1000ms ease-out forwards;
}
.slide-leave-active {
   animation: slide-out 1000ms ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(-30px);
     opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
     opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
