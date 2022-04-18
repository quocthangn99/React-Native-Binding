import { View, Text } from 'react-native'
import React from 'react'

export const RenderHeader = (props) => {
  return (
    <View>
      <Text>{props.text}</Text>
      {
          props.array.map((value, index) => (<Text key={index}> {`${value}`} </Text>))
      }
    </View>
  )
}