import { Text, View, SafeAreaView, Button, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles/DataBidingStyle'
import { dataAvatar, dataFeeds } from './data'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faPenClip } from '@fortawesome/free-solid-svg-icons';







export default class DataBinding extends Component {
  
  renderImg = () => {
    return dataAvatar.map((value, index) => (<View>
      <Image source={value.image} key={index} style={styles.profile}/>
      <Text style={{alignSelf: 'center', fontWeight: '500', color: 'black'}}>{`${value.name}`}</Text>
    </View>))
  };

  renderAvatar = () => {
    return(
      <ScrollView horizontal>
      {this.renderImg()}
      </ScrollView>
    )
  }

  renderHeader = () => {
    return (
      <View style={styles.container_header}>
        <View style={styles.header}>
          <FontAwesomeIcon icon={faCamera} size={20}/>
          <Text style={styles.header__text}>Feed</Text>
          <FontAwesomeIcon icon={faPenClip} size={20}/>
        </View>
      </View>
    )
  }


  render() {
    return (
      <View style={styles.root}>
        {this.renderHeader()}
        {this.renderAvatar()}
      </View>
    )
  }
}
