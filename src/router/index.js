import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
// import Meal from "@/views/Meal.vue";
import MealsByGradients from "@/views/MealsByGradients.vue";
import MealsByLettres from "@/views/MealsByLettres.vue";
import MealsByName from "@/views/MealsByName.vue";
import DefaultLayout from "@/components/DefaultLayout.vue";
import GestLayout from "@/components/GestLayout.vue";
import MealDetails from "@/views/MealDetails.vue";

const routes = [
  {
    path: "/login",
    component: GestLayout,
  },
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:name?",
        name: "byLetter",
        component: MealsByLettres,
      },
      {
        path: "/by-ingredient/:name?",
        name: "byIngredient",
        component: MealsByGradients,
      },
      {
        path: "/meal/:id?",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;