import {View, StyleSheet} from 'react-native';

const Cross = ({style, color, width}) => {
    const styles = StyleSheet.create({
        cross: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        crossUp : {
            position: 'absolute',
            width: '100%',
            height: width,
            backgroundColor: color
        },
        crossFlat: {
            position: 'absolute',
            width: width,
            height: '100%',
            backgroundColor: color
        }
    });
    return (
        <View style={[styles.cross, style]}>
            <View style={styles.crossUp} />
            <View style={styles.crossFlat} />
        </View>
    );
}

export default Cross;