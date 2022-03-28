import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{color: 'black'}}>
        HOME
      </Text>
      
    </View>
  )
}

export default Home