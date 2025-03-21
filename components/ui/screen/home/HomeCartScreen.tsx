import { Text, View, StyleSheet } from "react-native";

export default function HomeCartScreen() {
    return(
        <View style={styles.container}>
            <Text>Home cart screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});