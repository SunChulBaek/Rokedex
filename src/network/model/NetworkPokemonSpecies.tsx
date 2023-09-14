import NetworkName from './NetworkName';
import NetworkNamedAPIResource from './NetworkNamedAPIResource';
import NetworkPokemonSpeciesVariety from './NetworkPokemonSpeciesVariety';

class NetworkPokemonSpecies {
    private id: integer;
    private name: string;
    private names: NetworkName[];
    private evolution_chain: NetworkNamedAPIResource;
    private flavor_text_entries: NetworkFlavorText[];
    private varieties: NetworkPokemonSpeciesVariety[];

    public constructor(
        id: integer,
        name: string,
        names: NetworkName[]
        evolution_chain: NetworkNamedAPIResource,
        flavor_text_entries: NetworkFlavorText[],
        varieties: NetworkPokemonSpeciesVariety[]
    ) {
        this.id = id;
        this.name = name;
        this.names = names;
        this.evolution_chain = evolution_chain;
        this.flavor_text_entries = flavor_text_entries;
        this.varieties = varieties;
    }
}

export default NetworkPokemonSpecies;