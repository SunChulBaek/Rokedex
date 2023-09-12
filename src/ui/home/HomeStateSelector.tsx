import {selectorFamily} from 'recoil';
import getPokemonListSelector from '../../domain/GetPokemonListSelector';
import HomeState from '../model/HomeState';

const homeStateSelector = selectorFamily({
    key: 'getHomeState',
    get: (params) => async ({get}) => {
        console.debug('getHomeStateSelector()');
        const photos = get(getPokemonListSelector({limit: params.limit, offset: params.offset}));
        if (photos != undefined) {
            return new HomeState(false, photos);
        } else {
            return new HomeState(true, []);
        }
    }
});

export default homeStateSelector;