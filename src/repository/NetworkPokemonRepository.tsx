import PokemonRepository from './PokemonRepository';
import NetworkDataSource from  '../network/NetworkDataSource';
import FetchPokemonNetwork from '../network/FetchPokemonNetwork';
import Pokemon from '../ui/model/Pokemon';
import PokemonDetail from '../ui/model/PokemonDetail';
import Species from '../ui/model/Species';
import Type from '../ui/model/Type';
import Utils from '../util/Utils';

class NetworkPokemonRepository implements PokemonRepository {

    private static instance: NetworkPokemonRepository;

    public static getInstance() {
        if (this.instance == undefined) {
            console.debug('NetworkPokemonRepository created');
            this.instance = new NetworkPokemonRepository();
        }
        return this.instance
    }

    private network: NetworkDataSource = new FetchPokemonNetwork();

    public async getPokemonList(offset: number): Promise<Pokemon[]> {
         const result = await this.network.getPokemonList(offset);
         return await Promise.resolve(result.results.map((e) => new Pokemon(
             Utils.getIdFromUrl(e.url),
             e.name,
             e.url
         )));
    }

    public async getSpecies(sId: integer): Promise<Species> {
        const result = await this.network.getSpecies(sId);
        return await Promise.resolve(new Species(
            Utils.findName(result.names, 'ko'),
            Utils.findFlavor(result.flavor_text_entries, 'ko')
        ));
    }

    public async getType(tId: integer): Promise<Type> {
        const result = await this.network.getType(tId);
        return await Promise.resolve(new Type(
            Utils.findName(result.names, 'ko')
        ));
    }

    public async getPokemonDetail(id: integer): Promise<PokemonDetail> {
        const result = await this.network.getPokemonDetail(id);
        return await Promise.resolve(new PokemonDetail(
            result.id,
            result.name,
            result.height,
            result.weight,
            Utils.getIdFromUrl(result.species.url),
            undefined,
            result.types.map((type) => Utils.getIdFromUrl(type.type.url)),
            undefined
        ));
    }
}

export default NetworkPokemonRepository;