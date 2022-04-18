import { View, Text, TextInput } from 'react-native'
import React from 'react'

const MyTextInput = (lable) => {
  return (
    <View>
        
        <Text>{`${lable}`}</Text>
      <TextInput style={{
          borderColor: 'gray',
          width: 200,
          height: 30
      }}/>
    </View>
  )
}

export default MyTextInput