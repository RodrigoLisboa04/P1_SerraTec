import { Platform, StyleSheet, StatusBar } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    header: {
        width: '100%',
        backgroundColor: '#1C1C1C',
        paddingTop: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    boxInfo: {
        flexDirection: 'column',
    },

    info: {
        flexDirection: 'column',
        marginLeft: 70,
        marginVertical: 20
    },

    btnIMG: {
        backgroundColor: '#8100dd',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        width: 50,
        height: 50,
    },

    userName: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
    },

    userInfo: {
        color: '#fff'
    },


    tabIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    comumbtn: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },

    btnClose: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnPScroll: {
        width: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 1,
        paddingVertical: 8,
        maxHeight: 100,
        marginEnd: 0,
        paddingTop: 20
    },

    myCard: {
        width: '120%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#000000',
        marginTop: 0,
        padding: 22,
        border: 20,
        borderBottomWidth: 0.199,
        borderBottomColor: '#c6c6c6'
    },

    myCardTxt: {
        fontWeight: '500',
        marginLeft: 16,
        color: '#fff',
        fontSize: 17
    },

    btnSair: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1C1C1C',
        borderRadius: 90,
        marginTop: 30,
        marginLeft: 40,
        padding: 20
    },

});