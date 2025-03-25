import { Text, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyOrderScreen from "@/components/ui/screen/other/MyOrderScreen";
import RefundScreen from "@/components/ui/screen/other/orders/RefundScreen";
import ReturnOrderScreen from "@/components/ui/screen/other/orders/ReturnOrderScreen";

const TopTab = createMaterialTopTabNavigator();

export default function MyOrdersTopTabNavigator() {
    return(
        <TopTab.Navigator>
            <TopTab.Screen name={'MyOrder'} options={{title: 'My Order'}} component={MyOrderScreen}/>
            <TopTab.Screen name={'Refund'} options={{title: 'Refund'}} component={RefundScreen}/>
            <TopTab.Screen name={'Return'} options={{title: 'Return'}} component={ReturnOrderScreen}/>


        </TopTab.Navigator>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    }
});

