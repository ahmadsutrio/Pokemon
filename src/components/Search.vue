<script setup>
import { onMounted, reactive } from 'vue';

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

</script>

<template>
    <section class="bg-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-3 lg:px-5 py-5 md:h-16 content-center bg-slate-800 grid md:grid-cols-2 grid-cols-1 md:gap-5">
            <div
                class="menu flex items-center gap-2 p-2 border overflow-x-scroll rounded-lg border-slate-400 scrollbar-hidden snap-x">
                <div :class="`size-8 rounded-full ${typeColors[element]} flex justify-center items-center flex-shrink-0 scroll-ml-14 snap-start`"
                    v-for="element in typeIcons">
                    <i :class="`fa-solid text-xl text-white ${element}`"></i>

                </div>
            </div>
            <div class="search flex gap-2 md:h-12 md:mt-0 mt-2">
                <input type="search" name="" id=""
                    class="w-full py-2 px-4 rounded-xl outline-none bg-transparent border border-blue-500 text-white focus:ring-blue-500 focus:ring-4 focus:ring-opacity-40"
                    placeholder="search">
                <button type="button"
                    class="py-2 px-3 bg-blue-500 rounded-xl text-white focus:ring-blue-500 focus:ring-4 focus:ring-opacity-40">Search</button>
            </div>
        </div>
    </section>
</template>

<style></style>