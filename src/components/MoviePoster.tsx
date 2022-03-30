import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;

}
const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
  const { poster_path } = movie;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Details', movie )}
      style={{ 
        height, 
        width, 
        marginHorizontal: 2, 
        paddingBottom: 20,
        paddingHorizontal: 7
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 18,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.34,
    shadowRadius: 7.49,

    elevation: 20,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  }
});

export default MoviePoster