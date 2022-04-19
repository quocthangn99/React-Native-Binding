import { Text, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import NewFeedStyle from './styles/NewFeedStyle'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faPenClip } from '@fortawesome/free-solid-svg-icons'
import { dataAvatar, dataFeeds } from './data'
import PostInfo from './components/PostInfo'

export class NewFeedScreen extends Component {
    renderHeader = () => {
        return (
            <View style={NewFeedStyle.container_header}>
                <View style={NewFeedStyle.header}>
                    <FontAwesomeIcon icon={faCamera}/>
                    <Text style={NewFeedStyle.header__text}>Feed</Text>
                    <FontAwesomeIcon icon={faPenClip}/>
                </View>
            </View>

        )
    }  

    renderAvatar = () => {
      return (
        <View style={NewFeedStyle.container_avatar}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              dataAvatar.map((value, index) => (
                <View key={index} style={NewFeedStyle.container_avatar__sub}>
                  <Image source={value.image} resizeMode={'cover'} style={NewFeedStyle.container_avatar__image}/>
                  <Text> {`${value.name}`} </Text>
                </View>
              ))
            }
          </ScrollView>
        </View>
      )
    }




  render() {
    return (
      <View style={NewFeedStyle.root}>
        {this.renderHeader()}
        {this.renderAvatar()}
        <PostInfo />
      </View>
    )
  }
}

export default NewFeedScreen