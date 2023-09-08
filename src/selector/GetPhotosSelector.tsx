import {selector} from 'recoil';

const getPhotosSelector = selector({
    key: 'getPhotos',
    get: async ({get}) => {
        console.debug('getPhotosSelector()');
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photos = await response.json();
        return photos;
    }
});

export default getPhotosSelector;