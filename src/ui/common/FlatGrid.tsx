import {FlatList, View} from 'react-native';
import PokemonGridItem from '../home/PokemonGridItem';

const FlatGrid = ({data, rowCount, renderItem, onEndReachedThreshold, onEndReached}) => {
    return (
        <FlatList
            data={rowedData(data, rowCount)}
            renderItem={({item, index, separators}) => {
                return (<FlatRow items={item} renderItem={renderItem}/>);
            }}
            onEndReachedThreshold={onEndReachedThreshold}
            onEndReached={onEndReached}
        />
    );
}

const FlatRow = ({items, renderItem}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            {items.map((item) => (
                item != undefined ? renderItem(item) : <View key={item.id} style={{flex: 1}} />
            ))}
        </View>
    );
}

function rowedData(pokemons: Pokemon[], columnCount: number) {
    var ret = new Array();
    const rowCount = (pokemons.length / columnCount) + (pokemons.length % columnCount == 0 ? 0 : 1);
    for (var i = 0; i < rowCount; i++) {
        var row: Pokemon[] = new Array();
        const length = i < rowCount - 1 ? columnCount : pokemons.length - i * columnCount;
        for (var j = 0; j < length; j++) {
            row.push(pokemons[(i * columnCount) + j]);
        }
        ret.push(row);
    }
    return ret;
}

export default FlatGrid;