import NetworkNamedAPIResource from './NetworkNamedAPIResource';

class NetworkName {
    private name: string;
    private language: NetworkNamedAPIResource;

    public constructor(
        name: string,
        language: NetworkNamedAPIResource
    ) {
        this.name = name;
        this.language = language;
    }
}

export default NetworkName;