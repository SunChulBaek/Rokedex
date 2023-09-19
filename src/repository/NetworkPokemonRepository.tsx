import PokemonRepository from './PokemonRepository';
import NetworkDataSource from  '../network/NetworkDataSource';
import FetchPokemonNetwork from '../network/FetchPokemonNetwork';
import Pokemon from '../ui/model/Pokemon';
import Species from '../ui/model/Species';
import Utils from '../util/Utils';

class NetworkPokemonRepository implements PokemonRepository {

    private network: NetworkDataSource = new FetchPokemonNetwork();

    public async getPokemonList(offset: number): Promise<Pokemon[]> {
         const result = await this.network.getPokemonList(offset);
         return await Promise.resolve(result.results.map((e) => new Pokemon(
             Utils.getIdFromUrl(e.url),
             e.name,
             e.url
         )));
    }

    public async getSpecies(id: integer): Promise<Species> {
        const result = await this.network.getSpecies(id);
        return await Promise.resolve(new Species(
            Utils.findName(result.names, 'ko'),
            Utils.findFlavor(result.flavor_text_entries, 'ko')
        ));
    }
}

export default NetworkPokemonRepository;