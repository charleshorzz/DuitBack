import { View, Text } from "react-native";
import React from "react";
import { Paragraph } from "tamagui";
import { FormikErrors, FormikTouched } from "formik";

interface ErrorMessageProps {
  error:
    | string
    | FormikErrors<any>
    | string[]
    | FormikErrors<any>[]
    | undefined;
  visible: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, visible }) => {
  if (!visible || !error) return null;

  return (
    <Paragraph color="red" fontSize="$2">
      {error}
    </Paragraph>
  );
};

export default ErrorMessage;
