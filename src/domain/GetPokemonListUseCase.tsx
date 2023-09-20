import {selector} from 'recoil';
import getPokemonListParams from './GetPokemonListParams';
import PokemonRepository from '../repository/PokemonRepository';
import NetworkPokemonRepository from '../repository/NetworkPokemonRepository';

const getPokemonListUseCase = selector({
    key: 'getPokemonListUseCase',
    get: async ({get}) => {
        try {
            const params = get(getPokemonListParams);
            console.debug(`getPokemonListUseCase(${params})`);
            const repository: PokemonRepository = new NetworkPokemonRepository();
            const newPokemons = await repository.getPokemonList(params);
            return newPokemons;
        } catch (e) {
            console.error(`getPokemonListUseCase() ${e.message}`);
        }
    }
});

export default getPokemonListUseCase;