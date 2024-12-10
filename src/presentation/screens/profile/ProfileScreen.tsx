import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { RootsTackParams } from '../../routes/StackNavigator';

export const ProfileScreen = () => {
    const { top } = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp<RootsTackParams>>();
    return (
        <View style={{marginTop: top, paddingHorizontal: 20}}>
            <Text>ProfileScreen</Text>
            <PrimaryButton label='Abrir menu' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)} />
        </View>
    )
}
