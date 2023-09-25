import EvolutionPair from './EvolutionPair';

class EvolutionChain {
    private pairs: EvolutionPair[];

    public constructor(
        pairs: EvolutionPair[]
    ) {
        this.pairs = pairs;
    }
}

export default EvolutionChain;