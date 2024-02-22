import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import ToDoList from './components/ToDoList.js';
import ToDoForm from './components/TodoForm.js';

export default function App() {
  //define a state variable
  const [task, setTask] = useState([
    { task_name: 'Do laundry', task_id: 1 },  //item1
    { task_name: 'Go to gym', task_id: 2 },  //item2
    { task_name: 'walk dog', task_id: 3 },    //item3
      
  ]);


  const clickHandler = (task_id) => {
    console.log(task_id)
    setTask((prevTask) => { return prevTask.filter(task => task.task_id != task_id) })
    
  }
  
  const submitHandler = (text) => {
    setTask((prevTask) => { return [{ task_name: text, task_id: Math.random().toString() }, ...prevTask] })
  }
  return (
    <View style={styles.container}>
      <Header />
	  
	  <View style={styles.content}>
	  <ToDoForm submitHandler={submitHandler} />
	  </View>
      

	<View style={styles.list}>
		 <FlatList keyExtractor={(item) => item.task_id} data={task} renderItem={({ item }) => (
        <ToDoList item={item} clickHandler={clickHandler} />

      )} />
	</View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1ee',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  content:{
	  paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
	  flex: 0.25,
	  backgroundColor: 'lightgrey',
    margin : 55,
    width: '100%',
    height: 200,
  },
  list: {
    backgroundColor: 'darkblue',
    fontSize: 20,
    fontWeight: 'bold',
   marginHorizontal: 10,
    marginTop: 20,
    padding: 20,
    width: '100%',

	flex: 3,
  },
 
})