import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>To do List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        width: '150%',
        paddingTop: 30,
        marginTop: 40,
        backgroundColor: 'purple',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
});