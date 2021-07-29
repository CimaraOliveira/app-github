import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



export default function MainButton(props) {
  return (

    <View >
      <View>
        <Text >{props.user}</Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={props.onPress}>
        <Text style={styles.text}>Remover</Text>
      </TouchableOpacity>
    </View>

  )
};
const styles = StyleSheet.create({

  button: {
    width: 300,
    height: 50,
    top: -10,
    borderRadius: 15,
    backgroundColor: '#6959CD'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:8,
    textAlign: 'center',
    color:'#FFFFFF'
  }


})