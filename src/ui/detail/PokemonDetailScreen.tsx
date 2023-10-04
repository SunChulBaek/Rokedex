import React, {useEffect, useState} from 'react';
import {FlatList,View} from 'react-native';
import PokemonDetailViewModel from './PokemonDetailViewModel';
import PokemonDetailLoadingProgress from './PokemonDetailLoadingProgress';

const PokemonDetailScreen = ({navigation, route}) => {
    // 상세 정보 표시
    const [items, setItems] = useState([]);
    // 프로그레스 표시
    const [pokemon, setPokemon] = useState(undefined);

    const viewModel = new PokemonDetailViewModel(
        route.params.id,
        route.params.name,
        setPokemon,
        setItems
    );

    useEffect(() => {
        viewModel.init();
    }, []);

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <FlatList
                style={{flex: 1}}
                data={items}
                renderItem={({item, index, separators}) =>
                    item.itemContent({navigation: navigation}
                )}
            />
            <PokemonDetailLoadingProgress pokemon={pokemon} />
        </View>
    );
}

export default PokemonDetailScreen;