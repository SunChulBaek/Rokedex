{/* 이미지 로드 전까지 ActivityIndicator가 출력되는 Image */}

import React, {useState} from 'react';
import {
    ActivityIndicator,
    Image,
    ImageSource,
    StyleSheet,
    View
} from 'react-native';

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    absolute: {
        position: 'absolute'
    },
});

type MyImageProps = {
    style: StyleSheet,
    source: ImageSource
};

const MyImage = (props:  MyImageProps) => {
    const [state, setState] = useState({
        isLoading: true,
        isError: false
    });

    return (
        <View style={[styles.center, props.style]}>
            <Image
                style={[styles.absolute, props.style]}
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
        </View>
    );
}

export default MyImage;