import {selectorFamily} from 'recoil';
import PokemonRepository from '../repository/PokemonRepository';
import NetworkPokemonRepository from '../repository/NetworkPokemonRepository';
import EvolutionChain from '../ui/model/EvolutionChain';

const getEvolutionChainUseCase = selectorFamily({
    key: 'getEvolutionChainUseCase',
    get: (ecId: integer) => async ({get}) => {
        if (ecId != 0) {
            try {
                console.debug(`getEvolutionChainUseCase(${ecId})`);
                const repository: PokemonRepository = NetworkPokemonRepository.getInstance();
                const evolutionChain = await repository.getEvolutionChain(ecId);
                return evolutionChain;
            } catch (e) {
                console.error(`getEvolutionChainUseCase() ${e.message}`);
            }
        } else {
            return new EvolutionChain();
        }
    }
});

export default getEvolutionChainUseCase;