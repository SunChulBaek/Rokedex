import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tab1Screen from './tab1/Tab1Screen';
import Tab2Screen from './tab2/Tab2Screen';
import Tab3Screen from './tab3/Tab3Screen';
import Tab4Screen from './tab4/Tab4Screen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === '탭1') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === '탭2') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === '탭3') {
                        iconName = focused ? 'camera' : 'camera-outline';
                    } else if (route.name === '탭4') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return (<Ionicons name={iconName} size={size} color={color} />);
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray'
            })}
        >
            <Tab.Screen name="탭1" component={Tab1Screen} options={{headerShown: false}} />
            <Tab.Screen name="탭2" component={Tab2Screen} options={{headerShown: false}} />
            <Tab.Screen name="탭3" component={Tab3Screen} options={{headerShown: false}} />
            <Tab.Screen name="탭4" component={Tab4Screen} options={{headerShown: false}} />
        </Tab.Navigator>
    );
}

export default HomeScreen;