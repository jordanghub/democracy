import { getFormError } from "appConstant/formErrors";
import { getFormFieldLabel } from "appConstant/formFields";

export const parseFieldErrors = (responseError: any) => {
  const errors: any = {};
  responseError.forEach((msg: any) => {
    errors[msg.property] = {
      value: msg.value,
      property: msg.property,
      constraints: Object.entries(msg.constraints).map((el) => el[0]),
    }
  }) 

  return errors;
}

export const getErrorFromConstraint = (errors) => {

  if(!errors) {
    return [];
  }
  const errorList = Object.entries(errors);
  const constraints = errorList.map((err: any) => ({
    field: err[0],
    constraints: err[1]
  }));

  const errorsText = constraints.map((fieldError) => {

    let errorText = "";

    errorText += getFormFieldLabel(fieldError.field);

    if(Array.isArray(fieldError.constraints.constraints)) {
      errorText += " " + getFormError(fieldError.constraints.constraints[0]);
    }
    else {
      errorText +=  " " + getFormError(fieldError.constraints.constraints)
    }

    return errorText;
  });

  return errorsText;

}