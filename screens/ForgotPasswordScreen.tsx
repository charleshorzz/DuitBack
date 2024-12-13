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
import { Formik } from "formik";
import * as Yup from "yup";
import { ErrorMessage, AppFormField, SubmitButton } from "../components/forms";
import { StatusBar } from "react-native";

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string().required().min(9).max(10).label("Phone Number"),
});

import { NavigationProp } from "@react-navigation/native";
import BackgroundScreen from "../components/BackgroundScreen";

const ForgotPasswordScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  return (
    <BackgroundScreen>
      <Formik
        initialValues={{ phoneNumber: "" }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <>
            <Form
              alignItems="center"
              justifyContent="flex-start"
              marginTop="$4"
              minWidth="100%"
              minHeight="100%"
              gap="$2"
              padding="$5"
            >
              <Paragraph
                fontSize="$8"
                fontWeight="bold"
                color="black"
                alignSelf="flex-start"
              >
                Enter Your Phone Number
              </Paragraph>
              <Paragraph
                fontSize="$4"
                color="black"
                alignSelf="flex-start"
                fontWeight={400}
              >
                Please enter your phone number to receive a verification code to
                reset your password.
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
                      id="phoneNumber"
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
                  <SubmitButton
                    title="Send Verification Code"
                    size="$4"
                    fontWeight="bold"
                    borderRadius="$4"
                    marginTop="$8"
                    backgroundColor="#1E32A2"
                    color="white"
                    width="100%"
                    onPress={() => navigation.navigate("VerifyCode")}
                  />
                </YStack>
              </YStack>
            </Form>
          </>
        )}
      </Formik>
    </BackgroundScreen>
  );
};

export default ForgotPasswordScreen;
