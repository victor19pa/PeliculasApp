import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface'

interface Props {
  actor: Cast;
}

const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`
  return (
    <View style={styles.container}>
      {
        actor.profile_path && (
          <Image
            source={{ uri }}
            style={{ width: 55, height: 55, borderRadius: 10 }}
          />
        )
      }
      <View style={styles.actorInformation}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>
          {actor.name}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'grey' }}>
          {actor.character}
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 55,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.34,
    shadowRadius: 7.49,
    elevation: 15,
    borderRadius: 10,
    marginRight: 30,
    paddingRight: 15,
  },
  actorInformation: {
    marginLeft: 10,
    marginTop: 4

  }
});

export default CastItem