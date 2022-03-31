import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieDetails from '../components/MovieDetails';
import { useMoviesDetails } from '../hooks/useMoviesDetails';
import { RootStackParams } from '../navigator/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {

}

const screenHeight = Dimensions.get('screen').height;

const Details = ({ route }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, cast, movieFull } = useMoviesDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{
              uri
            }}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {/*  */}
      {
        isLoading
          ? <ActivityIndicator size={35} color='grey' style={{ marginTop: 20 }} />
          : (<MovieDetails movieFull={movieFull!} cast={cast} />)
      }

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  imageContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.29,
    shadowRadius: 7,
    elevation: 8,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.8
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  }
});

export default Details