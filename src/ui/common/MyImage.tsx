{/* 이미지 로드 전까지 ActivityIndicator가 출력되는 Image */}

import React, {useState} from 'react';
import {
    ActivityIndicator,
    Image,
    ImageSource,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    absolute: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
});

type MyImageProps = {
    style: StyleSheet,
    source: ImageSource,
    onClick: () => any
};

const MyImage = (props:  MyImageProps) => {
    const [state, setState] = useState({
        isLoading: true,
        isError: false
    });

    return (
        <TouchableOpacity
            style={[styles.center, props.style]}
            onPress = {() => {
                props.onClick != undefined ? props.onClick() : { }
            }}
        >
            <Image
                style={[styles.absolute]}
                source={props.source}
                onLoadEnd = {() => {
                    setState({
                        isLoading: false,
                        isError: false
                    });
                }}
            />
            {/* https://sentry.io/answers/how-do-you-show-or-hide-elements-in-react/ */}
            {state.isLoading && <ActivityIndicator />}
        </TouchableOpacity>
    );
}

export default MyImage;