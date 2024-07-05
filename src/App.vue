<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Cart from "./components/Cart.vue";

</script>

<template>
  <NavBar />
  <Cart />
  <RouterView />
</template>
