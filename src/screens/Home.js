import {Button, Text, View, ScrollView, Image, StyleSheet } from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import axios from "axios";

function HomeScreen() {
    const [items, fetchItems] = useState([]);

    async function getProducts() {
        const results = await axios('https://psp.ge/category/821/products?page=1');

        fetchItems(results.data.data.items);
    }

    useEffect(() => {

        getProducts()

    },[])

    const navigation = useNavigation()

    return (
        <ScrollView>
            <Button title={'About'} onPress={() => {
                navigation.navigate('About')
            }} />
            <View style={styles.container}>
                {items && items.map((item,index) => (
                    <View style={styles.item} key={index}>
                        <Text style={styles.text}>{item.price_range.maximum_price.final_price.value} ₾</Text>
                        <Image
                            style={styles.tinyLogo}
                            source={{ uri: item.thumbnail.url }}
                        />
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: '100%',
        height: 100,
        borderRadius: 12
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    item: {
        width: '50%',
        height: 200,
        marginTop: 15,
        padding: 15,
        backgroundColor: "beige",
        borderWidth: 1,
        borderRadius: 5
    },
    text: {
        textAlign: "center"
    }
});

export default HomeScreen;