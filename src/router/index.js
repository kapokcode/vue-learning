import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/by-name:name?',
        name: 'byName',
        component: MealsByName
    },
    {
        path: '/by-leter:leter?',
        name: 'byLetter',
        component: MealsByLetter
    },
    {
        path: '/by-Ingredient:ingredient?',
        name: 'byIngredient',
        component: MealsByIngredient
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;