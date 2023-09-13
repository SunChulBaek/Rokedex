import {selector} from 'recoil';
import getPokemonListSelector from '../../domain/GetPokemonListSelector';
import HomeState from '../model/HomeState';
import homeStateParams from './HomeStateParams';

const homeStateSelector = selector({
    key: 'getHomeState',
    get: async ({get}) => {
        const params = get(homeStateParams);
        console.debug(`getHomeStateSelector(limit = ${params.limit}, offset = ${params.offset})`);
        const photos = get(getPokemonListSelector({limit: params.limit, offset: params.offset}));
        if (photos != undefined) {
            return new HomeState(false, photos);
        } else {
            return new HomeState(true, []);
        }
    }
});

export default homeStateSelector;