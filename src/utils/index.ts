import APP_CONFIG from "../config";

export const isValidEmail = (email: string) => {
  return APP_CONFIG.REGEX_EMAIL.test(email);
};
