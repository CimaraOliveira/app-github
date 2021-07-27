import { Alert, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Avatar, Keyboard, Image } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import Theme from '../styles/Theme';
import { Input } from '../components/Input';
import { ItemGit } from '../components/ItemGit';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export function Home({ navigation }) {

    const keyAsyncStorage = "@ap:i";
    //guarda o estado do login usuario nome
    const [nickname, setNickname] = useState(''); 
   //vetor para guardar a lista de usuarios
    const [users, setUsers] = useState([]); 



    function navigationDetails(login) {
        navigation.navigate('Details', { user: login }); //passandoinformaçoes para uma rota o login
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
                avatar_url: data.avatar_url
            }

            //vetor para armazenar os dados recebidos
            const vetData = [...users, obj];

            //adicionando usuarios
            // setUsers(oldValue => [...oldValue, obj]);
            // setNickname(' ');
            try {
                await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(vetData));
            } catch (error) {
                console.error(error);
                Alert.alert("Não foi possível realizar essa operação");
            }
            Keyboard.dismiss();
            setNickname(' ');
            console.log(obj);

        } catch (error) {
            Alert.alert("Erro não Esperado")
            console.error(error);
        }
    }
   
    //carrega dadod validos para tela
    async function loadData(){
        try{
            const retorno = await AsyncStorage.getItem(  keyAsyncStorage  );   
            const dados = await JSON.parse( retorno )
            console.log('loadData -> ', dados);
            setUsers( dados || [] );
        }catch(error){
            Alert.alert("Erro na leitura  dos dados");
        }
    }

 //chamando funcao loaddata
 useEffect(()=>{
     loadData();
 }, []);

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
        borderRadius: 50,
    }
})