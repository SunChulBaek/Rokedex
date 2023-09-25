class Species {
    private name: string;
    private flavor: string;
    private ecId: integer;

    public constructor(
        name: string,
        flavor: string,
        ecId: integer
    ) {
        this.name = name;
        this.flavor = flavor;
        this.ecId = ecId;
    }
}

export default Species;