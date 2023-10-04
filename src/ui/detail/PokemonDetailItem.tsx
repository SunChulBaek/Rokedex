import {StyleSheet, Text, View} from 'react-native';
import MyImage from '../common/MyImage';
import EvolutionRow from '../common/EvolutionRow';
import Utils from '../../util/Utils.tsx';

const styles = StyleSheet.create({
    item: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    stat: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50
    },
    evolution: {
        width: '100%',
        paddingLeft: 50,
        paddingRight: 50
    }
});

export interface PokemonDetailItem {
    itemContent({navigation}): JSX.Element;
}

export class PokemonDetailImage implements PokemonDetailItem {
    private pId: integer;

    public constructor(pId: integer) {
        this.pId = pId;
    }

    itemContent({navigation}): JSX.Element {
        return (
            <View style={styles.item}>
                <MyImage
                    style={{width: 200, aspectRatio: '1/1'}}
                    source={{uri: Utils.getImageUrl(this.pId)}}
                />
            </View>
        );
    }
}

export class PokemonDetailName implements PokemonDetailItem {
    private pId: integer;
    private name: string;
    private species: Species;
    private form: Form;

    public constructor(
        pId: integer,
        name: string,
        species: Species,
        form: Form
    ) {
        this.pId = pId;
        this.name = name;
        this.species = species;
        this.form = form;
    }

    itemContent({navigation}): JSX.Element {
        return (
            <View style={styles.item}>
                <Text style={{color: 'black', fontSize: (this.form != undefined && this.form.formName != undefined) ? 20 : 30}}>
                    {this.pId} {this.species != undefined ? this.species.name : this.name} {(this.form != undefined && this.form.formName != undefined) ? `(${this.form.formName})`: ''}
                </Text>
            </View>
        );
    }
}

export class PokemonDetailStat implements PokemonDetailItem {
    private weight: number;
    private height: number;
    private types: Type[];

    public constructor(
        weight: number,
        height: number,
        types: Type[]
    ) {
        this.weight = weight;
        this.height = height;
        this.types = types;
    }

    itemContent({navigation}): JSX.Element {
        return (
            <View style={[styles.item, styles.stat]}>
                <Text style={{color: 'black', fontSize: 12}}>
                    몸무게: {this.weight != undefined ? `${(this.weight / 10).toFixed(1)}kg` : ''}
                </Text>
                <Text style={{color: 'black', fontSize: 12}}>
                    키: {this.height != undefined ? `${(this.height / 10).toFixed(1)}m` : ''}
                </Text>
                <Text style={{color: 'black', fontSize: 12}}>
                    타입: {this.types != undefined ? this.types.map((type) => type.name).reduce((acc, cur) => `${acc}, ${cur}`) : ''}
                </Text>
            </View>
        );
    }
}

export class PokemonDetailFlavorText implements PokemonDetailItem {
    private species: Species;

    public constructor(
        species: Species
    ) {
        this.species = species;
    }

    itemContent({navigation}): JSX.Element {
        return (
            <View style={styles.item}>
                <Text style={{color: 'black', fontSize: 16}}>
                    {this.species != undefined ? this.species.flavor.replace('\n', ' ') : ''}
                </Text>
            </View>
        );
    }
}

export class PokemonDetailEvolution implements PokemonDetailItem {
    private pId: integer;
    private evolutionChain: EvolutionChain;

    public constructor(
        pId: integer,
        evolutionChain: EvolutionChain
    ) {
        this.pId = pId;
        this.evolutionChain = evolutionChain;
    }

    itemContent({navigation}): JSX.Element {
        return (
            <View style={{flexDirection: 'column'}}>
            {this.evolutionChain != undefined ? this.evolutionChain.pairs.map((pair) => (
                <EvolutionRow key={`${pair.from.id}-${pair.to.id}`} navigation={navigation} pId={this.pId} pair={pair} />
            )) : <View />}
            </View>
        );
    }
}