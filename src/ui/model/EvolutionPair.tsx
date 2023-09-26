import EvolutionItem from './EvolutionItem';

class EvolutionPair {
    private from: EvolutionItem;
    private to: EvolutionItem;

    public constructor(
        from: EvolutionItem,
        to: EvolutionItem
    ) {
        this.from = from;
        this.to = to;
    }
}

export default EvolutionPair;