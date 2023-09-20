import {selector} from 'recoil';
import homeParams from './HomeParams';
import getPokemonListUseCase from '../../domain/GetPokemonListUseCase';

const homeViewModel = selector({
    key: 'homeViewModel',
    get: async ({get}) => {
        const params = get(homeParams);
        console.debug(`homeViewModel(${params})`);
        return await get(getPokemonListUseCase(params));
    }
})

export default homeViewModel;