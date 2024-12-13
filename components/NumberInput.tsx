import React, { forwardRef } from "react";
import { Input } from "tamagui";

interface NumberInputProps {
  name: string;
  refInput: React.RefObject<Input>;
  onChange: (text: string) => void;
}

const NumberInput = forwardRef<Input, NumberInputProps>(
  ({ refInput, onChange }, ref) => {
    return (
      <Input
        ref={refInput}
        onChangeText={onChange} // Use onChangeText instead of onKeyPress
        keyboardType="phone-pad"
        maxLength={1}
        backgroundColor="white"
        color="black"
        fontWeight={900}
        fontSize={19}
        borderColor="white"
        borderTopWidth={0}
        borderBottomWidth={0}
        borderLeftWidth={0}
        borderRightWidth={0}
        width={45}
        height={45}
      />
    );
  }
);

NumberInput.displayName = "NumberInput";

export default NumberInput;
