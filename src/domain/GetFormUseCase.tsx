import {selectorFamily} from 'recoil';
import PokemonRepository from '../repository/PokemonRepository';
import NetworkPokemonRepository from '../repository/NetworkPokemonRepository';
import Form from '../ui/model/Form';

const getFormUseCase = selectorFamily({
    key: 'getFormUseCase',
    get: (fId: integer) => async ({get}) => {
        if (fId != 0) {
            try {
                console.debug(`getFormUseCase(${fId})`);
                const repository: PokemonRepository = NetworkPokemonRepository.getInstance();
                const form = await repository.getForm(fId);
                return form;
            } catch (e) {
                console.error(`getFormUseCase() ${e.message}`);
            }
        } else {
            return new Form('');
        }
    }
});

export default getFormUseCase;