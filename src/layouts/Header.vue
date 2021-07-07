<template>
   <!-- partial:partials/_navbar.html -->
   <div class="horizontal-menu">
      <nav class="navbar top-navbar">
         <div class="container">
            <div class="navbar-content">
               <a href="#" class="navbar-brand">
                  Whatsapp<span> Analyzer</span>
               </a>
               <ul class="navbar-nav">
                  
               </ul>
               <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                  <i data-feather="menu"></i>					
               </button>
            </div>
         </div>
      </nav>

      <!-- Menu Bar -->
      <!-- <MenuBar /> -->

      
   </div>
   <!-- partial -->
</template>

<script>
import MenuBar from './MenuBar'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Header',

  components: {
    MenuBar: MenuBar,
  },

  setup () {
     
  }
})
</script>
