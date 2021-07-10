<template>
  <div>
    <div class="modal-container" :class="{'show' : true}" id="modal_container">
        
      <div class="modal">
        <h3>{{ title}}</h3>
    
          <button  id="cancel"   @click="handleCancel">OK</button>

      </div>
    </div>
  </div>
</template>

<script>

export default {
 
    props:['title' ,'toShow'],
    data() {
      return {
       
      }
    },
 
    methods: {
  
     
        handleCancel(){
         this.$emit('hideWarning')
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
      z-index: 2;
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


.modal button{
    margin: .5rem;
}


.modal-container.show{
      opacity: 1;
      pointer-events:auto;
}

#cancel{
   font-size: 1rem;
  background: rgb(243, 234, 113);
  outline: none;
  border: none;
  width: 100px;
  padding: 10px;
  color: rgb(7, 7, 7);
}




</style>