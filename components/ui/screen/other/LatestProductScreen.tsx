import { Text, View, StyleSheet } from "react-native";

export default function LatestProductScreen() {
    return(
        <View style={styles.container}>
            <Text>Latest product screen</Text>
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