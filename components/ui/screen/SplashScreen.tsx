import { COLORS } from "@/constants/ColorPallet";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View, Image } from "react-native";
import appJson from '../../../app.json'
export default function SplashScreen({onFinish}:any) {
const logo = require('../../../assets/logo/logo.jpg');
const progress = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(progress,{
            toValue: 100,
            duration:5000,
            useNativeDriver: false
        }).start(() => {
            onFinish();
        });
    },[onFinish]);
    return(
       <View style={styles.container}>
        <View style={styles.logoWrapper}>
        <Image
        style={styles.logo}
        source={logo}
        resizeMode="contain"
        />
        </View>
       <Text>Loading...</Text>
       <View style={styles.progressContainer}>
        <Animated.View
        style ={[styles.progressbar,
            {width:progress.interpolate({
                inputRange: [0,100],
                outputRange: ['0%','100%']
            })}]
        }
        />
       </View>
       <View style={styles.bottom}>
        <Text>Version:{appJson.expo.version}</Text>
        <Text>From:SnapCart</Text>
       </View>
       </View>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
logoWrapper: {
},
logo:{
   height: 60,
   width:200
},
progressContainer: {
    width: '80%',
    height: 5,
    backgroundColor: COLORS.lightGray,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop:5
},
progressbar: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.lighBlue,
},
bottom:{
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20
}

})