import {
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import MyImage from '../common/MyImage';
import getImageUrl from '../../util/Util.tsx';

const PokemonItem = ({navigation, item}) => {
    return (
        <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => {
                navigation.navigate('Photo', {
                    url: item.url,
                    title: item.title
                });
            }}
        >
            <MyImage
                style={{width: 80, height: 80}}
                source={{uri: getImageUrl(item.url.split("/")[6])}} />
            <Text style={{padding:8, fontSize:15}}>{item.name}</Text>
        </TouchableOpacity>
    );
}

export default PokemonItem;