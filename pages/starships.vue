<script setup lang="ts">
import { onMounted } from 'vue';
import { getStarships } from '~/composables/getStarships';

const { starships, isLoading, error, fetchStarships } = getStarships();

onMounted(() => {
    fetchStarships();
});
</script>

<template>
    <div class="fixed inset-0 bg-cover bg-center bg-[url('~/assets/images/starships.webp')] w-screen h-screen">
        <Header />
        <div class="relative w-full h-full overflow-y-scroll bg-black/10">
            <div class="p-1">
                <!-- Mostrar loading o error si existen -->
                <div v-if="isLoading" class="text-white text-center mt-4">
                    Loading starships...
                </div>


                <!-- Contenido scrollable -->
                <div v-else class="mt-8 space-y-8">
                    <div v-for="starship in starships" :key="starship.name"
                        class="flex flex-col items-center bg-cover bg-center pt-4 pb-4 overflow-y-auto max-w-screen max-h-[500px] text-white">
                        <!-- Imagen de la nave -->
                        <img v-if="starship.imageUrl" :src="starship.imageUrl" :alt="starship.name"
                            class="w-64 h-64 object-cover rounded shadow-lg" />
                        <!-- Información de la nave -->
                        <div class="bg-white p-4 rounded shadow-lg mt-4 text-black">
                            <h3 class="text-xl font-bold">{{ starship.name }}</h3>
                            <p>Model: {{ starship.model }}</p>
                            <p>Manufacturer: {{ starship.manufacturer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
