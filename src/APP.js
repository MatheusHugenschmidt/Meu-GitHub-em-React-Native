import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9'
const colorDarkFontGithub = '#4F565E'
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/106695702?v=4';
const urlToGithub = 'https://github.com/MatheusHugenschmidt';

const App = () => {

  const handlePressGoToGithub = async ()=>{
    console.log('Verificando Link');
    const res = await Linking.canOpenURL(urlToGithub);
    console.log('Link Aprovado');
    if(res){
      console.log('Link Aprovado');
      console.log('Abrindo Link');
      await Linking.openURL(urlToGithub);
    }
  }
  
  return (
    <SafeAreaView style={style.conteiner}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image accessibilityLabel='Matheus na Rua com uma Árvore atras' 
        style={style.avatar} source={{uri: imageProfileGithub}}/>
        <Text accessibilityLabel='Nome Matheus Ibanez Castro Hugenschmidt' 
        style={[style.defaultText, style.name]}>
          Matheus Ibanez Castro Hugenschmidt
        </Text>
        <Text accessibilityLabel='Nickname Matheus Hugenschmidt' 
        style={[style.defaultText, style.nickname]}>
          MatheusHugenschmidt
        </Text>
        <Text accessibilityLabel='Descrição Estudante de Analise e Desenvolvimento de Sistemas | Explorando o Mundo da Programação' 
        style={[style.defaultText, style.description]}>
          Estudante de Analise e Desenvolvimento de Sistemas | Explorando o Mundo da Programação
        </Text>
        
        <Pressable onPress={handlePressGoToGithub}> 
          <View style={style.button}>
           <Text style={[style.description, style.textbutton]}>Open in GitHub</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  ) ;  
};

export default App;

const style = StyleSheet.create({
  conteiner: { // São colunas sempre vai ser uma linha, um embaixo do outro
    backgroundColor: colorGithub,
    flex: 1, // Expandir para a tela inteira
    justifyContent: 'center',
  },
  content:{
    alignItems: 'center',
    padding: 20,
  },
  avatar:{
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText:{
    color: colorFontGithub,
  },
  name:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  nickname:{
    fontSize: 17,
    color: colorDarkFontGithub,
  },
  description:{
    fontSize: 14,
    color: colorFontGithub,
  },
  button:{
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  textbutton:{
    fontSize: 16,
    color: colorFontGithub,
  },
});