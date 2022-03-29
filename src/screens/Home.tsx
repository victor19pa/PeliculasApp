import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import useState from 'react';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Home = () => {
  const { top } = useSafeAreaInsets();
  const { peliculasEnCine, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }
  return (
    <View style={{ marginTop: top + 15 }}>
      <MoviePoster 
        movie={ peliculasEnCine[3]} 
      />
    </View>
  )
}

export default Home