class Pokemon {
    private id: number;
    private name: string;
    private url: String

    public constructor(
        id: number,
        name: string,
        url: string
    ) {
        this.id = id;
        this.name = name;
        this.url = url;
    }
}

export default Pokemon;