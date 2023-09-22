import React from 'react';
import {View} from 'react-native';
import Pokemon from '../model/Pokemon';
import PokemonGridItem from './PokemonGridItem';

const PokemonGridRow = ({navigation, items}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            {items.item.map((value, index) => (
                value != undefined ?
                <PokemonGridItem key={value.id} style={{flex: 1}} navigation={navigation} item={value} />
                : <View key={index} style={{flex: 1}} />
            ))}
        </View>
    );
}

const equalComparison = (prevProps, nextProps) => {
    const prevItems = prevProps.items.item;
    const nextItems = nextProps.items.item;

    if (prevItems.length != nextItems.length) {
        return false;
    }

    for (var i = 0; i < prevItems.length; i++) {
        if (prevItems[i].id != nextItems[i].id) {
            return false;
        }
    }
    return true;
}

export default React.memo(PokemonGridRow, equalComparison);