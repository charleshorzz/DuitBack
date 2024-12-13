import React, { useState } from "react";
import { Paragraph, YStack, Form, Label, XStack } from "tamagui";
import {
  ImageBackground,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage, AppFormField, SubmitButton } from "../components/forms";
import { NavigationProp } from "@react-navigation/native";
import BackgroundScreen from "../components/BackgroundScreen";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required("Password is required").label("Password"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .label("Confirm Password"),
});

const SignUpScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleOnClick = () => {
    setPasswordVisible(!passwordVisible); // Toggle the state
  };

  const handleOnClickConfirm = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible); // Toggle the state
  };

  return (
    <BackgroundScreen>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            email: "",
          }}
          onSubmit={(values: any) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <>
              <Form
                alignItems="center"
                justifyContent="flex-start"
                minWidth="100%"
                minHeight="100%"
                gap="$2"
                padding="$5"
                marginTop="$4"
              >
                <Paragraph fontSize="$8" fontWeight="bold" color="black">
                  Create Account
                </Paragraph>
                <YStack
                  minHeight={110}
                  minWidth="100%"
                  overflow="hidden"
                  margin="$1"
                  space="$1"
                  padding="$2"
                >
                  <YStack>
                    <Label
                      htmlFor="firstName"
                      fontWeight="bold"
                      fontSize="$4"
                      color="black"
                    >
                      First Name
                    </Label>
                    <XStack
                      minWidth="100%"
                      backgroundColor="white"
                      alignItems="center"
                      borderRadius={10}
                      padding="$1"
                      paddingLeft="$2"
                    >
                      <AppFormField
                        placeholder="Your First Name"
                        id="firstName"
                        backgroundColor="white"
                        color="black"
                        flex={1}
                        name="firstName"
                        fontWeight={600}
                        borderColor="white"
                        borderTopWidth={0}
                        borderBottomWidth={0}
                        borderLeftWidth={0}
                        borderRightWidth={0}
                      />
                    </XStack>
                    <ErrorMessage
                      error={errors.firstName}
                      visible={touched.firstName}
                    />
                  </YStack>
                  <YStack>
                    <Label
                      htmlFor="lastName"
                      fontWeight="bold"
                      fontSize="$4"
                      color="black"
                    >
                      Last Name
                    </Label>
                    <XStack
                      minWidth="100%"
                      backgroundColor="white"
                      alignItems="center"
                      borderRadius={10}
                      padding="$1"
                      paddingLeft="$2"
                    >
                      <AppFormField
                        placeholder="Your Last Name"
                        id="lastName"
                        backgroundColor="white"
                        color="black"
                        flex={1}
                        name="lastName"
                        fontWeight={600}
                        borderColor="white"
                        borderTopWidth={0}
                        borderBottomWidth={0}
                        borderLeftWidth={0}
                        borderRightWidth={0}
                      />
                    </XStack>
                    <ErrorMessage
                      error={errors.lastName}
                      visible={touched.lastName}
                    />
                  </YStack>
                  <YStack>
                    <Label
                      htmlFor="email"
                      fontWeight="bold"
                      fontSize="$4"
                      color="black"
                    >
                      Email Address
                    </Label>
                    <XStack
                      minWidth="100%"
                      backgroundColor="white"
                      alignItems="center"
                      borderRadius={10}
                      padding="$1"
                      paddingLeft="$2"
                    >
                      <Label marginRight="$2"></Label>
                      <Icon size={18} color="lightgrey" name="envelope" />
                      <Label color="lightgrey" fontSize="$4" paddingLeft="$3">
                        |
                      </Label>
                      <AppFormField
                        placeholder="xxx@gmail.com"
                        id="email"
                        backgroundColor="white"
                        color="black"
                        flex={1}
                        name="email"
                        fontWeight={600}
                        borderColor="white"
                        borderTopWidth={0}
                        borderBottomWidth={0}
                        borderLeftWidth={0}
                        borderRightWidth={0}
                      />
                    </XStack>
                    <ErrorMessage
                      error={errors.email}
                      visible={touched.email}
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
                        name={passwordVisible ? "eye-slash" : "eye"}
                        onPress={handleOnClick}
                      />
                    </XStack>
                    <ErrorMessage
                      error={errors.password}
                      visible={touched.password}
                    />
                  </YStack>
                  <YStack>
                    <Label
                      htmlFor="password"
                      fontWeight="bold"
                      fontSize="$4"
                      color="black"
                    >
                      Confirm Password
                    </Label>
                    <XStack
                      backgroundColor="white"
                      borderRadius={10}
                      alignItems="center"
                    >
                      <AppFormField
                        placeholder="Re-enter Password"
                        backgroundColor="white"
                        color="black"
                        name="confirmPassword"
                        fontWeight={400}
                        borderTopWidth={0}
                        borderBottomWidth={0}
                        borderLeftWidth={0}
                        borderRightWidth={0}
                        borderColor="white"
                        secureTextEntry={!confirmPasswordVisible}
                        flex={0.92}
                        textContentType="password"
                        //   borderWidth={0}
                      />
                      <Icon
                        size={18}
                        color="black"
                        name={confirmPasswordVisible ? "eye-slash" : "eye"}
                        onPress={handleOnClickConfirm}
                      />
                    </XStack>
                    <ErrorMessage
                      error={errors.confirmPassword}
                      visible={touched.confirmPassword}
                    />
                  </YStack>
                </YStack>
                <SubmitButton
                  title="Sign Up"
                  size="$4"
                  fontWeight="bold"
                  borderRadius="$4"
                  marginTop="$4"
                  backgroundColor="#1E32A2"
                  color="white"
                  width="100%"
                  // onPress={() => navigation.navigate("Home")}
                />
              </Form>
            </>
          )}
        </Formik>
      </ScrollView>
    </BackgroundScreen>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
});

export default SignUpScreen;
