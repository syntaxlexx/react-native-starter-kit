import React, { ReactChildren } from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";

interface PropsTypes {
  children: ReactChildren[];
  initialValues: FormikValues;
  validationSchema?: object;
  onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => void | Promise<any>;
}

function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: PropsTypes) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
