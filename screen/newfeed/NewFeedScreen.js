import { Text, View } from 'react-native'
import React, { Component } from 'react'
import NewFeedStyle from './styles/NewFeedStyle'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faPenClip } from '@fortawesome/free-solid-svg-icons'

export class NewFeedScreen extends Component {
    renderHeader = () => {
        return (
            <View style={NewFeedStyle.container_header}>
                <View style={NewFeedStyle.header}>
                    <FontAwesomeIcon icon={faCamera}/>
                    <Text>Feed</Text>
                    <FontAwesomeIcon icon={faPenClip}/>
                </View>
            </View>

        )
    }  


  render() {
    return (
      <View style={NewFeedStyle.root}>
        {this.renderHeader()}
      </View>
    )
  }
}

export default NewFeedScreen