<template>
    <div class="flex flex-col p-8">
        <input type="text" class="rounded border-1 border-gray-200 w-full" placeholder="Write down your goals">

        <div class="flex justify-center gap-1">
            <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter of letters">
                {{ letter }}
            </router-link>
        </div>

        <pre>{{ ingredients }}</pre>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import axiosClient from '../axiosClient.js'

const letters = 'ABCD'.split("")
const ingredients = ref(null)

onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list')
    ingredients.value = response.data
})
</script>