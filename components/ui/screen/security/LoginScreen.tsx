import { COLORS } from "@/constants/ColorPallet";
import { useState } from "react";
import { Text, View, StyleSheet, Image, ViewComponent, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
const logo = require('../../../../assets/logo/logo.jpg');

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(true);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.logoWrapper}>
                <Image source={logo} style={styles.logo} resizeMode={'contain'}></Image>
            </View>
            <View style={styles.inputOuter}>
                <View style={styles.formGroup}>
                    <TextInput
                        label="Enter Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        mode="outlined"
                    />
                </View>
                <View style={styles.formGroup}>
                    <TextInput
                        label="Enter Password"
                        secureTextEntry={passwordVisible}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        mode="outlined"
                        right={<TextInput.Icon icon={passwordVisible ? 'eye-off' : 'eye'}
                            onPress={() => setPasswordVisible(!passwordVisible)}
                            size={20} />}
                    />
                </View>
                <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forgot Password</Text>
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
    }

});