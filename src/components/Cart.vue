<script setup lang="ts">
import { useCartStore } from "../stores/cart";
const cart = useCartStore();
</script>

<template>
  <div class="cart">
    <span class="cart__total">Cart: {{ cart.total }}</span>
  </div>
</template>

<style scoped>
.cart__total {
  cursor: pointer;
  text-decoration: underline;
}
</style>
