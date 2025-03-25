import { COLORS } from "@/constants/ColorPallet";
import { Text, View, StyleSheet, Image, Touchable, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

export default function ProductListViewWidget({navigation}:any) {
    return(
        <TouchableOpacity 
        onPress={()=>{navigation.navigate('ProdcutDetails')}}
        style={styles.container}>
            <View style={styles.imageView}>
                <TouchableOpacity style={styles.bookmarkButton}>
                    <Icon size={25} source={'heart-outline'} color={COLORS.lighBlue} ></Icon>
                </TouchableOpacity>
                <Image source={{uri:'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                 style={styles.image} resizeMode={'contain'} />
            </View>
            <View style={{flex:1,padding:8}}>
                <Text style={styles.name}> Head Massage Balm</Text>
                <Text style={styles.price}> LKR 2500 </Text>
                <Text style={styles.qty}> QTY:15 </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bookmarkButton: {
        width:40,
        height:40,
        backgroundColor:COLORS.background,
        borderRadius:50,
        position:'absolute',
        top:10,
        right:10,
        justifyContent:'center',
        alignItems:'center',
        zIndex:1
    },
    qty:{
      textAlign:'right',

    },
    price:{
        fontSize:16,
        lineHeight:16,
        color:COLORS.lighBlue
    },
    name:{
        fontSize:20,
        lineHeight:20,
        marginTop:8
    },
    image:{
        width: '100%',
        height: '100%',
    },
    imageView: {
        width:150,
        height:80,
        backgroundColor:COLORS.background,
        padding:3
    },
    container:{
       width: '100%',
       padding:8,
       backgroundColor: COLORS.lightGray,
       borderRadius:10,
       marginBottom:5,
       flexDirection:'row'
    }
});