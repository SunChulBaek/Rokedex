import NetworkNamedAPIResource from './NetworkNamedAPIResource';

class NetworkPokemonType {
    private slot: integer;
    private type: NetworkNamedAPIResource

    constructor(
        slot: integer,
        type: NetworkNamedAPIResource
    ) {
        this.slot = slot;
        this.type = type;
    }
}

export default NetworkPokemonType;