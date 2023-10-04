import React, {memo, useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    ScrollView,
    Text,
    View
} from 'react-native';
import HomeShortcuts from './HomeShortcuts';
import HomeViewModel from './HomeViewModel';
import FlatGrid from '../common/FlatGrid';
import PokemonGridItem from './PokemonGridItem';

const HomeScreen = ({navigation}) => {
    const [items, setItems] = useState([]);
    const [viewModel, setViewModel] = useState(new HomeViewModel(setItems));

    useEffect(() => {
        viewModel.init(0);
    }, []);

    return (
        <View style={{flex: 1}}>
            <HomeShortcuts
                navigation={navigation}
                pIds={[778, 10044, 10196, 10157, 936, 135, 269, 792]}
                onClick={(pId) => {navigation.navigate('PokemonDetail', {id: pId})}}
            />
            <FlatGrid
                data={items}
                rowCount={5}
                renderItem={(item) =>
                    <PokemonGridItem key={item.id} style={{flex: 1}} navigation={navigation} item={item} />
                }
                onEndReachedThreshold={0.4}
                onEndReached={() => {
                    console.debug('onEndReached()');
                    viewModel.init(items.length);
                }}
            />
        </View>
    );
}

export default HomeScreen;