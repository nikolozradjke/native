import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home";
import AboutScreen from "./src/screens/About";
import {useState} from "react";
import Login from "./src/screens/Login";
import axios from "axios";
import {Provider} from "react-redux";
import {createStore} from "redux";
import allReducers from "./src/store";


export default function App() {
  const Stack = createNativeStackNavigator();

  const store = createStore(allReducers);

  return (
      <Provider store={store}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="About" component={AboutScreen} />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  );
}

