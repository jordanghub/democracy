import { SET_FORM_ERROR, FORM_SUBMIT_SUCCESS } from "store/actionTypes";
import { TFormState } from "types/state";

const initialState: TFormState = {
  forms: {},
};

export function formsReducer(state = initialState, action: any): any {

  switch(action.type) {

    case FORM_SUBMIT_SUCCESS: {
      const { formName } = action.payload;
      return {
        ...state,
        forms: {
          ...state.forms,
          [formName]: {
            submitSuccess: true,
            errors: null,
          }
        }
      }
    }
    case SET_FORM_ERROR: {
      const { formName, errors } = action.payload;
      return {
        ...state,
        forms: {
          ...state.forms,
          [formName]: {
            submitSuccess: false,
            errors,
          }
        }

      }
    }
   
    default: 
      return state;
  }
}

export default formsReducer;