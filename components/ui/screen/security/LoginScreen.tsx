import { COLORS } from "@/constants/ColorPallet";
import { useState } from "react";
import { Text, View, StyleSheet, Image, ViewComponent, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Icon, TextInput } from "react-native-paper";
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
                <TouchableOpacity style={styles.loginbtn}>
                    <Text style={styles.loginbtnText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.or}>OR</Text>
                <View style={styles.socialLoginWrapper}>
                    <TouchableOpacity style={styles.iconOuter}>
                        <Icon size={20} source={'google'} color={COLORS.background}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconOuter}>
                        <Icon size={20} source={'facebook'} color={COLORS.background}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconOuter}>
                        <Icon size={20} source={'apple'} color={COLORS.background}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconOuter}>
                        <Icon size={20} source={'twitter'} color={COLORS.background}></Icon>
                    </TouchableOpacity>
                
                </View>
                //object destructure(rest operator)
                <TouchableOpacity style={{...styles.loginbtn,backgroundColor:COLORS.darkGray}}>
                    <Text style={styles.loginbtnText}>Register With Email </Text>
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
        backgroundColor: COLORS.lighBlue,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10
    },
    loginbtnText: {
        color: COLORS.background
    },
    or:{
        marginTop: 20,
        textAlign: 'center',
        color: COLORS.darkGray
    },
    socialLoginWrapper:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    iconOuter:{
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