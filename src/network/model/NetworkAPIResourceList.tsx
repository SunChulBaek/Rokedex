import NetworkNamedAPIResource from './NetworkNamedAPIResource';

class NetworkAPIResourceList {
    private count: integer;
    private next: string;
    private previous: string;
    private result: NetworkNamedAPIResource[];

    public constructor(
        count: integer,
        next: string,
        previous: string,
        result: NetworkNamedAPIResource[]
    ) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.result = result;
    }
}

export default NetworkAPIResourceList;