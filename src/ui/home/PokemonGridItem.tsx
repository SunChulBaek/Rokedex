import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import MyImage from '../common/MyImage';
import Utils from '../../util/Utils.tsx';

const styles = StyleSheet.create({
    labelBg: {
        position: 'absolute',
        right: 5,
        bottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        borderRadius: 5,
        backgroundColor: '#282c34'
    },
    labelText: {
        fontSize: 8,
        color: '#61dafb'
    }
});

const PokemonGridItem = ({navigation, item}) => {
    return (
        <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
                navigation.navigate('PokemonDetail', item);
            }}
        >
            <MyImage
                style={{width: '100%', aspectRatio: '1/1'}}
                source={{uri: Utils.getImageUrl(item.id)}} />
            <View
                style={styles.labelBg}>
                <Text style={styles.labelText}>{item.id}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default PokemonGridItem;