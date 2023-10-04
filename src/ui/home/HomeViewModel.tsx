import PokemonRepository from '../../repository/PokemonRepository';
import NetworkPokemonRepository from '../../repository/NetworkPokemonRepository';

class HomeViewModel {
    private items: Pokemon[] = [];
    private setItems: (items: Pokemon[]) => any;

    public constructor(setItems: (items: Pokemon[]) => any) {
        this.setItems = setItems;
    }

    public async init(offset: integer) {
        const repository: PokemonRepository = NetworkPokemonRepository.getInstance();
        const newPokemons = await repository.getPokemonList(offset);
        this.items = [
            ...this.items,
            ...newPokemons
        ];
        this.setItems(this.items);
    }
}

export default HomeViewModel;