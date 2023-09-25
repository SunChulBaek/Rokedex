import NetworkNamedAPIResource from './NetworkNamedAPIResource';
import NetworkEvolutionDetail from './NetworkEvolutionDetail';

class NetworkChainLink {
    private species: NetworkNamedAPIResource;
    private evolution_details: NetworkEvolutionDetail[];
    private evolves_to: NetworkChainLink[];

    public constructor(
        species: NetworkNamedAPIResource,
        evolution_details: NetworkEvolutionDetail[],
        evolves_to: NetworkChainLink[],
    ) {
        this.species = species;
        this.evolution_details = evolution_details;
        this.evolves_to = evolves_to;
    }
}

export default NetworkChainLink;