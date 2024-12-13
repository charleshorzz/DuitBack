import React, { useRef } from "react";
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
import { AppFormField, SubmitButton } from "../components/forms";

import { NavigationProp } from "@react-navigation/native";
import NumberInput from "../components/NumberInput";
import BackgroundScreen from "../components/BackgroundScreen";

const VerifyCodeScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  // Create refs for each input field
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // Handle text change and auto-focus next or previous input
  const handleChange = (index: number, text: string) => {
    const currentRef = inputRefs[index].current;

    if (!text && index > 0) {
      // Backspace detected; focus the previous input
      inputRefs[index - 1].current?.focus();
    } else if (text.length === 1 && index < inputRefs.length - 1) {
      // Move to the next input
      inputRefs[index + 1].current?.focus();
    }
  };

  return (
    <BackgroundScreen>
      <Formik
        initialValues={{
          code1: "",
          code2: "",
          code3: "",
          code4: "",
          code5: "",
          code6: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <YStack
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
              paddingHorizontal="$4"
            >
              Verification Code
            </Paragraph>

            <YStack
              minHeight={110}
              minWidth="100%"
              overflow="hidden"
              margin="$3"
              space="$2"
              padding="$4"
            >
              <XStack gap="$3">
                {/* Pass refs, handleChange, and handleKeyPress for each input */}
                {inputRefs.map((ref, index) => (
                  <NumberInput
                    key={index}
                    name={`code${index + 1}`}
                    refInput={ref}
                    onChange={(text) => handleChange(index, text)}
                  />
                ))}
              </XStack>

              <YStack>
                <SubmitButton
                  title="Verify"
                  size="$4"
                  fontWeight="bold"
                  borderRadius="$4"
                  marginTop="$8"
                  backgroundColor="#1E32A2"
                  color="white"
                  width="100%"
                />
              </YStack>
            </YStack>
          </YStack>
        )}
      </Formik>
    </BackgroundScreen>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, // Makes the background cover the entire screen
    resizeMode: "cover", // Ensures the image is not stretched
  },
});

export default VerifyCodeScreen;
