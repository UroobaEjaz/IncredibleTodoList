import MainLayout from '../layouts/MainLayouts';
import React from 'react';
import { Button, View } from 'react-native';
import { StyleSheet, Text} from 'react-native'


function ContactScreen({ navigation }) {


    return (
        <MainLayout>
            <View style={styles.container}>
                <Button title='Go to Contact' onPress={() => navigation.navigate("About")} />
                <Text style={styles.title}> My SAIT ID: Urooba.Ejaz@edu.sait.ca</Text>
            </View>
        </MainLayout> // Added closing tag for MainLayout
    );
}

export default ContactScreen;  // export the HomeScreen component so that it can be imported and used in other components

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
    }
});