import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from 'react-native';
import {selector, useRecoilValueLoadable} from 'recoil';
import HomeState from '../model/HomeState';
import homeStateSelector from './HomeStateSelector';
import PokemonGridItem from './PokemonGridItem';
import PhotoScreen from '../photo/PhotoScreen';

const HomeScreen = ({navigation}) => {
    const homeState = useRecoilValueLoadable(homeStateSelector({limit: 50, offset: 0}));
    console.debug(`HomeScreen(${homeState.state})`);

    if (homeState == null || homeState == undefined) {
        return (<Text>Init...</Text>);
    }

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
                        data={rowedData(homeState.contents.pokemons, 5)}
                        renderItem={(items) => (
                            <View style={{flexDirection: 'row'}}>
                                {items.item.map((value, index) => (
                                    value != undefined ?
                                    <PokemonGridItem key={value.id} style={{flex: 1}} navigation={navigation} item={value} />
                                    : <View key={index} style={{flex: 1}} />
                                ))}
                            </View>)
                        }
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