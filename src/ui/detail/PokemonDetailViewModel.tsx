import PokemonRepository from '../../repository/PokemonRepository';
import NetworkPokemonRepository from '../../repository/NetworkPokemonRepository';
import PokemonDetail from './../model/PokemonDetail';
import {
    PokemonDetailItem,
    PokemonDetailImage,
    PokemonDetailName,
    PokemonDetailStat,
    PokemonDetailFlavorText,
    PokemonDetailEvolution
} from './PokemonDetailItem';

{/* TODO : 엄밀하게는 ViewModel이라고 할 수 없는 친구인데, ts에서 stream을 사용 할 수 있는 방법을 찾아야겠다. */}
class PokemonDetailViewModel {
    private pId: integer;
    private name: string;
    private setPokemon: (pokemon: PokemonDetail) => any;
    private setItems: (items: PokemonDetailItem[]) => any;

    public constructor(
        pId: integer,
        name: string,
        setPokemon: (pokemon: PokemonDetail) => any,
        setItems: (items: PokemonDetailItem[]) => any
    ) {
        this.pId = pId;
        this.name = name;
        this.setPokemon = setPokemon;
        this.setItems = setItems;
    }

    public async init() {
        const repository: PokemonRepository = NetworkPokemonRepository.getInstance();
        var pokemonDetail: PokemonDetail;
        var species: Species;
        var form: Form;
        var types: Types[];
        var evolutionChain: EvolutionChain;

        // api 호출 전
        this.update({pokemonDetail: new PokemonDetail(this.pId, this.name)});

        // 상세
        pokemonDetail = await repository.getPokemonDetail(this.pId);
        this.update({pokemonDetail: pokemonDetail});

        // species
        species = await repository.getSpecies(pokemonDetail.sId);
        this.update({pokemonDetail: pokemonDetail, species: species});

        // form
        form = await repository.getForm(pokemonDetail.fId);
        this.update({pokemonDetail: pokemonDetail, species: species, form: form});

        // type
        types = await Promise.all(pokemonDetail.tIds.map(async (tId) =>
            await repository.getType(tId)
        ));
        this.update({pokemonDetail: pokemonDetail, species: species, form: form, types: types});

        // evolution chain
        evolutionChain = await repository.getEvolutionChain(species.ecId);
        this.update({pokemonDetail: pokemonDetail, species: species, form: form, types: types, evolutionChain: evolutionChain});
    }

    private update({pokemonDetail, species, form, types, evolutionChain}) {
        const pokemon = new PokemonDetail(
            this.pId,
            this.name,
            pokemonDetail.height,
            pokemonDetail.weight,
            pokemonDetail.sId,
            species,
            pokemonDetail.fId,
            form,
            pokemonDetail.tIds,
            types,
            evolutionChain
        );
        this.setPokemon(pokemon);
        this.setItems(this.pokemonToItems(pokemon));
    }

    private pokemonToItems(pokemon: PokemonDetail): PokemonDetailItem[] {
        var items: PokemonDetailItem[] = new Array();
        items.push(new PokemonDetailImage(pokemon.id));
        items.push(new PokemonDetailName(pokemon.id, pokemon.name, pokemon.species, pokemon.form));
        items.push(new PokemonDetailStat(pokemon.weight, pokemon.height, pokemon.types));
        items.push(new PokemonDetailFlavorText(pokemon.species));
        items.push(new PokemonDetailEvolution(pokemon.id, pokemon.evolutionChain));
        return items;
    }
}

export default PokemonDetailViewModel;