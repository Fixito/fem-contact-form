interface CustomElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  email: HTMLInputElement;
  queryType: HTMLInputElement;
  message: HTMLInputElement;
  consent: HTMLInputElement;
}

export interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export interface Errors {
  formErrors: string[];
  fieldErrors: {
    [key: string]: string[];
  };
}
