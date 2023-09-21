import Utils from '../../util/Utils';

class PokemonDetail {
    private id: integer;
    private name: string;
    private height: integer;
    private weight: integer;
    // species
    private sId: integer;
    private species: Species;
    // type
    private tIds: integer[];
    private types: Type[];

    public constructor(
        id: integer,
        name: string,
        height: integer,
        weight: integer,
        sId: integer,
        species: Species,
        tIds: integer[],
        types: Type[]
    ) {
        console.debug(`PokemonDetail.constructor(tIds = ${tIds})`);
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.sId = sId;
        this.species = species;
        this.tIds = tIds;
        this.types = types;
    }
}

export default PokemonDetail;