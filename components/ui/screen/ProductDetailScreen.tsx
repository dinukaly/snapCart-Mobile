import { COLORS } from "@/constants/ColorPallet";
import { useState } from "react";
import { Image } from "react-native";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";
import ReviewWidget from "./home/widget/ReviewWidget";
import ProductListViewWidget from "./home/widget/ProductListViewWidget";


export default function ProductDetailScreen() {
    const productImages=[
        {uri:'data:image/jpeg;base64,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'},
        {uri:'data:image/jpeg;base64,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'},
        {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTFh4xIn7ZtHbNEHrdxm3EOFghB66KCtrmA&s'},
        {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvq2koBpZt4iBmcmg2DTwXlVV03HreMDLT7g&s'},
    ];
    const [primaryImage, setPrimaryImage] = useState(productImages[0].uri);
    const [status, setStatus] = useState(true);
   

    return (
        <ScrollView style={styles.container}>
            <View style={styles.top}>
                <View style={styles.imagebg}>
                <Image source={{uri:primaryImage
                }} style={styles.image } resizeMode={'contain' }></Image>
                </View>

                <View style={styles.prodcutImageList}
                 
                >

                    {productImages.map((item, index)=>(
                        <TouchableOpacity  key={index} style={{width:80, height:60, borderWidth:1, borderRadius:5}}
                        onPress={() => setPrimaryImage(item.uri)}
                       >
                            <Image source={{uri:item.uri}} style={styles.displayImage } resizeMode={'contain' }></Image>
                        </TouchableOpacity>
                    ))}
                </View>

             
            </View>
            <View style={styles.details}>
                <Text style={{fontSize:20, fontWeight:'bold', marginTop:10}}>Infusion Training Shoes</Text>
                <Text style={{}}>The all-new Infusion training shoes take inspiration from our renowned Fuse training shoes but tweaks it with a slimmer design language. Like the original Fuse, though, the cu...</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{color:COLORS.primary, marginTop:10,fontSize:15, marginRight:10}}>250 UAD</Text>
                <Text style={{color:COLORS.primary, marginTop:10,fontSize:15 , textDecorationLine:'line-through'}}>250 UAD</Text>
                </View>
               
            </View>
            <View style={{marginTop:20, flexDirection:'row', justifyContent:'flex-end'}}>
            <TouchableOpacity style={{...styles.btn,backgroundColor:COLORS.primary,marginRight:10}}>
                  <Text style={{color:'white'}}>Buy Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.btn,backgroundColor:COLORS.lighBlue}}>
                    <Icon size={30} source={'cart-outline'} color={'white'}></Icon>
                </TouchableOpacity>
            </View>
            <View style={styles.tab}>
                <TouchableOpacity 
                onPress={()=>setStatus(true)}
                style={{...styles.tabButton,backgroundColor:status ? COLORS.darkGray : COLORS.lighBlue}}>
                    <Text style={{color:status ? COLORS.lighBlue : COLORS.darkGray}}>Reviews</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>setStatus(false)}
                style={{...styles.tabButton,backgroundColor:status ? COLORS.lighBlue : COLORS.darkGray}}>
                    <Text style={{color:status ? COLORS.darkGray : COLORS.lighBlue}}>Recommended</Text>
                </TouchableOpacity>
            </View>
            {
                status ?(
                    <View>
                    <ReviewWidget/>
                    <ReviewWidget/>
                    </View>
                ):(
                    <ProductListViewWidget/>
                )
            }
            </ScrollView>
           
    )
}

const styles = StyleSheet.create({
    tabButton:{
        alignItems:'center',
        justifyContent:'center',
        height:35,
        width:100
        },
    tab:{
        width:'100%',
        marginTop:10,
        flexDirection:'row',
        borderBottomWidth:1

    },
    btn:{
        width:120,
        height:35,
        backgroundColor:COLORS.lighBlue,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    details:{},
    displayImage: {
      height:'100%',
      width:'100%',  
    },
    prodcutImageList:{
      width:'100%',
      marginTop:10,
      height:80,  
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
      borderBottomWidth:1
    },
    image:{
        height:150,

    },
    imagebg: {
        backgroundColor:COLORS.background
    },
    top: {
        width: '100%',

    },
    newContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: "space-evenly"
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    }
});