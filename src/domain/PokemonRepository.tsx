import network from '../network/PokemonNetworkDataSource';
import Pokemon from '../ui/model/Pokemon';
import Species from '../ui/model/Species';
import Utils from '../util/Utils';

const getPokemonList = async(offset: number): Pokemon[] => {
    const result = await network.getPokemonList(offset);
    return result.results.map((e) => new Pokemon(
        Utils.getIdFromUrl(e.url),
        e.name,
        e.url
    ));
}

const getSpecies = async(id: integer): Species => {
    const result = await network.getSpecies(id);
    return new Species(
        Utils.findName(result.names, 'ko'),
        Utils.findFlavor(result.flavor_text_entries, 'ko')
    );
}

export default {
    getPokemonList: getPokemonList,
    getSpecies: getSpecies
};