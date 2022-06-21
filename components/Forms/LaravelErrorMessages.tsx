import React, { useEffect, useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface PropsTypes {
  errors?: string[];
  visible?: boolean;
}

function LaravelErrorMessages({ errors = [], visible = false }: PropsTypes) {
  if (!visible) return null;
  return errors.map((err, index) => (
    <ErrorMessage key={index} error={err} visible={true} />
  ));
}

export default LaravelErrorMessages;
