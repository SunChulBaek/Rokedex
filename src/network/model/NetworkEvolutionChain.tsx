import NetworkChainLink from './NetworkChainLink';

class NetworkEvolutionChain {
    private id: integer;
    private chain: NetworkChainLink;

    public constructor(
        id: integer,
        chain: NetworkChainLink
    ) {
        this.id = id;
        this.chain = chain;
    }
}

export default NetworkEvolutionChain;