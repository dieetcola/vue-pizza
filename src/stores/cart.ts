import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'

interface CartItem {
  id: string
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  // list of items added to the cart
  const items = reactive<CartItem[]>([])

  const total = computed(() => {
    return items.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  })

  const add = (item: CartItem) => {
    const index = items.findIndex((i) => i.id === item.id)
    if (index > -1) {
      items[index].quantity += item.quantity
    } else {
      items.push(item)
    }
  }

  return {
    items,
    total,
    add
  }
})
