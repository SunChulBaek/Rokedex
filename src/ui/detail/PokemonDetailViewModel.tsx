import {selector} from 'recoil';
import pokemonDetailParams from './PokemonDetailParams';
import getPokemonDetailUseCase from '../../domain/GetPokemonDetailUseCase';
import getSpeciesUseCase from '../../domain/GetSpeciesUseCase';
import getTypeUseCase from '../../domain/GetTypeUseCase';
import getEvolutionChainUseCase from '../../domain/GetEvolutionChainUseCase';
import PokemonDetail from '../model/PokemonDetail';
import Species from '../model/Species';

const pokemonDetailViewModel = selector({
    key: 'pokemonDetailViewModel',
    get: async ({get}) => {
        const pId = get(pokemonDetailParams);
        if (pId != 0) {
            const pokemon: PokemonDetail = await get(getPokemonDetailUseCase(pId));
            const species: Species = await get(getSpeciesUseCase(pokemon.sId));
            const types = await pokemon.tIds.map((tId) => get(getTypeUseCase(tId)));
            const evolutionChain = await get(getEvolutionChainUseCase(species.ecId));
            for (var i = 0; i< evolutionChain.pairs.length; i++) {
                const pair = evolutionChain.pairs[i];
                console.debug(`pokemonDetailViewModel() from ${pair.from} to ${pair.to}`);
            }
            return new PokemonDetail(
                pokemon.id,
                pokemon.name,
                pokemon.height,
                pokemon.weight,
                pokemon.sId,
                species,
                pokemon.tIds,
                types,
                evolutionChain
            );
        } else {
            return new PokemonDetail(pId, '', 0, 0, 0, undefined, []);
        }
    }
});

export default pokemonDetailViewModel;