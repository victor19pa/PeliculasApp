import React, { useState } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

const Home = () => {
  const { top } = useSafeAreaInsets();
  const { peliculasEnCine, pelicularPopulares ,isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }
  return (
    <ScrollView>
      <View style={{ marginTop: top + 15 }}>
        <View style={styles.carouselContainer}>
          <Carousel
            data={peliculasEnCine}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={ 0.9 }
          />
        </View>
        {/* Peliculas */}
        {/* <HorizontalSlider title="Peliculas en Cine" movies={ peliculasEnCine }/> */}
        <HorizontalSlider title="Populares" movies={ pelicularPopulares }/>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  carouselContainer: {
    height: 440,
  },
});

export default Home