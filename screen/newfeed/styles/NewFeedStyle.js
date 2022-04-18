import {StyleSheet, Platform} from 'react-native';

export default styles = StyleSheet.create({
    root: {
        flex:1,
        backgroundColor: '#E9BEE'
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
    }
})