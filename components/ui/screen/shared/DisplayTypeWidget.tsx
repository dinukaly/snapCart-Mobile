import { COLORS } from "@/constants/ColorPallet";
import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

export default function DisplayTypeWidget() {
    const [gridState, setGridState] = useState(true);
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={() => setGridState(true)}
            style={{ ...styles.button, backgroundColor: gridState ? COLORS.lighBlue : COLORS.darkGray }}>
                <Icon size={25} source={'grid'} color={gridState ? COLORS.background : COLORS.lighBlue} ></Icon>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> setGridState(false)}
            style={{ ...styles.button, backgroundColor: gridState ? COLORS.darkGray : COLORS.lighBlue }}>
                <Icon size={25} source={'menu'} color={gridState ? COLORS.lighBlue : COLORS.background}></Icon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'

    }
});