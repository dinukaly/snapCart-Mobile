import { Text, View, StyleSheet } from "react-native";

export default function ProfileScreen() {
    return(
        <View style={styles.container}>
            <Text>Profile screen</Text>
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