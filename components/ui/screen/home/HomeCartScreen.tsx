import { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import DisplayTypeWidget from "../shared/DisplayTypeWidget";
import ProductGridViewWidget from "./widget/ProductGridViewWidget";
import ProductListViewWidget from "./widget/ProductListViewWidget";
import CartGridViewWidget from "./widget/CartGridViewWidget";
import CartListViewWidget from "./widget/CartListViewWidget";

export default function HomeCartScreen() {
    const [searchQuery,setSearchQuery] = useState('');
    const [isGridEnabled,setIsGridEnabled] = useState(true);
    const manageGridView = ({state}:any) => {
        setIsGridEnabled(state);
    }
    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />
            <DisplayTypeWidget callBack={manageGridView}/>
            {isGridEnabled?(
                 <ScrollView
                 showsVerticalScrollIndicator={false}>
                    <CartGridViewWidget/>
                 </ScrollView>
            ):(
                <ScrollView
                showsVerticalScrollIndicator={false}>
              <CartListViewWidget/>
                </ScrollView>
            )}
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
});