import PokemonRepository from '../../repository/PokemonRepository';
import NetworkPokemonRepository from '../../repository/NetworkPokemonRepository';
import HomeState from './HomeState';

class HomeViewModel {
    private items: Pokemon[] = [];
    private setHomeState: (state: HomeState) => any;

    public constructor(setHomeState: (state: HomeState) => any) {
        this.setHomeState = setHomeState;
    }

    public async init(offset: integer) {
        const repository: PokemonRepository = NetworkPokemonRepository.getInstance();
        const newPokemons = await repository.getPokemonList(offset);
        this.items = [
            ...this.items,
            ...newPokemons
        ];
        this.setHomeState(new HomeState('hasValue', this.items));
    }
}

export default HomeViewModel;