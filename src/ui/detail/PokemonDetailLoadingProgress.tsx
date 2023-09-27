import {StyleSheet, Text, View} from 'react-native';
import PokemonDetail from './../model/PokemonDetail';

type PokemonLoadingProgressItemType = {
    completed: boolean,
    text: string
}

const styles = StyleSheet.create({
    loading: {
        flex:1,
        fontSize: 8,
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 4,
        color: 'black'
    },
    complete: {
        flex:1,
        fontSize: 8,
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 4,
        color: 'white'
    }
});

const PokemonLoadingProgressItem = (props: PokemonLoadingProgressItemType) => {
    return (
        <Text style={props.completed ? styles.complete : styles.loading}>{props.text}</Text>
    )
};

type PokemonDetailLoadingProgressType = {
    pokemon: PokemonDetail
};

const PokemonDetailLoadingProgress = (props: PokemonDetailLoadingProgressType) => {
    return (
        <View style={{height: 10, flexDirection: 'row'}}>
            <PokemonLoadingProgressItem completed={props.pokemon.height != undefined} text={'pokemon'} />
            <PokemonLoadingProgressItem completed={props.pokemon.sId != undefined} text={'species'} />
            <PokemonLoadingProgressItem completed={props.pokemon.fId != undefined} text={'form'} />
            <PokemonLoadingProgressItem completed={props.pokemon.tIds != undefined} text={'type'} />
            <PokemonLoadingProgressItem completed={props.pokemon.evolutionChain != undefined} text={'evolution'} />
        </View>
    );
}

export default PokemonDetailLoadingProgress;