import type { Pizza } from '../types/Pizza'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePizzasStore = defineStore('pizzas', () => {
  //state
  const pizzas = ref<Pizza[]>([])

  // actions method
  const fetchPizzas = async () => {
    const response = await fetch('http://exploringvue.com/.netlify/functions/pizzas')
    const data = await response.json()
    pizzas.value = data
  }

  return {
    pizzas,
    fetchPizzas
  }
})
