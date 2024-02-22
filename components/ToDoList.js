import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function TodoList({ item, clickHandler }) {
    return (
        <Pressable onPress={() => clickHandler(item.task_id)}>
        <View style={styles.item}>
         
          <Text style={styles.text}>{item.task_name}</Text>
        </View>
      </Pressable>
      

  
        
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'grey',
        marginTop: 12,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 14,
        borderStyle: 'solid',
		
    },
})