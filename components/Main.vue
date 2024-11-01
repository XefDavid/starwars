<script lang="ts">

</script>
<template>

    <div>
        <div class=" flex justify-between  bg-cover bg-center pt-16 pb-18 overflow-y-scroll max-w-screen max-h-[500px]">
            <div class="flex flex-col gap-10 pl-[100px]">
                <nuxt-link to="/films">
                    <div class="flex flex-col items-center">
                        <img src="~/assets/images/films.webp " alt="films"
                            class="w-[200px] h-[200px] rounded-lg border-2 border-orange-600 object-cover object-center">
                        <h1 class="text-2xl text-center font-starjhol text-yellow-400">Films</h1>
                    </div>
                </nuxt-link>
                <nuxt-link to="/planets">
                    <div class="flex flex-col items-center">
                        <img src="~/assets/images/planets.webp" alt="planets "
                            class="w-[200px] h-[200px] rounded-lg border-2 border-orange-600 object-cover object-center">
                        <h1 class="text-2xl text-center font-starjhol text-yellow-400">Planets</h1>
                    </div>
                </nuxt-link>
                <nuxt-link to="/starships">
                    <div class="flex flex-col items-center">
                        <img src="~/assets/images/starships.webp" alt="starships"
                            class="w-[200px] h-[200px] rounded-lg border-2 border-orange-600 object-cover object-center">
                        <h1 class="text-2xl text-center font-starjhol text-yellow-400">Starships</h1>
                    </div>
                </nuxt-link>
            </div>
            <div class="flex flex-col gap-10 pr-[100px]">
                <nuxt-link to="/vehicles">
                    <div class=" flex flex-col items-center">
                        <img src="~/assets/images/vehicles.webp" alt="vehicles"
                            class="w-[200px] h-[200px] rounded-lg border-2 border-orange-600 object-cover object-center">
                        <h1 class="text-2xl text-center font-starjhol text-yellow-400">Vehicles</h1>
                    </div>
                </nuxt-link>
                <nuxt-link to="/people">
                    <div class="flex flex-col items-center">
                        <img src="~/assets/images/people.webp" alt="people"
                            class="w-[200px] h-[200px] rounded-lg border-2 border-orange-600 object-cover object-center">
                        <h1 class="text-2xl text-center font-starjhol text-yellow-400">People</h1>
                    </div>
                </nuxt-link>
                <nuxt-link to="/species">
                    <div class="flex flex-col items-center">
                        <img src="~/assets/images/species.webp" alt="species"
                            class="w-[200px] h-[200px] rounded-lg border-2 border-orange-600 object-cover object-center">
                        <h1 class="text-2xl text-center font-starjhol text-yellow-400">Species</h1>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>

</template>