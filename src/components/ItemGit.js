import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Avatar, Image } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Theme from '../styles/Theme';

export function ItemGit({ name, avatar_url, onPress }) {
    return (

        <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: avatar_url }} />
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
        width: '95%',
        height: 60,
        backgroundColor: '#DEE4E4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 5,

    },
    nickname: {
        paddingLeft: 70,
        fontSize: 17,
        left: -50


    },
    button: {
        padding: 15,

    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 90,
        left: 2,

    },


});