import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {useRecoilState, useRecoilValueLoadable} from 'recoil';
import MyImage from '../common/MyImage';
import Utils from '../../util/Utils.tsx';
import pokemonDetailParams from './PokemonDetailParams';
import pokemonDetailViewModel from './PokemonDetailViewModel';

const styles = StyleSheet.create({
    item: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

const PokemonDetailScreen = ({navigation, route}) => {
    const [params, setParams] = useRecoilState(pokemonDetailParams);
    const result = useRecoilValueLoadable(pokemonDetailViewModel);
    console.debug(`PokemonDetailScreen(${result.state}) id = ${route.params.id}`);

    useEffect(() => {
        setParams(route.params.id);
    }, []);

    switch(result.state) {
        case 'loading':
            {/* 기본이름 보여주고, flavor 영역에 프로그레스 돌림 */}
            return (
                <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                    <View style={styles.item}>
                        <MyImage
                            style={{width: 200, aspectRatio: '1/1'}}
                            source={{uri: Utils.getImageUrl(route.params.id)}}
                        />
                    </View>
                    <View style={styles.item}>
                        <Text style={{color: 'black'}}>{route.params.id} {route.params.name}</Text>
                    </View>
                    <View
                        style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                        <ActivityIndicator size='large' />
                    </View>
                </ScrollView>
            );
        case 'hasValue':
            return (
                <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                    <View style={styles.item}>
                        <MyImage
                            style={{width: 200, aspectRatio: '1/1'}}
                            source={{uri: Utils.getImageUrl(route.params.id)}}
                        />
                    </View>
                    <View style={styles.item}>
                        <Text style={{color: 'black'}}>{route.params.id} {result.contents.name}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{color: 'black'}}>{result.contents.flavor}</Text>
                    </View>
                </ScrollView>
            );
        case 'hasError':
            return (<Text>Error...</Text>);
        default:
            return (<Text>XXX</Text>);
    }
}

export default PokemonDetailScreen;