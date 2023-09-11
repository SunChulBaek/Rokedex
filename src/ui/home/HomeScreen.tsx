import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from 'react-native';
import {selector, useRecoilValueLoadable} from 'recoil';
import HomeState from '../../model/HomeState';
import getHomeStateSelector from '../../selector/GetHomeStateSelector';
import PokemonItem from './PokemonItem';
import PhotoScreen from '../photo/PhotoScreen';

const HomeScreen = ({navigation}) => {
    const homeState = useRecoilValueLoadable(getHomeStateSelector({limit: 50, offset: 0}));
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
                        data={homeState.contents.pokemons}
                        renderItem={({item}) =>
                            <PokemonItem navigation={navigation} item={item} />
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

export default HomeScreen;