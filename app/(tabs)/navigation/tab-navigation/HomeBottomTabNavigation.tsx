import HomeBookmarkScreen from "@/components/ui/screen/home/HomeBookmarkScreen";
import HomeCartScreen from "@/components/ui/screen/home/HomeCartScreen";
import HomeMenuScreen from "@/components/ui/screen/home/HomeMenuScreen";
import HomePageScreen from "@/components/ui/screen/home/HomePageScreen";
import HomeProductScreen from "@/components/ui/screen/home/HomeProductScreen";
import { COLORS } from "@/constants/ColorPallet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

const logo = require('../../../../assets/logo/logo.jpg');
const Tab = createBottomTabNavigator();
export default function HomeBottomTabNavigation({ navigation }: any) {
    return (
        <Tab.Navigator
            initialRouteName={'Home'}
            screenOptions={({ route, focused }: any) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Menu') {
                        iconName = focused ? 'menu' : 'menu-outline';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Bookmarks') {
                        iconName = focused ? 'bookmark' : 'bookmark-outline';
                    } else if (route.name === 'Products') {
                        iconName = focused ? 'list' : 'list-outline';
                    }
                    // @ts-ignore
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: COLORS.lighBlue,
                tabBarInactiveTintColor: COLORS.darkGray
            })}
        >

            <Tab.Screen name={'Menu'} component={HomeMenuScreen} />
            <Tab.Screen name={'Cart'} component={HomeCartScreen} />
            <Tab.Screen name={'Home'}
                component={HomePageScreen}
                options={{
                    headerLeft: () => (
                        <Image source={logo} resizeMode={'contain'}
                        style={{width: 80, height: 80, marginLeft: 10}}

                        />
                    ),
                    headerTitle:'',
                }}
            />

            <Tab.Screen name={'Bookmarks'} component={HomeBookmarkScreen} />
            <Tab.Screen name={'Products'} component={HomeProductScreen} />
        </Tab.Navigator>
    )
}