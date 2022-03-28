import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import movieDB from '../api/movieDB'
import { MovieDBNowPlaying } from '../interfaces/movieInterface'

const Home = () => {

  useEffect(() => {
    movieDB.get<MovieDBNowPlaying>('/now_playing')
      .then(res => {
        console.log(res.data.results[0]);
        
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