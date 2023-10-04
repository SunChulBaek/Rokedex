import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/ui/home/HomeScreen';
import PokemonDetailScreen from './src/ui/detail/PokemonDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Rokedex"
                    component={HomeScreen}
                    options={{
                        headerShown: true,
                        headerTitleStyle: {
                            color: '#61dafb'
                        },
                        headerStyle: {
                            backgroundColor: '#282c34'
                        }
                    }}
                />
                <Stack.Screen
                    name="PokemonDetail"
                    component={PokemonDetailScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;