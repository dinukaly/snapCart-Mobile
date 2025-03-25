import { Text, View, StyleSheet } from "react-native";

export default function MyOrderScreen() {
    return(
        <View style={styles.container}>
            <Text>My order screen</Text>
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