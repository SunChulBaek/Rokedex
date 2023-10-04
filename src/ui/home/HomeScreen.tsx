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
import HomeState from './HomeState';
import FlatGrid from '../common/FlatGrid';
import PokemonGridItem from './PokemonGridItem';

const HomeScreen = ({navigation}) => {
    const [homeState, setHomeState] = useState(new HomeState('loading', []));
    const [viewModel, setViewModel] = useState(new HomeViewModel(setHomeState));

    useEffect(() => {
        viewModel.init(0);
    }, []);

    switch (homeState.state) {
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
                    <HomeShortcuts
                        navigation={navigation}
                        pIds={[778, 10044, 10196, 10157, 936, 135, 269, 792]}
                        onClick={(pId) => {navigation.navigate('PokemonDetail', {id: pId})}}
                    />
                    <FlatGrid
                        data={homeState.items}
                        rowCount={5}
                        renderItem={(item) =>
                            <PokemonGridItem key={item.id} style={{flex: 1}} navigation={navigation} item={item} />
                        }
                        onEndReachedThreshold={0.4}
                        onEndReached={() => {
                            console.debug('onEndReached()');
                            viewModel.init(homeState.items.length);
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

export default HomeScreen;