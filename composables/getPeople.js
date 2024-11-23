import { useFetch } from "#app";

export function getPeople() {
  const { data: people, pending: isLoading, error, refresh: fetchPeople } = useFetch('https://swapi.dev/api/people');

  return { people, isLoading, error, fetchPeople };
}
