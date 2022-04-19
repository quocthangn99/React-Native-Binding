import {StyleSheet, Platform} from 'react-native';

export default styles = StyleSheet.create({
    root: {
        flex:1,
        backgroundColor: '#E9EBEE'
    },
    container_header: {
        backgroundColor:"#FFF",
        height: Platform.OS == 'ios' ? 100 : 56,
        paddingTop: Platform.OS == 'ios' ? 64 : 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        backgroundColor: "#FFF",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    header__text: {
        fontSize: 18,
        fontWeight: '500',
        color: "#000"
    },
    container_avatar: {
        height: 90,
        marginTop: 1,
        backgroundColor:"#FFF"
    },
    container_avatar__name: {
        color: '#000'
    },
    container_avatar__image: {
        height: 56,
        width: 56,
        borderRadius: 28
    },
    container_avatar__sub: {
        alignItems: 'center',
        margin: 10
    }
})