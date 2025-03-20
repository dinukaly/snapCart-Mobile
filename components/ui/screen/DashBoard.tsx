import { StyleSheet, Text } from "react-native";
export default function DashBoard() {
    return(
        <Text style={styles.homeText}>Home</Text>
    )
}

const styles = StyleSheet.create({
homeText:{
    color: 'red',
}
})