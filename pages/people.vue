<script setup lang="ts">
import { useFetch } from "#app";
import { onMounted } from 'vue';

const { data: people, pending: isLoading, error, refresh: fetchPeople } = useFetch('https://swapi.dev/api/people');

onMounted(() => {
    fetchPeople();
});
</script>

<template>
    <div class="fixed inset-0 bg-cover bg-center bg-[url('~/assets/images/people.webp')] w-screen h-screen">
        <Header />
        <div class="relative w-full h-full overflow-y-scroll bg-black/20">
            <div class="p-1">
                <!-- Mensajes de carga y error -->
                <div v-if="isLoading" class="text-white text-center">Loading people...</div>
                <div v-if="error" class="text-red-500 text-center mt-4">
                    Error loading people: {{ error }}
                </div>

                <!-- Lista de personajes -->
                <div v-if="!isLoading && !error" class="mt-8 space-y-8">
                    <ul v-if="people && people.results">
                        <li v-for="person in people.results" :key="person.name" class="text-white">
                            {{ person.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
