import React from "react";
import { useFormikContext } from "formik";
import { TextArea } from "native-base";
import { StyleSheet, View } from "react-native";

import ErrorMessage from "./ErrorMessage";

interface PropsTypes {
  name: string;
  width?: string;
  height: number;
  placeholder: string;
}

function AppFormTextarea({
  name,
  width,
  height = 20,
  placeholder = "Start Typing...",
  ...otherProps
}: PropsTypes) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  const controlledTextArea = (e) => {
    setFieldValue(name, e.currentTarget.value);
  };

  return (
    <>
      <View style={styles.container}>
        <TextArea
          h={height}
          placeholder={placeholder}
          w={width}
          maxW="100%"
          onChange={controlledTextArea}
          value={values[name]}
          {...otherProps}
          onBlur={() => setFieldTouched(name)}
        />

        <ErrorMessage error={errors[name]} visible={touched[name]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default AppFormTextarea;
