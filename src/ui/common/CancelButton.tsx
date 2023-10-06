import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Cross from './Cross';

const primaryColor = '#61dafb';
const defaultButtonSize = 50;
const defaultBorderWidth = 5;
const defaultBorder2Width = 2;

const styles = StyleSheet.create({
    border: {
        backgroundColor: '#ffffff66', // 40%
        alignItems: 'center',
        justifyContent: 'center'
    },
    color: {
        backgroundColor: primaryColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const CancelButton = ({buttonSize, borderWidth, border2Width, style, onClick}) => {
    const size = buttonSize != undefined ? buttonSize : defaultButtonSize;
    const bw = borderWidth != undefined ? borderWidth : defaultBorderWidth;
    const bw2 = border2Width != undefined ? border2Width : defaultBorder2Width;
    const colorSize = size - (bw * 2);
    const centerSize = size - (bw * 2) - (bw2 * 2);

    const pStyles = StyleSheet.create({
        border: {
            width: size,
            height: size,
            borderRadius: size / 2
        },
        color: {
            width: colorSize,
            height: colorSize,
            borderRadius: colorSize / 2
        },
        center: {
            width: centerSize,
            height: centerSize,
            borderRadius: centerSize / 2
        }
    });

    return (
        <TouchableOpacity
            style={[style, styles.border, pStyles.border]}
            onPress={onClick}
        >
            <View style={[styles.color, pStyles.color]}>
                <View style={[styles.center, pStyles.center]}>
                    <Cross
                        style={{width: 20, height: 20, transform: [{rotate: '45deg'}]}}
                        color={primaryColor}
                        width={2}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default CancelButton;