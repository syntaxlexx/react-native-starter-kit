import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface PropsTypes {
  name: string;
  width?: string;
  handleIconClicked: Function;
  handleInnerIconClicked: Function;
  trim?: boolean;
  submitOnEnter?: boolean;
}

function AppFormField({
  name,
  width,
  handleIconClicked,
  handleInnerIconClicked,
  trim = true,
  submitOnEnter = false,
  ...otherProps
}: PropsTypes) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
    handleSubmit,
  } = useFormikContext();

  return (
    <>
      {submitOnEnter && (
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={(text) =>
            setFieldValue(name, trim ? text.trim() : text)
          }
          value={values[name]}
          width={width}
          handleIconClicked={handleIconClicked}
          handleInnerIconClicked={handleInnerIconClicked}
          onSubmitEditing={handleSubmit}
          error={errors[name]}
          showError={touched[name]}
          {...otherProps}
        />
      )}

      {!submitOnEnter && (
        <AppTextInput
          onBlur={() => setFieldTouched(name)}
          onChangeText={(text) =>
            setFieldValue(name, trim ? text.trim() : text)
          }
          value={values[name]}
          width={width}
          handleIconClicked={handleIconClicked}
          handleInnerIconClicked={handleInnerIconClicked}
          error={errors[name]}
          showError={touched[name]}
          {...otherProps}
        />
      )}

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
