import NetworkDataSource from './NetworkDataSource';
import NetworkAPIResourceList from './model/NetworkAPIResourceList';
import NetworkPokemonSpecies from './model/NetworkPokemonSpecies';

class FetchPokemonNetwork implements NetworkDataSource {

    private baseUrl: string = 'https://pokeapi.co/api/v2/';

    public async getPokemonList(offset: integer): Promise<NetworkAPIResourceList> {
        const response = await fetch(`${this.baseUrl}pokemon?limit=50&offset=${offset}`);
        const result = await response.json();
        return await Promise.resolve(result);
    }

    public async getSpecies(id: integer): Promise<NetworkPokemonSpecies> {
        const response = await fetch(`${this.baseUrl}pokemon-species/${id}`);
        const result = await response.json();
        return await Promise.resolve(result);
    }
}

export default FetchPokemonNetwork;