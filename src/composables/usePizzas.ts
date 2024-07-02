import type { Pizza } from '../types/Pizza'
import { ref, type Ref } from 'vue'

export function usePizzas(): { pizzas: Ref<Pizza[]> } {
  return {
    pizzas: ref([
      {
        id: '1',
        title: 'Asian pizza',
        price: '9,52 ₾',
        description:
          'A delicious combination of Chicken fillet, mozzarella cheese, carrots, green beans, zucchini, teriyaki sauce, sesame seeds, oregano.',
        image: 'https://pizza24.ge/images/thumbs/0001903_asian-pizza-24-cm_510.jpeg',
        quantity: 1
      },
      {
        id: '2',
        title: 'Margherita pizza',
        price: '8,72 ₾',
        description:
          'A delicious combination of Dough, tomato sauce, mozzarella cheese, fresh tomatoes, spices.',
        image: 'https://pizza24.ge/images/thumbs/0001797_margherita-pizza-24-cm_510.jpeg',
        quantity: 2
      },
      {
        id: '3',
        title: 'Barbeque pizza',
        price: '9,52 ₾',
        description:
          'A delicious combination of Dough, smoked barbecue sauce, mozzarella cheese, chicken, onion, ham mushroom, green bell pepper.',
        image: 'https://pizza24.ge/images/thumbs/0001789_barbeque-pizza-24-cm_510.jpeg',
        quantity: 1
      },
      {
        id: '4',
        title: 'Pepperoni pizza',
        price: '11,12 ₾',
        description:
          'A delicious combination of Dough, tomato sauce, mozzarella cheese, pepperoni sausage, spices.',
        quantity: 5,
        image: 'https://pizza24.ge/images/thumbs/0001799_pepperoni-pizza-24-cm_510.jpeg'
      },
      {
        id: '5',
        title: 'Diablo pizza',
        price: '9,52 ₾',
        description:
          'A delicious combination of Dough, tomato sauce, mozzarella cheese, pepperoni sausage, jalapeno pepper, mushrooms, tabasco.',
        quantity: 3,
        image: 'https://pizza24.ge/images/thumbs/0001795_diablo-pizza-24-cm_510.jpeg'
      },
      {
        id: '6',
        title: 'Caponata Pizza',
        price: '7,92 ₾',
        description:
          'A delicious combination of Dough, zucchini, onion, garlic, salt, pizza sauce, oil, sugar, oregano, olives, mozzarella, green onion.',
        quantity: 1,
        image: 'https://pizza24.ge/images/thumbs/0002392_caponata-pizza-24-cm_510.png'
      }
    ])
  }
}
