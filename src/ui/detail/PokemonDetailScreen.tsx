import React, {useEffect, useState} from 'react';
import {FlatList,View} from 'react-native';
import PokemonDetailViewModel from './PokemonDetailViewModel';
import PokemonDetailLoadingProgress from './PokemonDetailLoadingProgress';
import PokemonDetailBg from './PokemonDetailBg';
import CancelButton from '../common/CancelButton';

const PokemonDetailScreen = ({navigation, route}) => {
    // 상세 정보 표시
    const [items, setItems] = useState([]);
    // 프로그레스 표시
    const [pokemon, setPokemon] = useState(undefined);

    const [viewModel, setViewModel] = useState(new PokemonDetailViewModel(
        route.params.id,
        route.params.name,
        setPokemon,
        setItems
    ));

    useEffect(() => {
        viewModel.init();
    }, []);

    return (
        <View style={{flex: 1}}>
            <PokemonDetailBg style={{position: 'absolute', width: '100%', height: '100%'}} />
            <View style={{position: 'absolute', width: '100%', height: '100%'}}>
                <FlatList
                    style={{flex: 1}}
                    data={items}
                    renderItem={({item, index, separators}) =>
                        item.itemContent({navigation: navigation}
                    )}
                />
                <PokemonDetailLoadingProgress pokemon={pokemon} />
                <CancelButton
                    style={{position: 'absolute', alignSelf: 'center', bottom: 15}}
                    onClick={() => {
                        navigation.goBack();
                    }}
                />
            </View>
        </View>
    );
}

export default PokemonDetailScreen;