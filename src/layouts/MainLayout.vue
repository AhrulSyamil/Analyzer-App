<template>
  <div class="main-wrapper">

    <!-- Header -->
    <Header />
    <!-- Header -->

    <div class="page-wrapper">

      <div class="page-content">
        <router-view></router-view>
      </div>

      <!-- Footer -->
      <Footer />
      <!-- Footer -->
    </div>
  </div>
</template>

<script>

import Header from './Header'
import MenuBar from './MenuBar'
import Footer from './Footer'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Header: Header,
    MenuBar: MenuBar,
    Footer: Footer,
  },

  setup () {
    
  }
})
</script>

<style>
  @import "../assets/vendors/core/core.css";
  @import "../assets/fonts/feather-font/css/iconfont.css";
  @import "../assets/vendors/dropify/dist/dropify.min.css";
  @import "../assets/vendors/datatables.net-bs4/dataTables.bootstrap4.css";
  @import "../assets/css/style.css";
</style>
