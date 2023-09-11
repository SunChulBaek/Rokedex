import Pokemon from '../model/Pokemon';

class HomeState {
    isLoading: boolean;
    pokemons: Pokemon[]

    constructor(isLoading: boolean, pokemons: Pokemon[]) {
        this.isLoading = isLoading;
        this.pokemons = pokemons;
    }
}

export default HomeState;