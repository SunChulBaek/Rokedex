import NetworkName from './NetworkName';

class NetworkPokemonForm {
    private form_names: NetworkName[];

    public constructor(
        form_names: NetworkName[]
    ) {
        this.form_names = form_names;
    }
}

export default NetworkPokemonForm;