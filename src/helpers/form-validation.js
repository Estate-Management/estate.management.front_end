import { ValidationError } from "yup";

export const response = (ok, message, errors) => ({
  ok,
  message,
  errors,
});

export const initialResponse = response(null, "", {});

export const convertFormDataToJSON = (formData) => {
  return Object.fromEntries(formData.entries());
};
export const convertFormDataToJSONNoEntries = (formData) => {
  const obj = {};
  for (let key in formData) {
    if (key === "seq") {
      obj[key] = parseInt(formData[key], 10);
    } else {
      obj[key] = formData[key];
    }
  }
  return obj;
};

export const convertFormDataToForm = (formData) => {
  return { ...formData };
};
export const transformYupErrors = (errors) => {
  const errObject = {};
  errors.forEach((error) => (errObject[error.path] = error.message));

  return response(false, "", errObject);
};

export const YupValidationError = ValidationError;

export const isStringArray = (str) => {
  if (!str) return false;
  const arr = JSON.parse(str);
  return Array.isArray(arr) && arr.length > 0;
};
