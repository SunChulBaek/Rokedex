import PokemonNetworkDataSource from './PokemonNetworkDataSource';
import NetworkAPIResourceList from './model/NetworkAPIResourceList';
import NetworkEvolutionChain from './model/NetworkEvolutionChain';
import NetworkPokemonSpecies from './model/NetworkPokemonSpecies';
import NetworkPokemon from './model/NetworkPokemon';

class FetchPokemonNetwork implements PokemonNetworkDataSource {

    private baseUrl: string = 'https://pokeapi.co/api/v2';

    public async getPokemonList(offset: integer): Promise<NetworkAPIResourceList> {
        const response = await fetch(`${this.baseUrl}/pokemon?limit=50&offset=${offset}`);
        const result = await response.json();
        return await Promise.resolve(result);
    }

    public async getSpecies(sId: integer): Promise<NetworkPokemonSpecies> {
        const response = await fetch(`${this.baseUrl}/pokemon-species/${sId}`);
        const result = await response.json();
        return await Promise.resolve(result);
    }

    public async getType(tId: integer): Promise<NetworkType> {
        const response = await fetch(`${this.baseUrl}/type/${tId}`);
        const result = await response.json();
        return await Promise.resolve(result);
    }

    public async getEvolutionChain(ecId: integer): Promise<NetworkEvolutionChain> {
        const response = await fetch(`${this.baseUrl}/evolution-chain/${ecId}`);
        const result = await response.json();
        return await Promise.resolve(result);
    }

    public async getPokemonForm(fId: integer): Promise<NetworkPokemonForm> {
        const response = await fetch(`${this.baseUrl}/pokemon-form/${fId}`);
        const result = await response.json();
        return await Promise.resolve(result);
    }

    public async getPokemonDetail(id: integer): Promise<NetworkPokemon> {
        const response = await fetch(`${this.baseUrl}/pokemon/${id}`);
        const result = await response.json();
        return await Promise.resolve(result);
    }
}

export default FetchPokemonNetwork;