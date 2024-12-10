import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootsTackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootsTackParams, 'Product'>>().params;
  const navigation = useNavigation();



  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
    
  }, []);


  return (
    <View style={globalStyles.container}>
        <Text>ProductScreen</Text>
        <Text style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
        }}>{params.id} - {params.name}</Text>
    </View>
  )
}
