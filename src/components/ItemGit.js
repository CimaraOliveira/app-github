import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Avatar, Image } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Theme from '../styles/Theme';


Icon.loadFont();
export function ItemGit({ name, onPress, avatar_url }) {
    return (

        <View style={styles.container}>
            <Text style={styles.nickname} >{name}</Text>
            <View style={styles.separador} ></View>

            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={onPress} >
                    <Icon3 name="eye" size={25} color={Theme.colors.gray} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        width: '90%',
        height: 55,
        backgroundColor: '#DEE4E4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,
        left: 10
    },
    nickname: {
        paddingLeft: 30,
        fontSize: 17,

    },

    button: {
        padding: 15,
    },

    tinyLogo: {
        width: 30,
        height: 30,
        borderRadius: 90,
    },

});