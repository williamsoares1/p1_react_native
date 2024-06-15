import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,
    },
    loginBox: {
        paddingVertical: 30,
        paddingHorizontal: 30,
        gap: 5,
        borderBottomWidth: 2,
        borderColor: '#d1d1d1'
    },
    signUpBox: {
        paddingVertical: 30,
        paddingHorizontal: 30,
        gap: 5,
    },
    arrowBack: {
        marginBottom: 15
    },
    infoPageText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    eyeIconBox: {
        width: 60,
        height: 40,
        zIndex: 1,
        position: 'relative',
        top: -62,
        left: 400,
        borderLeftWidth: 1,
        paddingLeft: 10,
        borderColor: '#d1d1d1',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    forgotPWText: {
        color: '#0063E6',
        fontSize: 15,
        textAlign: 'right',
        marginTop: -36,
        paddingRight: 5
    },
    orText: {
        position: 'relative',
        top: -17,
        fontSize: 15,
        left: 250,
        textAlign: 'center',
        zIndex: 1,
        backgroundColor: '#fff',
        width: 40,
    },
})

export default styles;