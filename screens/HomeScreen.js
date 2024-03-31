import MainLayout from '../layouts/MainLayouts';
import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <MainLayout>
            <View style={styles.container}>
                <Button title="Home" onPress={() => navigation.navigate("Contact")} />
            
            </View>
        </MainLayout>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 50,
        fontWeight: 'bold',

    }
});
