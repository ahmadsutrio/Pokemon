<script setup>
import { onMounted, reactive, watch, ref, computed } from "vue";

// variable
const tempSearch = defineProps(['keyword'])
const pokemons = reactive([])
const pokemonDetails = reactive([])
let resultPokemon = ref([])
const search = ref('')
let searchPokemon = ref(false)
const typeIcons = [
     "fa-fire",
     "fa-water",
     "fa-leaf",
     "fa-bolt",
     "fa-snowflake",
     "fa-fist-raised",
     "fa-skull-crossbones",
     "fa-mountain",
     "fa-dove",
     "fa-brain",
     "fa-bug",
     "fa-gem",
     "fa-ghost",
     "fa-dragon",
     "fa-moon",
     "fa-cogs",
     "fa-magic",
     "fa-paw",
     "fa-question",
     "fa-star",
];

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
};

const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-blue-300',
    'bg-red-700',
    'bg-purple-500',
    'bg-yellow-800',
    'bg-blue-400',
    'bg-pink-500',
    'bg-green-600',
    'bg-gray-700',
    'bg-purple-700',
    'bg-indigo-600',
    'bg-gray-900',
    'bg-gray-500',
    'bg-pink-300',
    'bg-gray-400',
    'bg-gray-200',
    'bg-purple-900',
];

const elementColors = [
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
    "normal",
    "unknown",
    "stellar",
];

function getColors(typeElements = ""){
    let cekElement = elementColors.includes(typeElements)
    console.log(cekElement);
    
}

// Function
async function getPokemons() {
    let countPokemons = 12
    let nilai = pokemons.length + 1
    // console.log(`count pokemons ${countPokemons} nilai ${nilai}`);
    
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${nilai}&limit=${countPokemons}` 
    try {
        const response = await fetch(url)
        if (!response.ok) {
            return console.error('gagal fetching');
        }

        let json = await response.json()

        pokemons.push(...json.results)

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = await getPokemon(pokemons[i].name)
            pokemonDetails.push(pokemon)
        }
        console.log(pokemonDetails);
        

    } catch (error) {
        console.error(error.message);
    }
}

async function getPokemon(name) {
    let lowerName = name.toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${lowerName}`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            return null
        }
        const data = await response.json()
        return data

    } catch (error) {
        console.log(error.message);
        return null
    }
}

const getPokemonWithElement = async (element = "") =>{
    const url = `https://pokeapi.co/api/v2/type/${element}`
    console.log(url);
    
    try {
        const response = await fetch(url);
        if(response.status != 200){
            console.error('gagal');
        }
        const data = await response.json()
        const tempData = data.pokemon
        
        console.log(pokemonDetails.splice(0, pokemonDetails.length));
       
        console.log(pokemonDetails);
        for(let i = 0; i<10; i++){
            const pokemon = await getPokemon(tempData[i].pokemon.name)
            console.log(pokemonDetails);
            pokemonDetails.push(pokemon)   
        }
    } catch (error) {
        
    }
}

const searchPokemons = async () => {
    searchPokemon.value = true
    let getResultPokemon = await getPokemon(search.value)
    if (getResultPokemon !== null) {
        resultPokemon.value = [getResultPokemon]
    }
}

const tempResult = computed(() => resultPokemon.value)

const filteredPokemon = computed(() => {
    const uniquePokemons = [];
    const map = new Map();

    

    for (const pokemon of pokemonDetails) {
        if (!map.has(pokemon.name)) {
            map.set(pokemon.name, true);
            uniquePokemons.push(pokemon);
        }
    }

    return uniquePokemons;
});

// watch
watch(() => search.value, async () => {
    if (search.value === '') {
        searchPokemon.value = false
        resultPokemon.value = []
    } 

})

// mounted
onMounted(() => {
    getPokemons()
    // getPokemonWithElement("fire")
})


</script>

<template>
    <div class="bg-slate-800 min-w-full min-h-screen relative">

        <section class="max-w-7xl mx-auto px-4 sm:px-6 md:px-3 lg:px-5 pb-40 bg-slate-800">
            <div
                class=" sm:px-6 md:px-3 lg:px-5 py-5 md:h-16 content-center bg-slate-800 grid md:grid-cols-2 grid-cols-1 md:gap-5">
                <div
                    class="menu flex items-center gap-2 p-2 border overflow-x-scroll rounded-lg border-slate-400 scrollbar-hidden snap-x">
                    <div :class="`size-8 rounded-full ${colors[index]} flex justify-center items-center flex-shrink-0 scroll-ml-14 snap-start`" @click="getPokemonWithElement(elementColors[index])"
                        v-for="(icon, index) in typeIcons " :key="index">
                        <i :class="`fa-solid text-xl text-white ${icon}`"></i>

                    </div>
                </div>
                <div class="search flex gap-2 md:h-12 md:mt-0 mt-2">
                    <input type="search" name="" id=""
                        class="w-full py-2 px-4 rounded-xl outline-none bg-transparent border border-blue-500 text-white focus:ring-blue-500 focus:ring-4 focus:ring-opacity-40"
                        placeholder="search" v-model="search">
                    <button type="button"
                        class="py-2 px-3 bg-blue-500 rounded-xl text-white focus:ring-blue-500 focus:ring-4 focus:ring-opacity-40"
                        @click="searchPokemons">search</button>
                </div>
            </div>
            <div class="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 md:gap-3">
                <div class="card bg-[#0e0e0e] relative overflow-hidden rounded-xl flex flex-col px-5 items-center text-center py-3 sm:mx-0 "
                    v-if="searchPokemon" v-for="pokemon in tempResult">
                    <img :src="pokemon.sprites.other['official-artwork'].front_default" alt="" :loading="lazy" srcset=""
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

                <div class="card bg-[#0e0e0e] relative overflow-hidden rounded-xl flex flex-col px-5 items-center text-center py-3 sm:mx-0 "
                    v-if="!searchPokemon" v-for="pokemon in filteredPokemon" :key="pokemon.id">
                    <img :src="pokemon.sprites.other['official-artwork'].front_default" alt="" srcset="" class="size-44 w-full z-20">
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
        <div v-show="filteredPokemon.length < 100" class=" absolute bottom-0 left-0 flex justify-center items-center right-0 bg-gradient-to-t from-gray-900 h-52 z-40 ">
            <button @click="getPokemons" class="paginate outline-none border-2 border-cyan-300 text-cyan-300 py-3 px-6 rounded-full ">
                Tampilkan Lainya
            </button>
        </div>
    </div>
</template>

<style></style>