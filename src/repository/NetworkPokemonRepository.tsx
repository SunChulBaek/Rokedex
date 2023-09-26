import PokemonRepository from './PokemonRepository';
import NetworkDataSource from  '../network/NetworkDataSource';
import FetchPokemonNetwork from '../network/FetchPokemonNetwork';
import Pokemon from '../ui/model/Pokemon';
import PokemonDetail from '../ui/model/PokemonDetail';
import Species from '../ui/model/Species';
import Type from '../ui/model/Type';
import EvolutionChain from '../ui/model/EvolutionChain';
import EvolutionItem from '../ui/model/EvolutionItem';
import EvolutionPair from '../ui/model/EvolutionPair';
import Form from '../ui/model/Form';
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
            Utils.findFlavor(result.flavor_text_entries, 'ko'),
            Utils.getIdFromUrl(result.evolution_chain.url)
        ));
    }

    public async getType(tId: integer): Promise<Type> {
        const result = await this.network.getType(tId);
        return await Promise.resolve(new Type(
            Utils.findName(result.names, 'ko')
        ));
    }

    public async getEvolutionChain(ecId: integer): Promise<EvolutionChain> {
        const result = await this.network.getEvolutionChain(ecId);
        var chain = result.chain;
        var pairs = [];
        if (chain.evolves_to.length > 0) {
            for (var i = 0; i < chain.evolves_to.length; i++) {
                var evolvesTo1 = chain.evolves_to[i];
                pairs = [
                    ...pairs,
                    new EvolutionPair(
                        new EvolutionItem(
                            Utils.getIdFromUrl(chain.species.url),
                            chain.species.name
                        ),
                        new EvolutionItem(
                            Utils.getIdFromUrl(evolvesTo1.species.url),
                            evolvesTo1.species.name
                        )
                    )
                ];
                if (evolvesTo1.evolves_to.length > 0) {
                    for (var j = 0; j < evolvesTo1.evolves_to.length; j++) {
                        var evolvesTo2 = evolvesTo1.evolves_to[i];
                        pairs = [
                            ...pairs,
                           new EvolutionPair(
                               new EvolutionItem(
                                   Utils.getIdFromUrl(evolvesTo1.species.url),
                                   evolvesTo1.species.name
                               ),
                               new EvolutionItem(
                                   Utils.getIdFromUrl(evolvesTo2.species.url),
                                   evolvesTo2.species.name
                               ),
                           )
                        ];
                    }
                }
            }
        }
        return await Promise.resolve(new EvolutionChain(pairs));
    }

    public async getForm(fId: integer): Promise<Form> {
        const result = await this.network.getPokemonForm(fId);
        return await Promise.resolve(new Form(
            Utils.findName(result.form_names, 'ko')
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
            Utils.getIdFromUrl(result.forms[0].url),
            undefined,
            result.types.map((type) => Utils.getIdFromUrl(type.type.url)),
            undefined
        ));
    }
}

export default NetworkPokemonRepository;