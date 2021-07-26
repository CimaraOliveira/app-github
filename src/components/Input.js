import React from 'react';
import { View, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';
import Icon3 from 'react-native-vector-icons/AntDesign';

export function Input({placeholder,onPress,onChangeText}) {
    return (
      <View style={ styles.container}>
        <TextInput style={styles.inputText} placeholder={placeholder}
          placeholderTextColor={Theme.colors.gray2}
          onChangeText={onChangeText}
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
           <Icon3 name="right" size={20} color={Theme.colors.gray2}/>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
      container:{
          marginTop:40,
          width: '90%',
          height: 65,
          backgroundColor: '#FFFFFF',
          flexDirection:'row',
          alignItems: 'center',
          borderRadius: 5,
      },
      inputText:{
        flex: 1,
        height: '100%',
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        color: Theme.colors.gray,
        fontSize: 17,
        
      },
      button:{
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderLeftWidth:1,
       }
  });

