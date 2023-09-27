import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import PokemonRepository from '../../repository/PokemonRepository';
import NetworkPokemonRepository from '../../repository/NetworkPokemonRepository';
import PokemonDetail from './../model/PokemonDetail';
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
    },
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

const PokemonProgressItem = ({completed, text}) => {
    return (
        <Text style={completed ? styles.complete : styles.loading}>{text}</Text>
    )
};

const PokemonProgress = ({pokemon}) => {
    return (
        <View style={{height: 10, flexDirection: 'row'}}>
            <PokemonProgressItem completed={pokemon.height != undefined} text={'pokemon'} />
            <PokemonProgressItem completed={pokemon.sId != undefined} text={'species'} />
            <PokemonProgressItem completed={pokemon.fId != undefined} text={'form'} />
            <PokemonProgressItem completed={pokemon.tIds != undefined} text={'type'} />
            <PokemonProgressItem completed={pokemon.evolutionChain != undefined} text={'evolution'} />
        </View>
    );
}

const PokemonDetailScreen = ({navigation, route}) => {
    const [pokemon, setPokemon] = useState(new PokemonDetail(
        route.params.id,
        route.params.name
    ));

    const getPokemonDetail = async () => {
        const repository: PokemonRepository = NetworkPokemonRepository.getInstance();
        // 상세
        const pokemonDetail = await repository.getPokemonDetail(route.params.id);
        setPokemon(new PokemonDetail(
            route.params.id,
            route.params.name,
            pokemonDetail.height,
            pokemonDetail.weight,
        ));
        // species
        const species = await repository.getSpecies(pokemonDetail.sId);
        setPokemon(new PokemonDetail(
            route.params.id,
            route.params.name,
            pokemonDetail.height,
            pokemonDetail.weight,
            pokemonDetail.sId,
            species,
        ));
        // form
        const form: Form = await repository.getForm(pokemonDetail.fId);
        setPokemon(new PokemonDetail(
            route.params.id,
            route.params.name,
            pokemonDetail.height,
            pokemonDetail.weight,
            pokemonDetail.sId,
            species,
            pokemonDetail.fId,
            form
        ));
        // type
        const types = await Promise.all(pokemonDetail.tIds.map(async (tId) => {
            const type = await repository.getType(tId);
            console.debug(`${tId} type = ${type.name}`);
            return type;
        }));
        setPokemon(new PokemonDetail(
            route.params.id,
            route.params.name,
            pokemonDetail.height,
            pokemonDetail.weight,
            pokemonDetail.sId,
            species,
            pokemonDetail.fId,
            form,
            pokemonDetail.tIds,
            types
        ));
        // evolution chain
        const evolutionChain = await repository.getEvolutionChain(species.ecId);
        setPokemon(new PokemonDetail(
            route.params.id,
            route.params.name,
            pokemonDetail.height,
            pokemonDetail.weight,
            pokemonDetail.sId,
            species,
            pokemonDetail.fId,
            form,
            pokemonDetail.tIds,
            types,
            evolutionChain
        ));
    }

    useEffect(() => {
        getPokemonDetail();
    }, []);

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <ScrollView style={{flex: 1}}>
                <View style={styles.item}>
                    <MyImage
                        style={{width: 200, aspectRatio: '1/1'}}
                        source={{uri: Utils.getImageUrl(route.params.id)}}
                    />
                </View>
                <View style={styles.item}>
                    <Text style={{color: 'black', fontSize: (pokemon.form != undefined && pokemon.form.formName != undefined) ? 20 : 30}}>
                        {route.params.id} {pokemon.species != undefined ? pokemon.species.name : route.params.name} {(pokemon.form != undefined && pokemon.form.formName != undefined) ? `(${pokemon.form.formName})`: ''}
                    </Text>
                </View>
                <View style={[styles.item, styles.stat]}>
                    <Text style={{color: 'black', fontSize: 12}}>
                        몸무게: {(pokemon.weight / 10).toFixed(1)}kg
                    </Text>
                    <Text style={{color: 'black', fontSize: 12}}>
                        키: {(pokemon.height / 10).toFixed(1)}m
                    </Text>
                    <Text style={{color: 'black', fontSize: 12}}>
                        타입: {pokemon.types != undefined ? pokemon.types.map((type) => type.name).reduce((acc, cur) => `${acc}, ${cur}`) : ''}
                    </Text>
                </View>
                <View style={styles.item}>
                    <Text style={{color: 'black', fontSize: 16}}>
                        {pokemon.species != undefined ? pokemon.species.flavor.replace('\n', ' ') : ''}
                    </Text>
                </View>
                {pokemon.evolutionChain != undefined ? pokemon.evolutionChain.pairs.map((pair) => (
                    <EvolutionRow key={`${pair.from.id}-${pair.to.id}`} navigation={navigation} pId={route.params.id} pair={pair} />
                )) : <View />}
            </ScrollView>
            <PokemonProgress pokemon={pokemon} />
        </View>
    );
}

export default PokemonDetailScreen;