import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react'
import { RootsTackParams, StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { globalColors } from '../theme/theme';
import { BottomNavigator } from './BottomNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
    const dimensions = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerType: (dimensions.width >= 758) ? 'permanent' : 'slide',
                headerShadowVisible: false,
                headerShown: false,
                drawerStatusBarAnimation: 'slide',

                drawerIcon: (props) => <></>,

                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: globalColors.primary,
                drawerItemStyle: {
                    borderRadius: 100,
                    paddingHorizontal: 20
                },
                drawerStyle: {
                    borderBottomRightRadius: 50,
                    borderTopRightRadius: 50,
                    width: '90%',
                },
                sceneStyle: {
                    backgroundColor: globalColors.background,

                }

            }}
        >
            {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
            <Drawer.Screen options={{
                drawerIcon: ({ color }) => <IonIcon name='menu' color={color} />
            }} name="BottomNavigator" component={BottomNavigator} />
            <Drawer.Screen
            options={{
                drawerIcon: ({ color }) => <IonIcon name='menu' color={color} />
            }}
             name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}


const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View 
            style={{ height: 200, backgroundColor: globalColors.primary, margin: 30, borderRadius: 50 }}>

            </View>

            <DrawerItemList {...props}>

            </DrawerItemList>
        </DrawerContentScrollView>
    );
}
