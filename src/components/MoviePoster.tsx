import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
  movie: Movie;

}

const MoviePoster = ({ movie }: Props) => {
  const { title, poster_path } = movie;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <View style={styles.card}>

      <View style={styles.imageContainer}>
        <Image
          source={{
            uri
          }}
          style={styles.image}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 420,
  },
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