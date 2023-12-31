import React, { useState, useEffect, useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ColorSchemeName,
} from "react-native";
import {
  LoginPage,
  SignUp,
  OTPScreen
} from "../screens/";
import { Dashboard } from "../screens/Dashboard";


export const StackNavigator = (navigation) => {
  const Stack = createNativeStackNavigator();


  console.log("After Login Data");

  const initialRoute =
    "LoginPage";

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        animation: "slide_from_left",
      }}
      initialRouteName={initialRoute}
    >
      <>
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={({ navigation, route }) => ({
            gestureEnabled: true,
            animation: "fade_from_bottom",
          })}
        />

        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />

        {/* <Stack.Screen
          name="LikeScreen"
          component={LikeScreen}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: "#ffffff",
            },

            gestureEnabled: true,
            // animation: "fade_from_bottom",
            headerShadowVisible: false,
            headerTintColor: "#FFFFFF",
            // headerTitle: "",
            headerLeft: () => {
              return (
                <Pressable
                  onPress={() => navigation.navigate("BottomBar")}
                  hitSlop={{ left: 25, right: 25, top: 10, bottom: 10 }}
                >
                  <BackB />
                </Pressable>
              );
            },
          })}
        /> */}
      </>
    </Stack.Navigator>
  );
};

export default function AppNavigator({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return <StackNavigator />;
}
