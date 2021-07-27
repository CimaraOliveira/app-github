import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';
import api from '../services/api';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
//import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export function Details({ route }) {
  
  const [user, setUser] = useState({});

  async function carregarUsuarios( nickname ){
    try {
      response = await api.get('/users/' + nickname);
      const {data} = response;

      const obj = {
        id: data.id,
        name: data.name,
        login: data.login,
        company: data.company,
        bio: data.bio,
        avatar_url: data.avatar_url,
        url: data.url,
        public_repos: data.public_repos,
        followers: data.followers,
      }

      setUser( obj );
      console.log(obj);

    } catch (error) {
      console.error(error);
    }
}


useEffect(()=>{
    const { user  } = route.params;
    carregarUsuarios( user );
  
},[]);


return (
  <View style={GlobalStyles.screenContainer}>
       <View style={styles.perfil}>
          <Image style={styles.tinyLogo} source={{uri: user.avatar_url }}/>
          <Text style={ styles.title }>{ user.name}</Text> 
          <Text style={styles.textSmall }>{ user.url}</Text>
          {user.company  && <Text style={styles.textRegular}>Empresa: { user.company }</Text> }
          <Text style={styles.textRegular}>Bio: { user.bio }</Text> 

       </View>

       <View style={styles.info}>
         
          <View >
            <Text style={styles.titleInfo}>Repositórios</Text>
            <View style={ styles.infoCount }>
              <FontAwesome5  name="code-branch" size={50} color="black" />
              <Text style={ styles.textCount}>{user.public_repos}</Text>
            </View>  
          </View>

          <View >
            <Text style={styles.titleInfo}>Seguidores</Text>
            <View style={ styles.infoCount }>
              <FontAwesome5 name="users" size={40} color="black" />
              <Text style={ styles.textCount}>{user.followers}</Text>
            </View>
          </View>
          
       </View>

  </View>

);
}

const styles = StyleSheet.create({
perfil:{
  alignItems:'center',
  marginTop: 1,
},
info:{
  marginTop:70,
  width: '75%',
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop: 27,
},
infoItem:{
},
infoCount:{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around'
},
textCount:{
  fontSize: 25,
  color: Theme.colors.black
},
titleInfo:{
  fontSize:18,
  },
title:{
  fontSize: 30,
  color: Theme.colors.primary,
},
textSmall:{
  fontSize: 14,
  marginTop: 1,
  color: Theme.colors.gray
},
textRegular:{
  marginTop: 15,
  fontSize: 20,
  color: Theme.colors.gray
},

tinyLogo: {
  width: 140,
  height: 140,
  borderRadius:90,
},

})