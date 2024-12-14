<script setup lang="ts">
import { onMounted } from "vue";
import { getPeople } from "~/composables/getPeople.js";

const { people, isLoading, error, fetchPeople } = getPeople();

onMounted(() => {
    fetchPeople(); // Asegúrate de que esta función exista y esté disponible aquí.
});
</script>

<template>
    <div class="fixed inset-0 bg-cover bg-center bg-[url('@/assets/images/peoples.webp')] w-screen h-screen">
        <Header />
        <div class="relative w-full h-full overflow-y-scroll bg-black/10">
            <div class="p-1">
                <!-- Mostrar loading o error si existen -->
                <div v-if="isLoading" class="text-white text-center mt-4">
                    Loading peoples...
                </div>
                <div v-else-if="error" class="text-red-500 text-center mt-4">
                    Error: {{ error.message }}
                </div>

                <!-- Contenido scrollable -->
                <div v-else class="mt-8 space-y-8">
                    <div v-for="person in people" :key="person.name"
                        class="flex flex-col items-center bg-cover bg-center pt-4 pb-4 overflow-y-auto max-w-screen max-h-[500px] text-white">
                        <!-- Imagen de la persona -->
                        <img v-if="person.imageUrl" :src="person.imageUrl" :alt="person.name"
                            class="w-64 h-64 object-cover rounded shadow-lg" />
                        <!-- Información de la persona -->
                        <div class="bg-white p-4 rounded shadow-lg mt-4 text-black">
                            <h3 class="text-xl font-bold">{{ person.name }}</h3>
                            <p>Model: {{ person.model }}</p>
                            <p>Manufacturer: {{ person.manufacturer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
