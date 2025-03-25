import { COLORS } from "@/constants/ColorPallet";
import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

export default function DisplayTypeWidget({callBack}:any) {
    const [gridState, setGridState] = useState(true);
    const handlePress = (state: boolean) => {
        setGridState(state);
        callBack({state});
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={() => handlePress(true) }
            style={{ ...styles.button, backgroundColor: gridState ? COLORS.lighBlue : COLORS.darkGray }}>
                <Icon size={25} source={'grid'} color={gridState ? COLORS.background : COLORS.lighBlue} ></Icon>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> handlePress(false)}
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
        justifyContent: 'flex-end',
        marginBottom: 10

    }
});