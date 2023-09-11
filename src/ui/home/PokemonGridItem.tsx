import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import MyImage from '../common/MyImage';
import getImageUrl from '../../util/Util.tsx';

const styles = StyleSheet.create({
    labelBg: {
        position: 'absolute',
        right: 5,
        bottom: 5,
        paddingLeft: 2,
        paddingRight: 2,
        borderRadius: 5,
        backgroundColor: 'blue'
    },
    labelText: {
        fontSize: 8,
        color: 'white'
    }
});

const PokemonGridItem = ({navigation, item}) => {
    return (
        <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
                navigation.navigate('Photo', {
                    url: item.url,
                    title: item.title
                });
            }}
        >
            <MyImage
                style={{width: '100%', aspectRatio: '1/1'}}
                source={{uri: getImageUrl(item.url.split("/")[6])}} />
            <View
                style={styles.labelBg}>
                <Text style={styles.labelText}>{item.id}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default PokemonGridItem;