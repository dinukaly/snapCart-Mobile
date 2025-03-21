import { COLORS } from "@/constants/ColorPallet";
import { Text, View, StyleSheet } from "react-native";
import { Menu } from 'react-native-paper';
import CustomerCareScreen from "../other/CustomerCareScreen";

export default function HomeMenuScreen({navigation}:any) {
    return (
        <View style={styles.container}>
            <Menu.Item leadingIcon="redo" onPress={() => { navigation.navigate('MyOrders')}} title="My Orders" />
            <Menu.Item leadingIcon="undo" onPress={() => {navigation.navigate('Settings') }} title="Settings" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {navigation.navigate('DailyDeals') }} title="Daily Deals" />
            <Menu.Item leadingIcon="content-copy" onPress={() => { navigation.navigate('Voucher')}} title="Vouchers" disabled />
            <Menu.Item leadingIcon="content-paste" onPress={() => { navigation.navigate('Notifications')}} title="Notifications" />
            <Menu.Item leadingIcon="content-paste" onPress={() => { navigation.navigate('latestProduct')}} title="Latest Products" />
            <Menu.Item leadingIcon="content-paste" onPress={() => { navigation.navigate('Profile')}} title="Profile" />
            <Menu.Item leadingIcon="content-paste" onPress={() => {navigation.navigate('CustomerCare')}} title="Customer Care" />
            <Menu.Item leadingIcon="content-paste" onPress={() => { }} title="Logout" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});