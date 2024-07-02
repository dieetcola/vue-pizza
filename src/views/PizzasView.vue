<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";

import PizzaCard from "../components/PizzaCard.vue";
import { usePizzas } from "../composables/usePizzas.ts";
import { useSearch } from "../composables/useSearch";
import type { Pizza } from "../types/Pizza.ts";
import { watch, type Ref, onUpdated} from "vue";

// from routes
const props = defineProps({
  searchTerm: {
    type: String,
    required: false,
    default: ""
  }
})

const { pizzas } = usePizzas();
const router = useRouter();
const route = useRoute();

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
    <input v-model="search" placeholder="Search for a pizza" />
    <ul>
      <li v-for="pizza in searchResults" :key="pizza.id">
        <PizzaCard :pizza="pizza" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.pizzas-view--container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
</style>
