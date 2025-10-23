import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [dinheiro, setDinheiro] = useState<number>(0);
  const [valor_clique, setValor_clique] = useState<number>(1);
  

const addValor = ()=>{
  setDinheiro(dinheiro+valor_clique);

};
const modificarClique = (dinheiro:number)=>{
  if(dinheiro >=10){
    setValor_clique(valor_clique+1)
    setDinheiro(dinheiro - 10)
  };
  
};
const modificarClique2 = (dinheiro:number)=>{
  if(dinheiro >=18){
    setValor_clique(valor_clique + 3)
    setDinheiro(dinheiro - 18)
  }
}


  return (
    
    <View style={styles.container}>
      <View style={styles.leftView}>
        <Text>{dinheiro}</Text>
        <Button title="teste" onPress={addValor}></Button>
        <View>{`valor do clique é : ${valor_clique}`}</View>
      </View>
      
      <View style={styles.rightView}>

        <View>
          <View style={styles.lojaTitle}><Text style={styles.texto_cfg}>Loja</Text></View>
          <View style={styles.buff}><Button title="valor clique + 1" onPress={() => modificarClique(dinheiro)} /></View>
          <View style={styles.buff}><Button title="valor clique + 1" onPress={() => modificarClique2(dinheiro)} /></View>
        </View>

      </View>
      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // lado a lado
  },
  leftView: {
    flex: 8, // 80%
    backgroundColor: '#4CAF50', // verde só pra visualizar
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightView: {
    flex: 2, // 20%
    backgroundColor: '#2196F3', // azul pra visualizar
    justifyContent: 'center',
    alignItems: 'center',
    

  },
  lojaTitle:{
    height: 30,
    width: 100,
    fontSize:60,
    fontStyle:'italic',
    padding:20,
    alignItems:'center',
    justifyContent:'center',
    position:"absolute",
    marginTop:-200
  
  
  },
  buff:{
    height: 30,
    width: 90,
    backgroundColor: 'green',
    borderRadius: 10,
    padding:15,
    alignItems:'center',
    justifyContent:'center',
    marginTop:50
    
  },
  texto_cfg:{
    fontSize: 30,
    fontWeight: "bold",
    color:'white'
  }
});