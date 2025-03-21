import { Text, View, StyleSheet } from "react-native";

export default function CustomerCareScreen(){
    return(
        <View style={styles.container}>
            <Text>Customer care screen</Text>
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