import NetworkNamedApiResource from './NetworkNamedApiResource';
import NetworkPokemonAbility from './NetworkPokemonAbility';
import NetworkPokemonType from './NetworkPokemonType';

class NetworkPokemon {
    private id: integer;
    private name: string;
    private height: integer;
    private weight: integer;
    private abilities: NetworkPokemonAbility[];
    private forms: NetworkNamedApiResource[];
    private species: NetworkNamedApiResource;
    private types: NetworkPokemonType[];

    constructor(
        id: integer,
        name: string,
        height: integer,
        weight: integer,
        abilities: NetworkPokemonAbility[],
        forms: NetworkNamedApiResource[],
        species: NetworkNamedApiResource,
        types: NetworkPokemonType[]
    ) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.abilities = abilities;
        this.forms = forms;
        this.species = species;
        this.type = types;
    }
}