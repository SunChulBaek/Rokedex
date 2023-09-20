import {selector} from 'recoil';
import pokemonDetailParams from './PokemonDetailParams';
import getSpeciesUseCase from '../../domain/GetSpeciesUseCase';

const pokemonDetailViewModel = selector({
    key: 'pokemonDetailViewModel',
    get: async ({get}) => {
        const params = get(pokemonDetailParams);
        console.debug(`pokemonDetailViewModel(${params})`);
        return await get(getSpeciesUseCase(params));
    }
});

export default pokemonDetailViewModel;