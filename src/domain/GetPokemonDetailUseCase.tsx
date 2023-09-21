import {selectorFamily} from 'recoil';
import PokemonRepository from '../repository/PokemonRepository';
import NetworkPokemonRepository from '../repository/NetworkPokemonRepository';
import PokemonDetail from '../ui/model/PokemonDetail';

const getPokemonDetailUseCase = selectorFamily({
    key: 'getPokemonDetailUseCase',
    get: (id: integer) => async ({get}) => {
        if (id != 0) {
            const repository: PokemonRepository = NetworkPokemonRepository.getInstance();
            const pokemon = await repository.getPokemonDetail(id);
            return pokemon;
        } else {
            return new PokemonDetail(0, "", 0, 0, 0, undefined, []);
        }
    }
});

export default getPokemonDetailUseCase;