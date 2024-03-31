import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import Header from './components/Header.js';
import ToDoList from './components/ToDoList.js';
import ToDoForm from './components/TodoForm.js';
import HomeScreen from './screens/HomeScreen.js';
import AboutScreen from './screens/AboutScreen.js';
import ContactScreen from './screens/ContactScreen.js';


const Stack = createStackNavigator();

export default function App() {

  const [tasks, setTasks] = useState([
    { task_name: 'Do laundry', task_id: '1' },
    { task_name: 'Go to gym', task_id: '2' },
    { task_name: 'Walk dog', task_id: '3' },
  ]);

  const clickHandler = (task_id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.task_id !== task_id));
  };

  const addTask = (taskText) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { task_name: taskText, task_id: (prevTasks.length + 1).toString() },
    ]);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <ToDoForm addTask={addTask} />
        </View>
        <View style={styles.list}>
          <FlatList
            keyExtractor={(item) => item.task_id}
            data={tasks}
            renderItem={({ item }) => <ToDoList item={item} clickHandler={clickHandler} />}
          />
        </View>
      </View>

      <Stack.Navigator screenOptions={{
        tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: true,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'red',
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: () => (<Ionicons name='home' size={20} />)
        }} />
        <Stack.Screen name="About" component={AboutScreen} options={{
          tabBarLabel: 'about',
          tabBarIcon: () => (<Ionicons name='person' size={20} />)
        }} />
        <Stack.Screen name="Contact" component={ContactScreen} options={{
          tabBarLabel: 'contact',
          tabBarIcon: ({color}) => (<Ionicons name='camera-sharp' size={20} color={color} />)
        }} />
      
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 40,
  },
  content: {
    paddingTop: 6,
    paddingLeft: 6,
    paddingRight: 6,
    flex: 0.4,
    backgroundColor: 'lightyellow',
    margin: 55,
    width: '100%',
    height: 300,
  },
  list: {
    backgroundColor: 'lightblue',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 20,
    padding: 20,
    width: '100%',
    flex: 3,
  },
});
