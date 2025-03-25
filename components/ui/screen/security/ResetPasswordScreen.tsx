import { COLORS } from "@/constants/ColorPallet";
import { useState } from "react";
import { Text, View, StyleSheet, Image, ViewComponent, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Icon, TextInput } from "react-native-paper";
const logo = require('../../../../assets/logo/logo.jpg');

export default function ResetPasswordScreen({ navigation }: any) {
    const [email, setEmail] = useState('');
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image source={logo} style={styles.logo} resizeMode={'contain'}></Image>
            </View>
            <View style={styles.inputOuter}>
                <View style={styles.formGroup}>
                    <TextInput
                        label="Root Email here"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        mode="outlined"
                    />
                </View>
                <TouchableOpacity
                onPress={() => { navigation.navigate('ResetPasswordVerifyEmail') }} style={styles.loginbtn}>
                    <Text style={styles.loginbtnText}>Verify</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    logoWrapper: {
        alignItems: 'center',
        marginTop: 20
    },
    logo: {
        width: 200,
        height: 60
    },
    inputOuter: {
        width: '90%',
        marginTop: 20,
        marginLeft: '5%',
    },
    formGroup: {
        marginBottom: 10
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginTop: 10,
    },
    forgotPasswordText: {
        color: COLORS.lighBlue,
        textDecorationLine: 'underline'
    },
    loginbtn: {
        marginTop: 20,
        backgroundColor: COLORS.darkGray,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10
    },
    loginbtnText: {
        color: COLORS.background
    },
    socialLoginWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    iconOuter: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS.lighBlue,
        marginHorizontal: 10,
        color: COLORS.background
    },
    iconStyles: {
        color: COLORS.background
    }

});