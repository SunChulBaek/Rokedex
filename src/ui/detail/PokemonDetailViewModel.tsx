import {selector} from 'recoil';
import pokemonDetailParams from './PokemonDetailParams';
import getPokemonDetailUseCase from '../../domain/GetPokemonDetailUseCase';
import getSpeciesUseCase from '../../domain/GetSpeciesUseCase';
import getTypeUseCase from '../../domain/GetTypeUseCase';
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
            return new PokemonDetail(
                pokemon.id,
                pokemon.name,
                pokemon.height,
                pokemon.weight,
                pokemon.sId,
                species,
                pokemon.tIds,
                types
            );
        } else {
            return new PokemonDetail(pId, '', 0, 0, 0, undefined, []);
        }
    }
});

export default pokemonDetailViewModel;