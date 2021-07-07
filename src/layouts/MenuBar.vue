<template>
   <section>
      <nav class="bottom-navbar">
         <div class="container">
            <ul class="nav page-navigation">
               <li class="nav-item">
                  <router-link :to="{ name: 'whatsapp' }" class="nav-link">
                     <i class="link-icon mdi mdi-whatsapp"></i>
                     <span class="menu-title">Whatsapp</span>
                  </router-link>
                  
               </li>
            </ul>
         </div>
      </nav>
   </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuBar',
  
  setup() {
     
  }
})
</script>

<style>
   .mdi::before {
      font-size: 24px;
      line-height: 14px;
   }
</style>
