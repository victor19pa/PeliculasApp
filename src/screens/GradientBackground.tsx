import React from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({ children }: Props) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#084F6A' }}>
      <LinearGradient
        colors={['#084f6a', '#75cedb', '#fff']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      />
      {children}
    </View>
  )
}

export default GradientBackground