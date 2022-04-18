import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
    root: {
        flex:1,
        backgroundColor: '#E9EBEE'
    },
    container_header:{
        backgroundColor: '#FFF',
        height: Platform.OS == 'ios' ? 100 : 56,
        paddingTop: Platform.OS == 'ios' ? 64 : 0,
        paddingLeft: 20,
        paddingRight: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header__text: {
        fontSize: 16,
        fontWeight: '500'
    },
    profile: {
        margin: 10,
        width: 50,
        height: 50,
        borderRadius: 50/2,
        overflow: "hidden",
    }

})