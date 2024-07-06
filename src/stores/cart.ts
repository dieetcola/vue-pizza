import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

import { usePizzasStore } from './pizzas'

type CartItem = {
  id: string
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const items = reactive<CartItem[]>([])
  const total = computed(() => {
    return items.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  })

  const detailedItems = computed(() => {
    const pizzasStore = usePizzasStore()
    return items.map((item) => {
      const pizza = pizzasStore.pizzas.find((pizza) => pizza.id === item.id)

      return {
        ...item,
        title: pizza?.title,
        price: pizza?.price,
        total: +(pizza?.price || 0) * item.quantity
      }
    })
  })

  const remove = (id: string) => {
    const index = items.findIndex((item) => item.id === id)

    if (index > -1) {
      items.splice(index, 1)
      console.log(items)
    }
  }

  const add = (item: CartItem) => {
    const index = items.findIndex((i) => i.id === item.id)
    if (index > -1) {
      items[index].quantity += item.quantity
    } else {
      items.push(item)
    }
  }

  const clear = () => {
    items.length = 0
  }

  return {
    items,
    total,
    remove,
    add,
    detailedItems,
    clear
  }
})
