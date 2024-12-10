import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { MaterialTopNavigator } from './MaterialTopNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';
const Tab = createBottomTabNavigator();
export const BottomNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShadowVisible: false,
                tabBarActiveTintColor: globalColors.primary,
                //headerShown: false,
                sceneStyle: {
                    backgroundColor: globalColors.background
                },
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
            }}
        >
            <Tab.Screen
                name="Tab1"
                options={{ title: 'Tab1', tabBarIcon: ({ color }) => <IonIcon name='home-outline' color={color} />, }}
                component={Tab1Screen} />
            <Tab.Screen
                name="Tab2"
                options={{ title: 'Tab2', tabBarIcon: ({ color }) => <IonIcon name='apps-outline' color={color} />, }}
                component={MaterialTopNavigator} />
            <Tab.Screen
                name="Tab3"
                options={{ title: 'Tab3', tabBarIcon: ({ color }) => <IonIcon name='business-outline' color={color} />, }}
                component={StackNavigator} />
        </Tab.Navigator>
    );
}
