import {selectorFamily} from 'recoil';
import PokemonRepository from '../repository/PokemonRepository';
import NetworkPokemonRepository from '../repository/NetworkPokemonRepository';

const getPokemonListUseCase = selectorFamily({
    key: 'getPokemonListUseCase',
    get: (offset: integer) => async ({get}) => {
        try {
            console.debug(`getPokemonListUseCase(${offset})`);
            const repository: PokemonRepository = NetworkPokemonRepository.getInstance();
            return await repository.getPokemonList(offset);
        } catch (e) {
            console.error(`getPokemonListUseCase() ${e.message}`);
        }
    }
});

export default getPokemonListUseCase;