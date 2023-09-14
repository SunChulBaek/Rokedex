import NetworkNamedAPIResource from './NetworkNamedAPIResource';

class NetworkFlavorText {
    private flavor_text: string;
    private language: NetworkNamedAPIResource;
    private version: NetworkNamedAPIResource;

    public constructor(
        flavor_text: string,
        language: NetworkNamedAPIResource,
        version: NetworkNamedAPIResource
    ) {
        this.flavor_text = flavor_text;
        this.language = language;
        this.version = version;
    }
}

export default NetworkFlavorText;