import { COLORS } from "@/constants/ColorPallet";
import { useState } from "react";
import { Text, View, StyleSheet, Image, Touchable, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

export default function ReviewWidget() {


    return (
        <View style={{ backgroundColor: COLORS.background }}>
            <Text style={{ textAlign: 'justify' }}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti sequi libero itaque molestiae nulla perferendis aut ipsum repellendus minus autem mollitia illo possimus hic voluptas, aspernatur quam quae velit!</Text>
        </View>
    )
}
const styles = StyleSheet.create({

});