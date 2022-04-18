import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from '../emoji/styles/EmojiStyle'

const emojiData = [
    require('../../asset/emoji/angry.png'),
    require('../../asset/emoji/haha.png'),
    require('../../asset/emoji/like.png'),
    require('../../asset/emoji/care.png'),
    require('../../asset/emoji/love.png'),
    require('../../asset/emoji/sad.png'),
]


export default class EmojiScreen extends Component {
  state = {
    emojiState: require('../../asset/emoji/haha.png')
  }

  onPressEmoji = emoji => {
    this.setState({emojiState: emoji})
  }

  render() {
    return (
      <View style={styles.root}>
        
        <Text style={styles.title}>Bạn đang cảm thấy như thế nào ?</Text>

        
        <View style={styles.cointainer_emoji}>
          <Image source={this.state.emojiState} style={styles.emoji} resizeMode={'cover'}/>
        </View>
        
        
        <View style={styles.row}>
          {
            emojiData.map((value,index) => (
              <TouchableOpacity key={index} onPress={() => this.onPressEmoji(value)}>
                <View style={[styles.cointainer_emoji, styles.container_emoji_button]}>
                  <Image source={value}  style={[styles.emoji, styles.emoji_icon]} resizeMode={'cover'}/>
                </View>
              </TouchableOpacity>
            ))
          }
        </View>

      </View>
    )
  }
}