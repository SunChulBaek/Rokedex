import {selector} from 'recoil';
import getPhotosSelector from './GetPhotosSelector';
import Tab1State from '../model/Tab1State';

const getTab1StateSelector = selector({
    key: 'getHomeState',
    get: async ({get}) => {
        console.debug('getHomeStateSelector()');
        const photos = get(getPhotosSelector);
        if (photos != undefined) {
            return new Tab1State(false, photos);
        } else {
            return new Tab1State(true, []);
        }
    }
});

export default getTab1StateSelector;