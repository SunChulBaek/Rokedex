import {selectorFamily} from 'recoil';
import PokemonRepository from '../repository/PokemonRepository';
import NetworkPokemonRepository from '../repository/NetworkPokemonRepository';
import Species from '../ui/model/Species';

const getSpeciesUseCase = selectorFamily({
    key: 'getSpeciesUseCase',
    get: (id: integer) => async ({get}) => {
        if (id != 0) {
            try {
                console.debug(`getSpeciesUseCase(${id})`);
                const repository: PokemonRepository = NetworkPokemonRepository.getInstance();
                const species = await repository.getSpecies(id);
                return species;
            } catch (e) {
                console.error(`getSpeciesUseCase() ${e.message}`);
            }
        } else {
            return new Species('', '');
        }
    }
});

export default getSpeciesUseCase;