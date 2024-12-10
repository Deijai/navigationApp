import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'
import { RootsTackParams } from '../../routes/StackNavigator';


const products = [
  { id: 1, name: 'Produto 1' },
  { id: 2, name: 'Produto 2' },
  { id: 3, name: 'Produto 3' },
  { id: 4, name: 'Produto 4' },
  { id: 5, name: 'Produto 5' },
  { id: 6, name: 'Produto 6' },
]

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootsTackParams>>();
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Produtos</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (<PrimaryButton 
        onPress={() => navigation.navigate('Product', {id: item.id, name: item.name})} label={item.name} />)}
       />
       <Text style={{marginBottom: 10, fontSize: 30}}>Ajustes</Text>

       <PrimaryButton onPress={() => navigation.navigate('Settings' as never)} label={'Settings'} />
    </View>
  )
}
