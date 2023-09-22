import React, {memo, useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from 'react-native';
import {useRecoilState, useRecoilValueLoadable} from 'recoil';
import Pokemon from '../model/Pokemon';
import PokemonGridRow from './PokemonGridRow';
import Utils from '../../util/Utils.tsx';
import HomeState from './HomeState';
import HomeParams from './HomeParams';
import homeViewModel from './HomeViewModel';

var items = [];

const HomeScreen = ({navigation}) => {
    const [home, setHome] = useRecoilState(HomeState);
    const [params, setParams] = useRecoilState(HomeParams);
    const result = useRecoilValueLoadable(homeViewModel(params));

    console.debug(`HomeScreen(${result.state}) ${result.contents.length}`);

    if (result.state == 'hasValue') {
        items = result.contents; // state가 loading일 때는 contents가 undefined라 저장해둠
    }

    switch (result.state) {
        case 'loading':
//             return (
//                 <View
//                     style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
//                     <ActivityIndicator size='large' />
//                 </View>
//             );
        case 'hasValue':
            return (
                <View style={{flex: 1}}>
                    <FlatList
                        data={rowedData(items, 5)}
                        renderItem={(items) => (
                            <PokemonGridRow navigation={navigation} items={items} />
                        )}
                        onEndReachedThreshold={0.4}
                        onEndReached={() => {
                            console.debug('onEndReached()');
                            setParams(items.length);
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