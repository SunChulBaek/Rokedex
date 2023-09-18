import React, {useEffect, useState} from 'react';
import {
    ScrollView,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';
import MyImage from '../common/MyImage';
import Repository from '../../domain/PokemonRepository';
import Utils from '../../util/Utils.tsx';

const styles = StyleSheet.create({
    item: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

const PokemonDetailScreen = ({navigation, route}) => {
    console.debug(`PokemonDetailScreen(id = ${route.params.id})`);

    const [pokemon, setPokemon] = useState({
        name: route.params.name,
        flavor: ''
    });

    const getSpecies = async (id: integer) => {
        const species = await Repository.getSpecies(route.params.id);
        setPokemon({
            name: species.name,
            flavor: species.flavor
        });
    }

    useEffect(() => {
        getSpecies(route.params.id);
    }, []);

    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
            <View style={styles.item}>
                <MyImage
                    style={{width: 200, aspectRatio: '1/1'}}
                    source={{uri: Utils.getImageUrl(route.params.id)}}
                />
            </View>
            <View style={styles.item}>
                <Text style={{color: 'black'}}>{route.params.id} {pokemon.name}</Text>
            </View>
            <View style={styles.item}>
                <Text style={{color: 'black'}}>{pokemon.flavor}</Text>
            </View>
        </ScrollView>
    );
}

export default PokemonDetailScreen;