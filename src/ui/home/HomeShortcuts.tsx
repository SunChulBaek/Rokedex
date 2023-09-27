import {ScrollView, StyleSheet, View} from 'react-native';
import MyImage from '../common/MyImage';
import Utils from '../../util/Utils.tsx';

type HomeShortcutsProp = {
    pIds: integer[],
    onClick: (integer) => any
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'lightgrey'
    },
    imageContainer: {
        width: 50,
        aspectRatio: '1/1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBg: {
        width: 38,
        height: 38,
        borderRadius: 20,
        backgroundColor: 'white'
    }
});

const HomeShortcuts = (props: HomeShortcutsProp) => {
    return (
        <ScrollView style={styles.container} horizontal={true}>
            {props.pIds.map((pId) => (
                <View key={`preset-${pId}`} style={styles.imageContainer}>
                    <View style={styles.imageBg}>
                        <MyImage
                            style={{width: '100%', height: '100%'}}
                            source={{uri: Utils.getImageUrl(pId)}}
                            onClick={() => { props.onClick(pId); }}
                        />
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

export default HomeShortcuts;