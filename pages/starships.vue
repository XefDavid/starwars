<script lang="ts"></script>
<template>

    <div class="fixed inset-0 bg-cover bg-center bg-[url('~/assets/images/starships.webp')] w-screen h-screen">

        <Header />
        <div class="relative w-full h-full overflow-y-scroll bg-black/10">
            <div class="p-1">


                <!-- Contenido scrollable -->
                <div class="mt-8 space-y-8">

                    <div
                        class=" flex justify-between  bg-cover bg-center pt-16 pb-18 overflow-y-scroll max-w-screen max-h-[500px]">
                        <div class="flex flex-col gap-10 pl-14">
                            <nuxt-link to="/films">
                                <div class="flex flex-col items-center">
                                    <img src="~/assets/images/films.webp " alt="films"
                                        class="w-[200px] h-[200px] rounded-lg border-2 border-orange-600 object-cover object-center">
                                    <h1 class="text-white text-2xl text-center">Films</h1>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="/planets">
                                <div class="flex flex-col items-center">
                                    <img src="~/assets/images/planets.webp" alt="planets "
                                        class="w-[200px] h-[200px] rounded-lg border-2 border-orange-600 object-cover object-center">
                                    <h1 class=" text-white text-2xl text-center">Planets</h1>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="/starships">
                                <div class="flex flex-col items-center">
                                    <img src="~/assets/images/starships.webp" alt="starships"
                                        class="w-[200px] h-[200px] rounded-lg border-2 border-orange-600 object-cover object-center">
                                    <h1 class=" text-white text-2xl text-center">Starships</h1>
                                </div>
                            </nuxt-link>
                        </div>
                        <div class="flex flex-col gap-10 pr-14">
                            <nuxt-link to="/vehicles">
                                <div class=" flex flex-col items-center">
                                    <img src="~/assets/images/vehicles.webp" alt="vehicles"
                                        class="w-[200px] h-[200px] rounded-lg border-2 border-orange-600 object-cover object-center">
                                    <h1 class=" text-white text-2xl text-center">Vehicles</h1>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="/people">
                                <div class="flex flex-col items-center">
                                    <img src="~/assets/images/people.webp" alt="people"
                                        class="w-[200px] h-[200px] rounded-lg border-2 border-orange-600 object-cover object-center">
                                    <h1 class=" text-white text-2xl text-center">People</h1>
                                </div>
                            </nuxt-link>
                            <nuxt-link to="/species">
                                <div class="flex flex-col items-center">
                                    <img src="~/assets/images/species.webp" alt="species"
                                        class="w-[200px] h-[200px] rounded-lg border-2 border-orange-600 object-cover object-center">
                                    <h1 class=" text-white text-2xl text-center">Species</h1>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>