import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import DisplayTypeWidget from "../shared/DisplayTypeWidget";

export default function HomeProductScreen() {
    const [searchQuery,setSearchQuery] = useState('');
    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <DisplayTypeWidget></DisplayTypeWidget>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
});