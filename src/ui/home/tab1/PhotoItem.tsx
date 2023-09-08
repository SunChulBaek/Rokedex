import {
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import MyImage from '../../common/MyImage';

const PhotoItem = ({navigation, item}) => {
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
                source={{uri: item.thumbnailUrl}} />
            <Text style={{padding:8, fontSize:15}}>{item.title}</Text>
        </TouchableOpacity>
    );
}

export default PhotoItem;