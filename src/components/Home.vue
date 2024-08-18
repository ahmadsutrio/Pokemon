<script setup>
import { onMounted, reactive } from "vue";

const pokemons = reactive([])
const pokemonDetails = reactive([])

// icons
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
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    grass: 'bg-green-500',
    electric: 'bg-yellow-500',
    ice: 'bg-blue-300',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-800',
    flying: 'bg-blue-400',
    psychic: 'bg-pink-500',
    bug: 'bg-green-600',
    rock: 'bg-gray-700',
    ghost: 'bg-purple-700',
    dragon: 'bg-indigo-600',
    dark: 'bg-gray-900',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-300',
    normal: 'bg-gray-400',
    unknown: 'bg-gray-200',
    stellar: 'bg-purple-900',
}


// Function
async function getPokemons() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=50"
    try {
        const response = await fetch(url)
        console.log('melakukan fetch');

        if (!response) {
            console.log(`response status ${response.status}`);
        }

        let json = await response.json()

        pokemons.push(...json.results)

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = await getPokemon(pokemons[i].name)
            pokemonDetails.push(pokemon)
        }

    } catch (error) {
        console.error(error.message);
    }
}

async function getPokemon(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

// mounted
onMounted(() => {
    getPokemons()

})

</script>

<template>
    <div class="bg-slate-800">
        <section class="max-w-7xl mx-auto px-4 sm:px-6 md:px-3 lg:px-5 bg-slate-800">
            <div class="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 md:gap-3">
                <div class="card bg-[#0e0e0e] relative overflow-hidden rounded-xl flex flex-col px-5 items-center text-center py-3 sm:mx-0 "
                    v-for="pokemon in pokemonDetails">
                    <img :src="pokemon.sprites.other.dream_world.front_default" alt="" srcset=""
                        class="size-44 w-full z-20">
                    <h3 class=" z-20 text-3xl font-semibold text-slate-100 tracking-wider mt-3 capitalize">
                        {{ pokemon.name }}</h3>
                    <div class="flex md:gap-2 gap-3 justify-center w-full my-3">
                        <div :class="`flex gap-2 px-3 py-1 rounded-lg justify-center items-center  ${typeColors[type.type.name] || 'bg-[#A98FF3]'} z-20`"
                            v-for="type in pokemon.types">
                            <span class="" v-if="`typeIcons.${type.type.name}`">
                                <i :class="`fa-solid text-sm text-white ${typeIcons[type.type.name]}`"></i>
                            </span>
                            <p class="text-white text-base font-semibold uppercase"> {{ type.type.name }}</p>
                        </div>
                    </div>
                    <div class="flex w-full gap-5 font-bold text-slate-100 text-2xl mb-5 justify-center">
                        <h3 class=" z-20">{{ `${pokemon.height} KG` }}</h3>
                        <h3 class=" z-20">{{ `${pokemon.weight} M` }}</h3>
                    </div>
                    <div
                        :class="`absolute -bottom-28 right-0 z- left-0 size-72 mx-auto rounded-full ${typeColors[pokemon.types[0].type.name]} blur-[80px]`">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style></style>