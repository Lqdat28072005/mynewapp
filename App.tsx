import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  //string
  const[name,setName] = useState<string>("awqw");
  //number
  const[age,setAge] = useState<number>(20)
  //null
  const test = false;

  //object,array
  const [person,setPerson] = useState([{
    name:"hoidanit",
    age:25
  }]);
  const[todoList,setTodoList] = useState([
    {id:1,title:"Learn React Native"},
    {id:2,title:"Xin chao"},
    {id:1,title:"Learn React Native"},
    {id:2,title:"Xin chao"},
    {id:1,title:"Learn React Native"},
    {id:2,title:"Xin chao"},
    {id:1,title:"Learn React Native"},
    {id:2,title:"Xin chao"},
  ]);
  return (
    <View style={styles.container}>
      <View>
        
        <TextInput 
        onChangeText={value => setName(value)}
        value={name}
        autoCapitalize='none'
        // keyboardType='numeric'
        // maxLength={2}
        // multiline={true}
        autoCorrect={false}
        style={{
          borderColor:"Violet",
          borderWidth:1
        }}></TextInput>
        <Text style ={styles.text}>{name}</Text>
      </View>
      <Button
        onPress={()=>alert("tap me")} 
        title='Add new'/>
      <View>
        {todoList.map(todo =>{
          return(
              <Text style={styles.todo}>{todo.title}</Text>
          )
        })}
      </View>
         <Text  style ={styles.text}>Xin chào các bạn 
            <Text style={styles.dat}>lequangdat</Text>
         </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  todo:{
    fontSize:30,
    backgroundColor:"pink",
    marginBottom:10,
    padding:15,
  },
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
    paddingHorizontal:20,
    marginTop:50
  },
});
