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
import MyOrdersTopTabNavigator from '../tab-navigation/MyOrdersTopTabNavigator';
import SignUpScreen from '@/components/ui/screen/security/SignUpScreen';
import SignUpVerifyEmailScreen from '@/components/ui/screen/security/SignUpVerifyEmailScreen';
import ResetPasswordScreen from '@/components/ui/screen/security/ResetPasswordScreen';
import ResetPasswordVerifyEmailScreen from '@/components/ui/screen/security/RestPasswordVerifyEmailScreen';
import ChangePasswordScreen from '@/components/ui/screen/security/ChangePasswordScreen';
import ProductDetailScreen from '@/components/ui/screen/ProductDetailScreen';
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
                    component={MyOrdersTopTabNavigator} />
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
                    options={{ title: 'Voucher Screen here'}}
                    component={VoucherScreen} />
               <Stack.Screen name={'Login'}
                    options={{ title: 'Login here' }}
                    component={LoginScreen} />
               <Stack.Screen name={'Signup'}
                    options={{ title: 'Register here' }}
                    component={SignUpScreen} />
               <Stack.Screen name={'SignupVerifyEmail'}
                    options={{ title: 'Verify your email' }}
                    component={SignUpVerifyEmailScreen} />
               <Stack.Screen name={'ResetPasswordOtp'}
                    options={{ title: 'Reset Password Otp' }}
                    component={ResetPasswordScreen} />
               <Stack.Screen name={'ResetPasswordVerifyEmail'}
                    options={{ title: 'Verify Email' }}
                    component={ResetPasswordVerifyEmailScreen} />
               <Stack.Screen name={'ChangePassword'}
                    options={{ title: 'Change Password' }}
                    component={ChangePasswordScreen} />
                     <Stack.Screen name={'ProdcutDetails'}
                    options={{ title: 'Product Details' }}
                    component={ProductDetailScreen} />
          </Stack.Navigator>

     )
}