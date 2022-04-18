import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#DDDDDD"
    },
    row: {
        flexDirection: 'row'
    },
    cointainer_emoji: {
        borderWidth: 10,
        borderColor: "#FFF",
        borderRadius: 150,
        margin: 10,
        elevation: 10
    },
    container_emoji_button: {
        borderWidth: 4
    },
    emoji: {
        width: 200,
        height: 200
    },
    emoji_icon: {
        width: 32,
        height: 32,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    }
})