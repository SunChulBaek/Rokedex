import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from 'react-native';
import Pokemon from '../model/Pokemon';
import PokemonGridItem from './PokemonGridItem';
import PhotoScreen from '../photo/PhotoScreen';

const HomeScreen = ({navigation}) => {
    const [homeState, setHomeState] = useState({
        state: 'loading',
        pokemons: []
    });

    const getPokemons = async (offset: number) => {
        console.debug(`getPokemons(offset = ${offset})`);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`);
        const result = await response.json();
        const newPokemons = result.results.map((e) => new Pokemon(
            e.url.split('/')[6],
            e.name,
            e.url
        ));
        setHomeState({
            state: 'hasValue',
            pokemons: [
                ...homeState.pokemons,
                ...newPokemons
            ]
        });
    }

    useEffect(() => {
        getPokemons(0);
    }, []);

    switch(homeState.state) {
        case 'loading':
            return (
                <View
                    style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size='large' />
                </View>
            );
        case 'hasValue':
            return (
                <View style={{flex: 1}}>
                    <FlatList
                        data={rowedData(homeState.pokemons, 5)}
                        renderItem={(items) => (
                            <View style={{flexDirection: 'row'}}>
                                {items.item.map((value, index) => (
                                    value != undefined ?
                                    <PokemonGridItem key={value.id} style={{flex: 1}} navigation={navigation} item={value} />
                                    : <View key={index} style={{flex: 1}} />
                                ))}
                            </View>)
                        }
                        onEndReachedThreshold={0.8}
                        onEndReached={() => {
                            console.debug('onEndReached()');
                            getPokemons(homeState.pokemons.length);
                        }}
                    />
                </View>
            );
        case 'hasError':
            return (<Text>Error...</Text>);
        default:
            return (<Text>XXX</Text>);
    }
}

function rowedData(pokemons: Pokemon[], columnCount: number) {
    var ret = new Array();
    const rowCount = (pokemons.length / columnCount) + (pokemons.length % columnCount == 0 ? 0 : 1);
    for (var i = 0; i < rowCount; i++) {
        var row: Pokemon[] = new Array();
        const length = i < rowCount - 1 ? columnCount : pokemons.length - i * columnCount;
        for (var j = 0; j < length; j++) {
            row.push(pokemons[(i * columnCount) + j]);
        }
        ret.push(row);
    }
    return ret;
}

export default HomeScreen;