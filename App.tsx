import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RecoilRoot} from 'recoil';
import HomeScreen from './src/ui/home/HomeScreen';
import PhotoScreen from './src/ui/photo/PhotoScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <RecoilRoot>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Photo"
                        component={PhotoScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </RecoilRoot>
    );
}

export default App;