import NetworkName from './NetworkName';

class NetworkType {
    private id: integer;
    private name: string;
    private names: NetworkName[];

    public constructor(
        id: integer,
        name: string,
        names: NetworkName[]
    ) {
        this.id = id;
        this.name = name;
        this.names = names;
    }
}

export default NetworkType;