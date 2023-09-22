import {selectorFamily} from 'recoil';
import getPokemonListUseCase from '../../domain/GetPokemonListUseCase';

var result = [];

const homeViewModel = selectorFamily({
    key: 'homeViewModel',
    get: (offset: integer) => async ({get}) => {
        console.debug(`homeViewModel(offset = ${offset})`);
        const newPokemons = await get(getPokemonListUseCase(offset));
        result = [
            ...result,
            ...newPokemons
        ];
        return result;
    }
})

export default homeViewModel;