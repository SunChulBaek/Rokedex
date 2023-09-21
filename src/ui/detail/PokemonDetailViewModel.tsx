import {selector} from 'recoil';
import pokemonDetailParams from './PokemonDetailParams';
import getPokemonDetailUseCase from '../../domain/GetPokemonDetailUseCase';
import getSpeciesUseCase from '../../domain/GetSpeciesUseCase';
import PokemonDetail from '../model/PokemonDetail';
import Species from '../model/Species';

const pokemonDetailViewModel = selector({
    key: 'pokemonDetailViewModel',
    get: async ({get}) => {
        const pId = get(pokemonDetailParams);
        if (pId != 0) {
            const pokemon: PokemonDetail = await get(getPokemonDetailUseCase(pId));
            const species: Species = await get(getSpeciesUseCase(pokemon.sId));
            return new PokemonDetail(
                pokemon.id,
                pokemon.name,
                pokemon.height,
                pokemon.weight,
                pokemon.sId,
                species,
                pokemon.tIds
            );
        } else {
            return new PokemonDetail(pId, '', 0, 0, 0, undefined, []);
        }
    }
});

export default pokemonDetailViewModel;