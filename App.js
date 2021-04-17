import "react-native-gesture-handler";
import React, { useEffect, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChatScreen from "./screens/AddChatScreen";
import ChatScreen from "./screens/ChatScreen";
import { auth } from "./firebase";

const Stack = createStackNavigator();
const globalSreenOptions = {
  headerStyle: {
    backgroundColor: "#b34180",
  },
  headerTitleStyle: {
    color: "#f4f9f9",
  },
  headerTintColor: "white",
  headerBackTitle: "Backk",
};

function App() {
  // useLayoutEffect(() => {

  // }, []);
  const initialScreen = () => {
    const initScreen = auth ? "Home" : "Login";
    return initScreen;
  };

  const initScreen = initialScreen();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initScreen}
        screenOptions={globalSreenOptions}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9ddfd3",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
