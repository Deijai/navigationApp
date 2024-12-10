// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';

export const App = () => {
  return (
    <NavigationContainer>
        <SideMenuNavigator />
    </NavigationContainer>
  );
}