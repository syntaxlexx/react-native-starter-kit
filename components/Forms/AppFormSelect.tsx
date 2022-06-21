import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import { CheckIcon, Select } from "native-base";

interface PropsTypes {
  items: Array<any>;
  name: string;
  placeholder?: string;
  width?: number | string;
}

function AppFormSelect({
  items = [],
  name,
  placeholder,
  width,
  ...otherProps
}: PropsTypes) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <Select
        selectedValue={values[name]}
        minWidth="150"
        width={width}
        accessibilityLabel={placeholder}
        placeholder={placeholder}
        _selectedItem={{
          bg: "primary.600",
          _text: { color: "white" },
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onBlur={() => setFieldTouched(name)}
        onValueChange={(itemValue) => setFieldValue(name, itemValue)}
        {...otherProps}
      >
        {items.map((item, index) => (
          <Select.Item
            label={item.text}
            value={item.value}
            key={index.toString()}
          />
        ))}
      </Select>

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormSelect;
