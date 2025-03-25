import { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import DisplayTypeWidget from "../shared/DisplayTypeWidget";
import ProductGridViewWidget from "./widget/ProductGridViewWidget";
import ProductListViewWidget from "./widget/ProductListViewWidget";

export default function HomeBookmarkScreen() {
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
                     <ProductGridViewWidget/>
                     <ProductGridViewWidget/>
                     <ProductGridViewWidget/>
                     <ProductGridViewWidget/>
                     <ProductGridViewWidget/>
                 </ScrollView>
            ):(
                <ScrollView
                showsVerticalScrollIndicator={false}>
                    <ProductListViewWidget/>
                    <ProductListViewWidget/>
                    <ProductListViewWidget/>
                    <ProductListViewWidget/>
                    <ProductListViewWidget/>
                    <ProductListViewWidget/>
                    <ProductListViewWidget/>
                    <ProductListViewWidget/>
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