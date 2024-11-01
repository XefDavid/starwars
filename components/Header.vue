<script lang="ts" setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <div>
        <nav class="flex items-center justify-between flex-wrap  bg-black/40">
            <nuxt-link to="/"><span><img src="assets/images/logoStarWars.webp" alt="logo"
                        class="w-30 h-20 p-1"></span></nuxt-link>
            <div class="flex items-center flex-shrink-0 text-white mr-6">


            </div>

            <!-- Mobile Menu Button -->
            <div class="block lg:hidden">
                <button @click="toggleMenu"
                    class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <!-- Menu Items -->
            <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
                class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <a href="#responsive-header"
                        class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Docs
                    </a>
                    <a href="#responsive-header"
                        class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Examples
                    </a>
                    <a href="#responsive-header"
                        class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Blog
                    </a>
                </div>

            </div>
        </nav>
    </div>
</template>
