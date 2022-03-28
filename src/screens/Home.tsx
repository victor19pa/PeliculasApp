import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import movieDB from '../api/movieDB'

const Home = () => {

  useEffect(() => {
    movieDB.get('/now_playing')
      .then(res => {
        console.log(res.data);
      })
  }, [])
  

  return (
    <View>
      <Text style={{color: 'black'}}>
        HOME
      </Text>
      
    </View>
  )
}

export default Home