import { StyleSheet, Platform } from 'react-native';
import Theme from './Theme';

export default StyleSheet.create({
    screenContainer: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 10,
        backgroundColor: Theme.colors.background,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center'
    },
    buttonText: {
        //color: Colors.buttonText,
        fontSize: 20,
        textAlign: 'center'
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 40 : 0
    },
    button: {
        //backgroundColor: Colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10
    },

});