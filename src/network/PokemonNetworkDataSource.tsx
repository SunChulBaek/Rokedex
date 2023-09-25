import NetworkAPIResourceList from './model/NetworkAPIResourceList';
import NetworkEvolutionChain from './model/NetworkEvolutionChain';
import NetworkPokemonSpecies from './model/NetworkPokemonSpecies';
import NetworkType from './model/NetworkType';

interface NetworkDataSource {
    getPokemonList(offset: integer): Promise<NetworkAPIResourceList>;
    getSpecies(sId: integer): Promise<NetworkPokemonSpecies>;
    getType(tId: integer): Promise<NetworkType>;
    getEvolutionChain(ecId: integer): Promise<NetworkEvolutionChain>;
    getPokemonDetail(id: integer): Promise<NetworkPokemon>;
}