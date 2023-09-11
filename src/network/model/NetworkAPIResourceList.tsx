import NetworkNamedAPIResource from './NetworkNamedAPIResource';

class NetworkAPIResourceList(
    private count: integer;
    private next: string;
    private previous: string;
    private result: NetworkNamedAPIResource[];
)

export default NetworkAPIResourceList;