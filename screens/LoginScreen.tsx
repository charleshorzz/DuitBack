import React, { useState } from "react";
import {
  Paragraph,
  YStack,
  Button,
  Form,
  Spinner,
  Input,
  Image,
  Label,
  XStack,
} from "tamagui";
import {
  ImageBackground,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage, AppFormField, SubmitButton } from "../components/forms";
import { KeyboardAvoidingView } from "react-native";

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().required().min(9).max(10).label("Phone Number"),
  password: Yup.string().required().min(8).label("Password"),
});

import { Link, NavigationProp } from "@react-navigation/native";

const LoginScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const handleOnClick = () => {
    setPasswordVisible(!passwordVisible); // Toggle the state
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../assets/background.png")} // Replace with your background image
        style={styles.background} // Apply background image styles
      >
        <Formik
          initialValues={{ phoneNumber: "", password: "" }}
          onSubmit={(values: any) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <>
              <Form
                alignItems="center"
                justifyContent="flex-start"
                marginTop="$12"
                minWidth="100%"
                minHeight="100%"
                gap="$2"
                padding="$5"
              >
                <Image
                  source={require("../assets/logo.png")}
                  style={{ width: 150, height: 150 }}
                />
                <Paragraph fontSize="$8" fontWeight="bold" color="#1E32A2">
                  DuitBack
                </Paragraph>
                <YStack
                  minHeight={110}
                  minWidth="100%"
                  overflow="hidden"
                  margin="$3"
                  space="$2"
                  padding="$2"
                >
                  <YStack>
                    <Label
                      htmlFor="phoneNumber"
                      fontWeight="bold"
                      fontSize="$4"
                      color="black"
                    >
                      Phone Number
                    </Label>
                    <XStack
                      minWidth="100%"
                      backgroundColor="white"
                      alignItems="center"
                      borderRadius={10}
                      padding="$1"
                      paddingLeft="$2"
                    >
                      <Label marginRight="$1"></Label>
                      <Image
                        source={require("../assets/flag.png")}
                        style={{ width: 20, height: 20 }}
                      />
                      <Label marginRight="$1"></Label>
                      <Label color="black" fontSize="$4">
                        +60
                      </Label>
                      <Label color="lightgrey" fontSize="$4" paddingLeft="$2">
                        |
                      </Label>
                      <AppFormField
                        placeholder="12 345 6789"
                        id="email"
                        backgroundColor="white"
                        color="black"
                        flex={1}
                        name="phoneNumber"
                        fontWeight={600}
                        borderColor="white"
                        borderTopWidth={0}
                        borderBottomWidth={0}
                        borderLeftWidth={0}
                        borderRightWidth={0}
                        keyboardType="phone-pad"
                      />
                    </XStack>
                    <ErrorMessage
                      error={errors.phoneNumber}
                      visible={touched.phoneNumber}
                    />
                  </YStack>
                  <YStack>
                    <Label
                      htmlFor="password"
                      fontWeight="bold"
                      fontSize="$4"
                      color="black"
                    >
                      Password
                    </Label>
                    <XStack
                      backgroundColor="white"
                      borderRadius={10}
                      alignItems="center"
                    >
                      <AppFormField
                        placeholder="Enter Password"
                        backgroundColor="white"
                        color="black"
                        name="password"
                        fontWeight={400}
                        borderTopWidth={0}
                        borderBottomWidth={0}
                        borderLeftWidth={0}
                        borderRightWidth={0}
                        borderColor="white"
                        secureTextEntry={!passwordVisible}
                        flex={0.92}
                        textContentType="password"
                        //   borderWidth={0}
                      />
                      <Icon
                        size={18}
                        color="black"
                        name={passwordVisible ? "eye" : "eye-slash"}
                        onPress={handleOnClick}
                      />
                    </XStack>
                    <ErrorMessage
                      error={errors.password}
                      visible={touched.password}
                    />

                    <Link
                      screen="forgotPassword"
                      style={{
                        width: "37%",
                        paddingTop: "5%",
                        paddingLeft: "1%",
                      }}
                    >
                      <Paragraph
                        fontSize="$4"
                        fontWeight="bold"
                        color="#1E32A2"
                        paddingTop="$5"
                      >
                        Forgot Password ?
                      </Paragraph>
                    </Link>
                  </YStack>
                </YStack>
                <SubmitButton
                  title="Log In"
                  size="$4"
                  fontWeight="bold"
                  borderRadius="$4"
                  marginTop="$4"
                  backgroundColor="#1E32A2"
                  color="white"
                  width="100%"
                  onPress={() => navigation.navigate("Home")}
                />
                <XStack space="$2" alignItems="center" paddingTop="$6">
                  <Paragraph fontSize="$4" fontWeight="bold" color="black">
                    New User?
                  </Paragraph>
                  <Link screen="SignUp">
                    <Paragraph
                      fontSize="$4"
                      fontWeight="bold"
                      color="#1E32A2"
                      style={{ textDecorationLine: "underline" }}
                      borderWidth={1}
                    >
                      Sign Up Here
                    </Paragraph>
                  </Link>
                </XStack>
              </Form>
            </>
          )}
        </Formik>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Makes the background cover the entire screen
    resizeMode: "cover", // Ensures the image is not stretched
  },
});

export default LoginScreen;
