import {selectorFamily} from 'recoil';
import PokemonRepository from '../repository/PokemonRepository';
import NetworkPokemonRepository from '../repository/NetworkPokemonRepository';
import Type from '../ui/model/Type';

const getTypeUseCase = selectorFamily({
    key: 'getTypeUseCase',
    get: (tId: integer) => async ({get}) => {
        if (tId != 0) {
            try {
                console.debug(`getTypeUseCase(${tId})`);
                const repository: PokemonRepository = NetworkPokemonRepository.getInstance();
                const type = await repository.getType(tId);
                return type;
            } catch (e) {
                console.error(`getTypeUseCase() ${e.message}`);
            }
        } else {
            return new Type('');
        }
    }
});

export default getTypeUseCase;