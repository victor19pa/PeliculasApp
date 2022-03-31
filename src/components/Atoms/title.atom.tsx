import React from 'react'
import { Text } from 'react-native'

interface Props{
  title: string;
}

const TitleAtom = ({title}: Props) => {
  return (
    <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black' }} >
      {title}
    </Text>
  )
}

export default TitleAtom