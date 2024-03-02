
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function ToDoForm({ submitHandler }) {
    const [task, setTask] = useState('');

    const changeTaskHandler = (val) => {
        setTask(val);
    }

    const handleSubmit = () => {
        // Validate input if needed before submitting
        submitHandler(task);  // Pass task directly
        setTask('');  // Clear the input field after submitting
    }

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder='Enter Task'
                value={task}
                onChangeText={(val) => changeTaskHandler(val)}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        paddingHorizontal: 20,
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        marginTop: 8,
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        paddingTop: 15,
        marginTop: 15,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});
