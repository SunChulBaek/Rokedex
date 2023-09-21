import NetworkNamedAPIResource from './NetworkNamedAPIResource';

class NetworkPokemonAbility {
    private is_hidden: boolean;
    private slot: integer;
    private ability: NetworkNamedAPIResource;

    constructor(
        is_hidden: boolean,
        slot: integer,
        ability: NetworkNamedAPIResource
    ) {
        this.is_hidden = is_hidden;
        this.slot = slot;
        this.ability = ability;
    }
}