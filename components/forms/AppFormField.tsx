import { View, Text } from "react-native";
import React from "react";
import { Input } from "tamagui";
import { useFormikContext } from "formik";

interface AppFormFieldProps {
  name: string;
  [key: string]: any;
}

const AppFormField = ({ name, ...otherProps }: AppFormFieldProps) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <Input
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
    </>
  );
};

export default AppFormField;
