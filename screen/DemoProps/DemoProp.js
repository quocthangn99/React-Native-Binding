import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { RenderHeader } from './components/DemoText'


const data = [
    "Hello",
    "NiHao",
    "Hi"
]

export default class DemoProp extends Component {

    
  render() {
    return (
      <View>
        <RenderHeader text="Hello React" array={data} />
      </View>
    )
  }
}