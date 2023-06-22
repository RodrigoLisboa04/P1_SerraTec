import { Platform, StyleSheet, StatusBar } from "react-native";


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    header: {
        width: '100%',
        backgroundColor: '#8100dd',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    textoHeader: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
        marginVertical: 16,
    },

    textoCortejo:{
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
        marginVertical: 5,
    },

    textoValorConta: {
        fontSize: 20,
        fontWeight: '700'
    },

    tabIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    btnUsuario: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9b22e6'
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

    btnIcone: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f1f6',
        paddingHorizontal: 8,
        paddingVertical: 8,
    },

    comumbtn: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },

    valorGPT: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },

    valorConta: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    btnScrollTxt: {
        fontWeight: '700',
    },

    myCard: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f0f1f6',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 16,
        marginTop: 0,
        padding: 20
    },
    myCardTxt: {
        fontWeight: '700',
        marginLeft: 16,
    },

    btnScrollCards: {
        alignItems: 'center',
        marginHorizontal: 8,
        paddingVertical: 24,
        paddingHorizontal: 24,
        borderRadius: 16,
        backgroundColor: '#f0f1f6',
        height: '100%'
    },

    cards: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 16,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#c6c6c6',
    },
    cardsTxt: {
        fontWeight: '700',
        fontSize: 20,
    },

    textoValorFatura: {
        fontSize: 20,
        fontWeight: '700',
        paddingVertical: 16,
        color: '#8100dd'
    },

    textoValores: {
        fontSize: 13,
        fontWeight: '500',
        paddingVertical: 0,
        color: '#8100dd',
        paddingLeft: 5

    },

    limite: {
        fontSize: 13,
        flexDirection: 'row',
    },

    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },

    btnADD: {
        backgroundColor: '#8100dd',
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
      },

      btnADDtxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },

});