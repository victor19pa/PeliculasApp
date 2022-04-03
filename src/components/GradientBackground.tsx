import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({ children }: Props) => {

  const { colors } = useContext(GradientContext);
  
  return (
    <View style={{ flex: 1, backgroundColor: '#084F6A' }}>
      <LinearGradient
        colors={[ colors.primary, colors.secondary, '#fff']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      />
      {children}
    </View>
  )
}

export default GradientBackground