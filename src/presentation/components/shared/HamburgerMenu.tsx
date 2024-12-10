import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Pressable, Text } from 'react-native'
import { RootsTackParams } from '../../routes/StackNavigator';
import { IonIcon } from './IonIcon';

export const HamburgerMenu = () => {
    const navigation = useNavigation<NavigationProp<RootsTackParams>>();
    useEffect(() => {
      navigation.setOptions({
        headerTitleAlign: 'center',
        headerLeft: () => {
          return (
            <Pressable style={{marginLeft: 10}} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
              <IonIcon name='menu' />
            </Pressable>
          )
        }
      });
    }, [])
    return (<></>)
}
