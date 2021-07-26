import { StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Avatar , List, Image} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';
import { Input } from '../components/Input';
import { ItemGit } from '../components/ItemGit';
import api from '../services/api';
Icon.loadFont();

import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export function Home({ navigation }) {
     
    const [nickname, setNickname] = useState(''); //guarda o estado do login usuario nome
    const [users, setUsers] = useState([]); //estado para guardar a lista de usuarios
 
    
  
    function navigationDetails(login) {
        navigation.navigate('details', { user: login }); //passandoinformaçoes para uma rota o login
    }
     
       //funcao para buscar usuario
    async function handleSearchUser() {
        try {
            response = await api.get('/users/' + nickname);
            const { data } = response;
            //pegando as informaçoes por um objeto
            const obj = {
                id: data.id,
                nome: data.name,
                login: data.login,
                avatar_url:data.avatar_url
            }
             //adicionando usuarios
            setUsers(oldValue => [...oldValue, obj]);
            setNickname(' ');            

        } catch (error) {
            console.error(error);
        }
    }

    return (

        <View style={GlobalStyles.screenContainer}>
            
            <FontAwesome5 name="github" size={98} color={Theme.colors.primary} />
            <Text style={styles.title}>GIT.Networking </Text>
            <Input placeholder="Digite o nickname do usuário" onChangeText={setNickname}
                onPress={handleSearchUser} />

           
            <FlatList data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <ItemGit name={item.login} onPress={() => navigationDetails(item.login)} />
                )}
            />

            




         

        </View>

    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        //fontFamily: Theme.fonts.robotoBold,
        //color: Theme.colors.primary,
    },
    tinyLogo: {
        width: 10,
        height: 10,
        borderRadius:50,
      }
})