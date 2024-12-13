import {
  Paragraph,
  Spacer,
  TamaguiProvider,
  Theme,
  YStack,
  Button,
} from "tamagui";
import { useFonts } from "expo-font";
import config from "./tamagui.config";
import LoginScreen from "./screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import { Platform } from "react-native";
import VerifyCodeScreen from "./screens/VerifyCodeScreen";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerBackTitleStyle: {
          color: "black",
          fontWeight: "bold",
          paddingLeft: 10,
        },
        headerTintColor: "black",
        headerStyle: {
          backgroundColor: "white",
          shadowColor: "transparent",
          elevation: 1,
        },
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          ...(Platform.OS === "ios"
            ? { headerBackTitle: "Sign Up", title: "" }
            : { title: "Sign Up" }),
        }}
      />
      <Stack.Screen
        name="forgotPassword"
        component={ForgotPasswordScreen}
        options={{
          ...(Platform.OS === "ios"
            ? { headerBackTitle: "Forgot Password", title: "" }
            : { title: "Forgot Password" }),
        }}
      />
      <Stack.Screen
        name="VerifyCode"
        component={VerifyCodeScreen}
        options={{
          ...(Platform.OS === "ios"
            ? { headerBackTitle: "Verify Code", title: "" }
            : { title: "Verify Code" }),
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <Theme>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>
  );
}
