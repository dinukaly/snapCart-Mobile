import { Text, View, StyleSheet } from "react-native";

export default function HomePageScreen() {
    return(
        <View style={styles.container}>
            <Text>Home page screen</Text>
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