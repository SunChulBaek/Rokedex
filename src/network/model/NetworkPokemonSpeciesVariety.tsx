import NetworkNamedAPIResource from './NetworkNamedAPIResource';

class NetworkPokemonSpeciesVariety {
    private is_default: boolean;
    private pokemon: NetworkNamedAPIResource;

    public constructor(
        is_default: boolean,
        pokemon: NetworkNamedAPIResource
    ) {
        this.is_default = is_default;
        this.pokemon = pokemon;
    }
}

export default NetworkPokemonSpeciesVariety;