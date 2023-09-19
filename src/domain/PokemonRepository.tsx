import NetworkDataSource from  '../network/NetworkDataSource';
import PokemonNetworkDataSource from '../network/PokemonNetworkDataSource';
import Pokemon from '../ui/model/Pokemon';
import Species from '../ui/model/Species';
import Utils from '../util/Utils';

class PokemonRepository {

    private network: NetworkDataSource;

    constructor() {
        this.network = new PokemonNetworkDataSource();
    }

    public async getPokemonList(offset: number) {
         const result = await this.network.getPokemonList(offset);
         return await Promise.resolve(result.results.map((e) => new Pokemon(
             Utils.getIdFromUrl(e.url),
             e.name,
             e.url
         )));
    }

    public async getSpecies(id: integer) {
        const result = await this.network.getSpecies(id);
        return await Promise.resolve(new Species(
            Utils.findName(result.names, 'ko'),
            Utils.findFlavor(result.flavor_text_entries, 'ko')
        ));
    }
}

export default PokemonRepository;