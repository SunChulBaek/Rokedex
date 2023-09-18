import NetworkAPIResourceList from './model/NetworkAPIResourceList';
import NetworkPokemonSpecies from './model/NetworkPokemonSpecies';

const baseUrl = 'https://pokeapi.co/api/v2/';

export default {
    getPokemonList: async(offset: integer): NetworkAPIResourceList => {
        const response = await fetch(`${baseUrl}pokemon?limit=50&offset=${offset}`);
        const result = await response.json();
        return result;
    },
    getSpecies: async(id: integer): NetworkPokemonSpecies => {
        const response = await fetch(`${baseUrl}pokemon-species/${id}`);
        const result = await response.json();
        return result;
    }
};