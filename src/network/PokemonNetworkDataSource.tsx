import NetworkDataSource from './NetworkDataSource';
import NetworkAPIResourceList from './model/NetworkAPIResourceList';
import NetworkPokemonSpecies from './model/NetworkPokemonSpecies';

class DefaultNetworkDataSource implements NetworkDataSource {

    private baseUrl: string = 'https://pokeapi.co/api/v2/';

    public async getPokemonList(offset: integer) {
        const response = await fetch(`${this.baseUrl}pokemon?limit=50&offset=${offset}`);
        const result = await response.json();
        return await Promise.resolve(result);
    }

    public async getSpecies(id: integer) {
        const response = await fetch(`${this.baseUrl}pokemon-species/${id}`);
        const result = await response.json();
        return await Promise.resolve(result);
    }
}

export default DefaultNetworkDataSource;