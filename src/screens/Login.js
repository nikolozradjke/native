import {StyleSheet, View, TextInput, TouchableOpacity, Text, Image, ScrollView} from "react-native";
import { StatusBar } from "expo-status-bar";
import {useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../store/login/action";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [access, setAccess] = useState(0);

    const dispatch = useDispatch();
    const {login} = useSelector(state=>state)

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ";
    async function auth() {
        const creds = {email: email, password: password};
        const results = await axios.post('http://borjomi.loremipsum.ge/api/login', creds);
console.log(results);
        if(results.data.token === token){
            setAccess(1);
            dispatch(setAuth(access));
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: "http://csrblog.ge/wp-content/uploads/2020/04/vendoo-300x244.png" }} />
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={auth}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    image: {
        marginBottom: 40,
        width: '100%',
        height: 100
    },

    inputView: {
        backgroundColor: "#5a7af6",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#5776d7",
    },
});

export default Login;