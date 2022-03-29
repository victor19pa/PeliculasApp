import React, { useState } from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: windowWidth } = Dimensions.get('window');

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
      {/* <MoviePoster 
        movie={ peliculasEnCine[3]} 
      /> */}
      <View style={styles.carouselContainer}>
        <Carousel
          data={peliculasEnCine}
          renderItem={({ item }: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  carouselContainer:{
    height: 440
  }
});

export default Home