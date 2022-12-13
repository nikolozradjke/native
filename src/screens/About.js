import {Text, View, ScrollView, Image} from "react-native";

function AboutScreen(){
    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: '100%', heigth: 250}}
                       source={{
                           uri: 'https://reactnative.dev/img/tiny_logo.png',
                       }}
                />
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>
        </ScrollView>
    )
}

export default AboutScreen;