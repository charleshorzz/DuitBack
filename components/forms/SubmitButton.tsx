import { View, Text } from "react-native";
import React from "react";
import { Button } from "tamagui";
import { useFormikContext } from "formik";

interface SubmitButtonProps {
  title: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  title,
  ...otherProps
}) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button onPress={() => handleSubmit()} {...otherProps}>
      {title}
    </Button>
  );
};

export default SubmitButton;
