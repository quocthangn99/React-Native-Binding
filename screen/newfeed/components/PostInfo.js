import { StyleSheet, Text, ScrollView, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons'
import { dataFeeds } from '../data'

const PostInfo = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {
            dataFeeds.map((value, index) => (
                <View key={index}>
                    <View  style={styles.container_post__header}>
                        <Image source={value.image} style={styles.avatar} />
                        <View >
                            <Text style={styles.post_title}>{`${value.title}`}</Text>

                            <View style={styles.post_subInfo}>
                                <Text style={styles.post_subInfo__text} >{`${value.name}`} </Text>
                                <Text style={styles.post_subInfo__text} >{`${value.time}`} </Text>
                            </View>

                        </View>
                        <TouchableOpacity style={styles.post__header_icon} >
                            <FontAwesomeIcon icon={faEllipsisH} />
                        </TouchableOpacity>

                   
                   </View>

                    <View>
                        <Text style={styles.post_content__text}>{`${value.content}`}</Text>
                    </View>

                    <View style={styles.post__footer}>
                        <TouchableOpacity style={styles.post_footer_button}>
                            <Image source={require("../../../asset/heart.png")} style={styles.post_footer_button_image}/>
                            <Text style={styles.post_footer_stat}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.post_footer_button}>
                            <Image source={require("../../../asset/comment.png")} style={styles.post_footer_button_image}/>
                            <Text style={styles.post_footer_stat}>4</Text>
                        </TouchableOpacity>
                    </View>    
                </View>

                    ))
        }

    </ScrollView>
  )
}

export default PostInfo

const styles = StyleSheet.create({
    container: {
        marginTop: 1,
        backgroundColor: '#FFF'
    },
    container_post__header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    post_title: {
        marginTop: 8,
        color: "#000",
        fontWeight: '400',
        right: 40
    },
    post_subInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        right: 40
    },
    post_subInfo__text: {
        color: 'gray',
        fontWeight: '300'
    },
    post_content__text: {
        fontSize: 16,
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10  
    },
    post__header_icon: {
        margin: 10
    },
    avatar: {
        height: 54,
        width: 54,
        borderRadius: 32,
        margin: 10
    },
    post__footer: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingLeft: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#E9EBEE'
    },
    post_footer_button: {
        flexDirection: 'row'
    },
    post_footer_button_image: {
        width: 25,
        height: 25,
        marginRight: 3
    },
    post_footer_stat: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        marginRight: 10,
        alignSelf: 'center'
    }

})