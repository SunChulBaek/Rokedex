import {
    View,
    Image,
    Text
} from 'react-native';
import MyImage from '../common/MyImage';

const PhotoScreen = ({navigation, route}) => {
    return (
        <View>
            <MyImage
                style={{width: 100, height: 100}}
                source={{uri: route.params.url}}
            />
            <Text>{route.params.title}</Text>
        </View>
    );
}

export default PhotoScreen;