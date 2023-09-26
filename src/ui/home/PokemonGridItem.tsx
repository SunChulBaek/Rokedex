import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
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
        <RadialGradient style={{flex: 1}} colors={['#61dafbaa','#61dafb33']}>
            <MyImage
                style={{width: '100%', aspectRatio: '1/1'}}
                source={{uri: Utils.getImageUrl(item.id)}}
                onClick={() => {
                    navigation.navigate('PokemonDetail', item);
                }}
            />
            <View
                style={styles.labelBg}>
                <Text style={styles.labelText}>{item.id}</Text>
            </View>
        </RadialGradient>
    );
}

export default PokemonGridItem;