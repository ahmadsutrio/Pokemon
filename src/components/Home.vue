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
    <div>
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 bg-slate-600">
            <div class="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6">
                <div class="card bg-red-400 flex flex-col items-center text-center py-3 mx-2 sm:mx-0"
                    v-for="pokemon in pokemonDetails">
                    <img :src="pokemon.sprites.other.dream_world.front_default" alt="" srcset=""
                        class="h-44 mx-5 w-52 bg-red-200">
                    <h3 class="">{{ pokemon.name }}</h3>
                    <h3 class="">{{ `height ${pokemon.height} KG` }}</h3>
                    <h3 class="">{{ `weight ${pokemon.weight} M` }}</h3>
                    <div class="flex gap-4 justify-center bg-red-200">
                        <div class="flex gap-2 px-4 py-1 rounded-lg justify-center items-center bg-[#A98FF3] " v-for="type in pokemon.types">
                            <span class="" v-if="`typeIcons.${type.type.name}`">
                                <i :class="`fa-solid text-white ${typeIcons[type.type.name]}`"></i>
                            </span>
                            <p class="text-white"> {{ type.type.name }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<style></style>