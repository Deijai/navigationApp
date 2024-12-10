import { createStackNavigator } from '@react-navigation/stack'; //from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';



export type RootsTackParams = {
    Home: undefined,
    Products: undefined;
    Product: {id: number, name: string};
    Settings: undefined;
    Profile: undefined;

}

// const Stack = createNativeStackNavigator<RootsTackParams>();
const Stack = createStackNavigator<RootsTackParams>();

export const StackNavigator = () => {
    const navigation = useNavigation<NavigationProp<RootsTackParams>>();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
    return (
        <Stack.Navigator screenOptions={{
            headerShadowVisible: false,
            
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
    );
}