import NetworkAPIResourceList from './model/NetworkAPIResourceList';
import NetworkPokemonSpecies from './model/NetworkPokemonSpecies';
import NetworkType from './model/NetworkType';

interface NetworkDataSource {
    getPokemonList(offset: integer): Promise<NetworkAPIResourceList>;
    getSpecies(sId: integer): Promise<NetworkPokemonSpecies>;
    getType(tId: integer): Promise<NetworkType>;
    getPokemonDetail(id: integer): Promise<NetworkPokemon>;
}