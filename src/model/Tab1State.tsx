import Photo from '../model/Photo';

class Tab1State {
    isLoading: boolean;
    photos: Photo[]

    constructor(isLoading: boolean, photos: Photo[]) {
        this.isLoading = isLoading;
        this.photos = photos;
    }
}

export default Tab1State;