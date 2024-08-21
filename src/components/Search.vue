<script setup>
import { onMounted, reactive, ref } from 'vue';

let search = ref('')

const typeIcons = {
    flying: "fa-dove",
    normal: "fa-paw",
    fighting: "fa-fist-raised",
    poison: "fa-skull-crossbones",
    ground: "fa-mountain",
    rock: "fa-gem",
    bug: "fa-bug",
    ghost: "fa-ghost",
    steel: "fa-cogs",
    fire: "fa-fire",
    water: "fa-water",
    grass: "fa-leaf",
    electric: "fa-bolt",
    psychic: "fa-brain",
    ice: "fa-snowflake",
    dragon: "fa-dragon",
    dark: "fa-moon",
    fairy: "fa-magic",
    stellar: "fa-star",
    unknown: "fa-question"
};

const typeColors = {
    'fa-fire': 'bg-red-500',
    'fa-water': 'bg-blue-500',
    'fa-leaf': 'bg-green-500',
    'fa-bolt': 'bg-yellow-500',
    'fa-snowflake': 'bg-blue-300',
    'fa-fist-raised': 'bg-red-700',
    'fa-skull-crossbones': 'bg-purple-500',
    'fa-mountain': 'bg-yellow-800',
    'fa-dove': 'bg-blue-400',
    'fa-brain': 'bg-pink-500',
    'fa-bug': 'bg-green-600',
    'fa-gem': 'bg-gray-700',
    'fa-ghost': 'bg-purple-700',
    'fa-dragon': 'bg-indigo-600',
    'fa-moon': 'bg-gray-900',
    'fa-cogs': 'bg-gray-500',
    'fa-magic': 'bg-pink-300',
    'fa-paw': 'bg-gray-400',
    'fa-question': 'bg-gray-200',
    'fa-star': 'bg-purple-900',
}


const searchPokeomn = ()=>{
    return search.value
}
</script>

<template>
   
</template>

<style></style>