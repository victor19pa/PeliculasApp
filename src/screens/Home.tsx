import React, { useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
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
      <View style={styles.carouselContainer}>
        <Carousel
          data={peliculasEnCine}
          renderItem={({ item }: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
      {/* Peliculas */}
      <View style={styles.flatlistContainer}>
        <Text style={styles.txtFlatlist}>Peliculas en Cine</Text>
        <FlatList
          data={peliculasEnCine}
          renderItem={({ item }: any) => (
            <MoviePoster 
              movie={item}
              width={ 140 }
              height={ 200 }
            />
          )}
          keyExtractor={ (item) => item.id.toString()}
          horizontal={ true }
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  carouselContainer: {
    height: 440,
  },
  flatlistContainer: {
    height: 250
  },
  txtFlatlist: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default Home