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

    public constructor(
        id: integer,
        name: string,
        height: integer,
        weight: integer,
        sId: integer,
        species: Species,
        tIds: integer[]
    ) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.sId = sId;
        this.species = species;
        this.tIds = tIds;
    }
}

export default PokemonDetail;