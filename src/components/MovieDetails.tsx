import React from 'react';
import currencyFormatter from 'currency-formatter';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface'
import TitleAtom from './Atoms/title.atom';
import CastItem from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      {/* detalles */}
      <View style={{ marginHorizontal: 20, marginBottom: 15 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name='star-outline'
            color='grey'
            size={20}
          />
          <Text style={{ color: 'black', fontSize: 16 }}> {movieFull.vote_average} </Text>
          <Text style={{ marginLeft: 5, color: 'black', fontSize: 16 }}>
            - {movieFull.genres.map(item => item.name).join(', ')}
          </Text>
        </View>

        <TitleAtom title='Historia' />

        <Text style={{ fontSize: 16 , color: 'grey'}} >
          {movieFull.overview}
        </Text>

        <TitleAtom title='Presupuesto' />

        <Text style={{ fontSize: 18, color: 'grey' }} >
          {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>
        {/* cast */}

        <View style={{ marginTop: 10, marginBottom: 100 }}>
          <TitleAtom title='Actores' />
          {/* <CastItem actor={cast[0]} /> */}
          <FlatList
            data={cast}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CastItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10, height: 60 }}
          />
        </View>
      </View>
    </>
  )
}

export default MovieDetails