import {View, StyleSheet, TouchableOpacity} from 'react-native';

const primaryColor = '#61dafb';

const styles = StyleSheet.create({
    cross: {
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{rotate: '45deg'}]
    },
    crossUp : {
        position: 'absolute',
        height: 20,
        width: 2,
        backgroundColor: primaryColor
    },
    crossFlat: {
        position: 'absolute',
        width: 20,
        height: 2,
        backgroundColor: primaryColor
    },
    border: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ffffff66', // 40%
        alignItems: 'center',
        justifyContent: 'center'
    },
    colorBorder: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: primaryColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const Cross = () => {
    return (
        <View style={styles.cross}>
            <View style={styles.crossUp} />
            <View style={styles.crossFlat} />
        </View>
    );
}

const CancelButton = ({style, onClick}) => {
    return (
        <TouchableOpacity
            style={[style, styles.border]}
            onPress={onClick}
        >
            <View style={styles.colorBorder}>
                <View style={styles.center}>
                    <Cross />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default CancelButton;