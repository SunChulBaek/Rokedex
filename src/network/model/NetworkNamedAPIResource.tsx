import Pokemon from '../../model/Pokemon';

class NetworkNamedAPIResource {
    private name: string;
    private url: String

    public constructor(
        name: string,
        url: string
    ) {
        this.name = name;
        this.url = url;
    }
}

export default Pokemon;