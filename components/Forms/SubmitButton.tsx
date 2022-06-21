import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

interface PropsTypes {
  title: string;
}

function SubmitButton({ title, ...otherProps }: PropsTypes) {
  const { handleSubmit, isSubmitting } = useFormikContext();

  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      isLoading={isSubmitting}
      {...otherProps}
    />
  );
}

export default SubmitButton;
