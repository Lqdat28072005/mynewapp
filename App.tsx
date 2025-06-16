import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  //string
  const[name,setHoidanit] = useState<string>("hoidanit");
  //number
  const[age,setAge] = useState<number>(20)
  //null
  const test = false;

  //object,array
  const [person,setPerson] = useState([{
    name:"hoidanit",
    age:25
  }]);

  return (
    <View style={styles.container}>
      <View>
        <Text style ={styles.text}>test</Text>
        <Text style ={styles.text}>{JSON.stringify(person)}</Text>
      </View>
         <Text  style ={styles.text}>Xin chào các bạn 
            <Text style={styles.dat}>lequangdat</Text>
         </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  dat:{
    fontSize:30,
    color: "green"
  },
  text:{
    fontSize:30,
    color :"red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize:60,color:"red", 
    paddingTop:20,
    paddingHorizontal:20
  },
});
