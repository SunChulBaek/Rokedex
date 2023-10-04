import Pokemon from '../model/Pokemon';

class HomeState {
    state: string;
    items: Pokemon[];

    constructor(state: string, items: Pokemon[]) {
        this.state = state;
        this.items = items;
    }
}

export default HomeState;