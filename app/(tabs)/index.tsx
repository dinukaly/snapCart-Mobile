import DashBoard from '@/components/ui/screen/DashBoard';
import SplashScreen from '@/components/ui/screen/SplashScreen';
import { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  return (
   <View style={styles.container}>
    {true?(
      <SplashScreen onFinish={() => setLoading(false)}/>
    ):(
      <DashBoard/>
    )}
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,

  }
});
