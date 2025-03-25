
import { COLORS } from "@/constants/ColorPallet";
import { useState } from "react";
import { Text, View, StyleSheet, Image, Touchable, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";

export default function CartListViewWidget() {
     const [qty, setQty] = useState(0);
        const changeQty = (value: number) => {
            if (value <= 0) {
                return;
            }
            setQty(value);
        }
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageView}>
                <TouchableOpacity style={styles.bookmarkButton}>
                    <Icon size={25} source={'heart-outline'} color={COLORS.lighBlue} ></Icon>
                </TouchableOpacity>
                <Image source={{uri:'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
                 style={styles.image} resizeMode={'contain'} />
            </View>
            <View style={{flex:1,padding:8}}>
                <Text style={styles.name}> Head Massage Balm</Text>
               <View style={styles.buttonBar}>
                                   <TouchableOpacity
                                       onPress={() => changeQty(qty - 1)}
                                       style={styles.qtyButton}>
                                       <Icon size={20} source={'minus'} color={COLORS.darkGray}></Icon>
                                   </TouchableOpacity>
               
                                   <TouchableOpacity style={styles.qtyButton}>
                                       <Text style={styles.qty}>{qty}</Text>
                                   </TouchableOpacity>
               
                                   <TouchableOpacity
                                       onPress={() => changeQty(qty + 1)}
                                       style={styles.qtyButton}>
                                       <Icon size={20} source={'plus'} color={COLORS.darkGray}></Icon>
                                   </TouchableOpacity>
                               </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    qty: {
        fontWeight: 'bold',
    },
    buttonBar: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    qtyButton: {
        width: 25,
        height: 25,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: COLORS.darkGray,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2
    },
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