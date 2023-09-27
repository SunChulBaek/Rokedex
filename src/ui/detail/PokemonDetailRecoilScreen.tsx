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
import EvolutionRow from '../common/EvolutionRow';
import Utils from '../../util/Utils.tsx';
import pokemonDetailParams from './PokemonDetailParams';
import pokemonDetailViewModel from './PokemonDetailViewModel';

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

const PokemonDetailRecoilScreen = ({navigation, route}) => {
    const [params, setParams] = useRecoilState(pokemonDetailParams);
    const result = useRecoilValueLoadable(pokemonDetailViewModel(route.params.id));
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
                        <Text style={{color: 'black', fontSize: result.contents.form.formName != undefined ? 20 : 30}}>
                            {route.params.id} {result.contents.species.name} {result.contents.form.formName != undefined ? `(${result.contents.form.formName})`: ''}
                        </Text>
                    </View>
                    <View style={[styles.item, styles.stat]}>
                        <Text style={{color: 'black', fontSize: 12}}>
                            몸무게: {(result.contents.weight / 10).toFixed(1)}kg
                        </Text>
                        <Text style={{color: 'black', fontSize: 12}}>
                            키: {(result.contents.height / 10).toFixed(1)}m
                        </Text>
                        <Text style={{color: 'black', fontSize: 12}}>
                            타입: {result.contents.types.map((type) => type.name).reduce((acc, cur) => `${acc}, ${cur}`)}
                        </Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={{color: 'black', fontSize: 16}}>
                            {result.contents.species.flavor.replace('\n', ' ')}
                        </Text>
                    </View>
                    {result.contents.evolutionChain.pairs.map((pair) => (
                        <EvolutionRow key={`${pair.from.id}-${pair.to.id}`} navigation={navigation} pId={route.params.id} pair={pair} />
                    ))}
                </ScrollView>
            );
        case 'hasError':
            return (<Text>Error...</Text>);
        default:
            return (<Text>XXX</Text>);
    }
}

export default PokemonDetailRecoilScreen;