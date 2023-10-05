import React, {useEffect, useState} from 'react';
import {FlatList,View} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import PokemonDetailViewModel from './PokemonDetailViewModel';
import PokemonDetailLoadingProgress from './PokemonDetailLoadingProgress';
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
        <LinearGradient style={{flex: 1}} colors={['#61dafb33', '#61dafbaa']}>
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
        </LinearGradient>
    );
}

export default PokemonDetailScreen;