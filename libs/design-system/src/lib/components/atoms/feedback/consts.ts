import { emailRegExp } from "../../../utils";

export const MESSAGE_SUCCESS = "Zapisano!";
export const MESSAGE_FAILURE = "Coś poszło nie tak, spróbuj ponownie za 1 godzinę.";


export const FORM_FIELD = {
  email: {
    required: "Podanie adresu e-mail jest obowiązkowe",
    pattern: {
      value: emailRegExp,
      message: "Wprowadź poprawny adres e-mail",
    },
  },
  message: {
    minLength: {
      value: 10,
      message: "Twoja wiadomość musi zawierać przynajmniej 10 znaków",
    },
  },
};
