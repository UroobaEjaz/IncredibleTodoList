import MainLayout from '../layouts/MainLayouts';
import React from 'react';
import { Button, View} from 'react-native';
import { StyleSheet, Text } from 'react-native'


function AboutScreen({ navigation }) {


    return (
        <MainLayout>
            <View style={styles.container}>
                <Button title='About' onPress={() => navigation.navigate("About")} />
                <Text style={styles.title}> This is a To-Do App for making a list</Text>
            </View>
        </MainLayout> // Added closing tag for MainLayout
    );
}

export default AboutScreen;  // export the HomeScreen component so that it can be imported and used in other components


const styles = StyleSheet.create({
    container: {
        flex: 0.25,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }
});