import React, {useEffect, useState} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from 'react-native';
import {selector, useRecoilValueLoadable} from 'recoil';
import HomeState from '../../../model/Tab1State';
import getTab1StateSelector from '../../../selector/GetTab1StateSelector';
import PhotoItem from './PhotoItem';
import PhotoScreen from '../../photo/PhotoScreen';

const Tab1Screen = ({navigation}) => {
    console.debug('Tab1Screen()');
    const tab1State = useRecoilValueLoadable(getTab1StateSelector);

    if (tab1State == null || tab1State == undefined) {
        return (<Text>Init...</Text>);
    }

    switch(tab1State.state) {
        case 'loading':
            return (
                <View
                    style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size='large' />
                </View>
            );
        case 'hasValue':
            return (
                <View style={{flex: 1}}>
                    <FlatList
                        data={tab1State.contents.photos}
                        renderItem={({item}) =>
                            <PhotoItem navigation={navigation} item={item} />
                        }
                    />
                </View>
            );
        case 'hasError':
            return (<Text>Error...</Text>);
        default:
            return (<Text>XXX</Text>);
    }
}

export default Tab1Screen;