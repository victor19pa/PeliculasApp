import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
  Home: undefined,
  Details: Movie;
}

const Stack = createStackNavigator<RootStackParams>();
const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{
          // backgroundColor: 'white',
        }
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default Navigation;