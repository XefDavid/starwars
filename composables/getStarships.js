import axios from 'axios';
import { ref } from 'vue';

export function getStarships() {
    const starships = ref([]);
    const isLoading = ref(false);
    const error = ref(null);

    // URL de la imagen por defecto (asegúrate de que esta imagen exista)
    const defaultImageUrl = 'assets/images/logoStarWars.webp'; 

    // Función para construir la URL de la imagen de Star Wars Visual Guide
    function getStarshipImageUrl(id) {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
    }

    // Función para obtener el ID de la nave a partir de la URL de SWAPI
    function extractStarshipId(url) {
        const idMatch = url.match(/\/(\d+)\/$/);
        return idMatch ? idMatch[1] : defaultImageUrl;
    }

    // Función para obtener naves de SWAPI con sus imágenes
    async function fetchStarships() {
        isLoading.value = true;
        try {
            const response = await axios.get('https://swapi.dev/api/starships');
            const starshipsData = response.data.results;

            // Añade las imágenes a cada nave
            const starshipsWithImages = starshipsData.map((ship) => {
                const starshipId = extractStarshipId(ship.url);
                const imageUrl = starshipId ? getStarshipImageUrl(starshipId) : defaultImageUrl; // Cambiar a la imagen por defecto
                return { ...ship, imageUrl }; // Agrega la URL de la imagen a cada nave
            });

            // Asigna las naves con imágenes al array `starships`
            starships.value = starshipsWithImages;
        } catch (e) {
            error.value = e;
  
        } finally {
            isLoading.value = false;
        }
    }

    return {
        starships,
        isLoading,
        error,
        fetchStarships
    };
}
