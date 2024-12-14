import axios from "axios";
import { ref } from "vue";

export function getPeople() {
  const people = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const defaultImageUrl = "assets/images/logoStarWars.webp";

  function getPeopleImageUrl(id) {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }

  function getPeopleId(url) {
    const idMatch = url.match(/\/(\d+)\/$/);
    return idMatch ? idMatch[1] : null;
  }

  async function fetchPeople() {
    isLoading.value = true;
    try {
      const response = await axios.get("https://swapi.dev/api/people");
      const peopleData = response.data.results;

      const peopleWithImages = peopleData.map((person) => {
        const peopleId = getPeopleId(person.url);
        const imageUrl = peopleId ? getPeopleImageUrl(peopleId) : defaultImageUrl;
        return { ...person, imageUrl };
      });

      people.value = peopleWithImages;
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  }

  return { people, isLoading, error, fetchPeople };
}
