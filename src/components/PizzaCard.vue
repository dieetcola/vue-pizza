<script setup lang="ts">
import { computed, onUpdated, type PropType } from 'vue'

import type { Pizza } from '../types/Pizza'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()

function addToCart() {
  cart.add({ id: props.pizza.id, quantity: 1 })
}

const props = defineProps({
  pizza: {
    type: Object as PropType<Pizza>,
    required: true
  }
})

const isInCart = computed((): boolean => {
  return !!cart.items.find((item) => item.id === props.pizza.id)
})
</script>

<template>
  <article class="pizza--details-wrapper">
    <img :src="pizza.image" :alt="pizza.title" height="200" width="300" />
    <p>{{ pizza.title }}</p>
    <p>{{ pizza.description }}</p>
    <div class="pizza--inventory">
      <div class="pizza--inventory-price">$ {{ pizza.price }}</div>
      <span v-if="isInCart">In cart</span>
    </div>
    <button class="pizza--add" @click.prevent="addToCart">Add to cart</button>
  </article>
</template>

<style scoped>
.pizza--details-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 300px;
  border: 1px solid #ccc;
  padding: 0 1rem;
}

img {
  object-fit: cover;
}

.pizza--inventory {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.pizza--add {
  margin-bottom: 5px;
  cursor: pointer;
}
</style>

<!-- prevent 
;
-->
