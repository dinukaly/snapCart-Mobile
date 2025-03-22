import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTabNavigation from '../tab-navigation/HomeBottomTabNavigation';
import CustomerCareScreen from '@/components/ui/screen/other/CustomerCareScreen';
import DailyDealsScreen from '@/components/ui/screen/other/DailyDealsScreen';
import LatestProductScreen from '@/components/ui/screen/other/LatestProductScreen';
import MyOrderScreen from '@/components/ui/screen/other/MyOrderScreen';
import NotificationScreen from '@/components/ui/screen/other/NotificationScreen';
import ProfileScreen from '@/components/ui/screen/other/ProfileScreen';
import SettingsScreen from '@/components/ui/screen/other/SettingsScreen';
import VoucherScreen from '@/components/ui/screen/other/VoucherScreen';
import LoginScreen from '@/components/ui/screen/security/LoginScreen';
const Stack = createStackNavigator();
export default function StackNavigator() {
     return (
          <Stack.Navigator>
               <Stack.Screen name={'Process'}
                    options={{ headerLeft: () => null, headerShown: false }}
                    component={HomeBottomTabNavigation} />
               <Stack.Screen name={'CustomerCare'}
                    options={{ title: 'Customer Care' }}
                    component={CustomerCareScreen} />
               <Stack.Screen name={'DailyDeals'}
                    options={{ title: 'Daily Deals Here' }}
                    component={DailyDealsScreen} />
               <Stack.Screen name={'latestProduct'}
                    options={{ title: 'Latest Product Here' }}
                    component={LatestProductScreen} />
               <Stack.Screen name={'MyOrders'}
                    options={{ title: 'My Orders here' }}
                    component={MyOrderScreen} />
               <Stack.Screen name={'Notifications'}
                    options={{ title: 'Notifications here' }}
                    component={NotificationScreen} />
               <Stack.Screen name={'Profile'}
                    options={{ title: 'Profile Screen here' }}
                    component={ProfileScreen} />
               <Stack.Screen name={'Settings'}
                    options={{ title: 'Settings Screen here' }}
                    component={SettingsScreen} />
               <Stack.Screen name={'Voucher'}
                    options={{ title: 'Voucher Screen here' }}
                    component={VoucherScreen} />
               <Stack.Screen name={'Login'}
                    options={{ title: 'Login here' }}
                    component={LoginScreen} />
          </Stack.Navigator>
     )
}