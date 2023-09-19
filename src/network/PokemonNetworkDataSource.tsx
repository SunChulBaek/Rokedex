import NetworkAPIResourceList from './model/NetworkAPIResourceList';
import NetworkPokemonSpecies from './model/NetworkPokemonSpecies';

interface NetworkDataSource {
    getPokemonList(offset: integer): Promise<NetworkAPIResourceList>;
    getSpecies(id: integer): Promise<NetworkPokemonSpecies>;
}