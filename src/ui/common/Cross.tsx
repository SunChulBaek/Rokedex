import {View, StyleSheet} from 'react-native';

const Cross = ({style}) => {
    const styles = StyleSheet.create({
        cross: {
            width: style.size,
            height: style.size,
            alignItems: 'center',
            justifyContent: 'center',
            transform: style.transform != undefined ? style.transform : [],
            backgroundColor: style.backgroundColor != undefined ? style.backgroundColor : 'transparent'
        },
        crossUp : {
            position: 'absolute',
            width: style.size,
            height: style.width,
            backgroundColor: style.color
        },
        crossFlat: {
            position: 'absolute',
            width: style.width,
            height: style.size,
            backgroundColor: style.color
        }
    });
    return (
        <View style={styles.cross}>
            <View style={styles.crossUp} />
            <View style={styles.crossFlat} />
        </View>
    );
}

export default Cross;