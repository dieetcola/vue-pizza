<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";

import PizzaCard from "../components/PizzaCard.vue";
import { usePizzas } from "../composables/usePizzas.ts";
import { useSearch } from "../composables/useSearch";
import type { Pizza } from "../types/Pizza.ts";
import { watch, type Ref} from "vue";

import { usePizzasStore } from "../stores/pizzas";
import { storeToRefs } from "pinia";

// const pizzasStore = usePizzasStore();
// // const { pizzas } = storeToRefs(pizzasStore);
// const { fetchPizzas } = pizzasStore;

// from routes
const props = defineProps({
  searchTerm: {
    type: String,
    required: false,
    default: ""
  }
})

const pizzasStore = usePizzasStore();
pizzasStore.fetchPizzas();
const { pizzas } = storeToRefs(pizzasStore);
console.log(pizzas)

// const { pizzas } = usePizzas();
const router = useRouter();
const route = useRoute();
const pizzaId = route.query?.id;

type PizzaSearch = {
  search: Ref<string>;
  searchResults: Ref<Pizza[]>;
};

const { search, searchResults }: PizzaSearch = useSearch({
  items: pizzas,
  // defaultSearch: route.query?.search as string,
  defaultSearch: props.searchTerm
});

watch(search, (value, prevValue) => {
  if (value === prevValue) return;
  router.replace({ query: { search: value } });
});
</script>

<template>
  <div class="pizzas-view--container">
    <h1>Pizzas</h1>
    <p v-if="pizzaId">Pizza ID: {{ pizzaId }}</p>
    <input v-model="search" placeholder="Search for a pizza" />
  </div>

  <ul>
    <li v-for="pizza in searchResults" :key="pizza.id">
      <router-link
        :to="{
          name: 'pizza',
          params: { id: pizza.id },
        }"
      >
        <PizzaCard :pizza="pizza" />
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
}

.pizzas-view--container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
</style>
