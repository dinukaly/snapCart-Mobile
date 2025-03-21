import { Text, View, StyleSheet } from "react-native";

export default function HomeMenuScreen() {
    return(
        <View style={styles.container}>
            <Text>Home menu screen</Text>
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