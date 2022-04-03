import React, { useContext } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { useMovies } from '../hooks/useMovies';
import ImageColors from 'react-native-image-colors'
import MoviePoster from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext, GradientProvider } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get('window');

const Home = () => {
  const { top } = useSafeAreaInsets();
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { setMainColors, setPrevMainColors } = useContext(GradientContext);

  const getPosterColors = async (index: Number) => {
    const movie = nowPlaying[index]
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const [primary = '#fff', secondary = '#fff'] = await getImageColors(uri);

    setMainColors({ primary, secondary })
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 15 }}>
          <View style={styles.carouselContainer}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  )
}
const styles = StyleSheet.create({
  carouselContainer: {
    height: 440,
  },
});

export default Home