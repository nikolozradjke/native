import {Button, Text, View, ScrollView, Image, StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import Login from "./Login";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setCart} from "../store/cart/action";

function HomeScreen() {
    const [items, fetchItems] = useState([]);
    const dispatch = useDispatch();
    const {login, cart} = useSelector(state=>state)

    async function getProducts() {
        const results = await axios('https://psp.ge/category/821/products?page=1');

        fetchItems(results.data.data.items);
    }

    useEffect(() => {

        getProducts()

    },[])

    const handlePress = (item) => {
        const cartableItem = {
            name: item.name,
            price: item.price_range.maximum_price.final_price.value,
            image: item.thumbnail.url
        }
        dispatch(setCart(cartableItem));
        console.log(cart);
    }


    const navigation = useNavigation()

    return (
        <ScrollView>
            {login
                ?

                <View style={styles.container}>
                    {items && items.map((item,index) => (
                        <View style={styles.item} key={index}>
                            <Text style={styles.price}>{item.price_range.maximum_price.final_price.value} ₾</Text>
                            <Image
                                style={styles.tinyLogo}
                                source={{ uri: item.thumbnail.url }}
                            />
                            <Text style={styles.text}>{item.name}</Text>
                            <TouchableOpacity onPress={() => handlePress(item)}>
                                <Text>Add</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                :
                <Login />
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    item: {
        width: '100%',
        height: 210,
        marginTop: 15,
        padding: 15,
        borderWidth: 1,
        borderRadius: 5
    },
    tinyLogo: {
        width: '40%',
        height: 100
    },
    text: {
        fontFamily: 'Roboto',
        textAlign: "center",
    },
    price: {
        textAlign: "left",
        marginBottom: 15
    }
});

export default HomeScreen;