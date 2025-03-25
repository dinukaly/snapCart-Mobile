import { Text, View, StyleSheet } from "react-native";

export default function ReturnOrderScreen() {
    return(
        <View style={styles.container}>
            <Text>Return Screen</Text>
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