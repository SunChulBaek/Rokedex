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

    number getId() {
        return 0;
    }
}

export default Pokemon;