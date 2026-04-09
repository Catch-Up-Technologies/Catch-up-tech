import { parsePhoneNumber, isValidPhoneNumber, type CountryCode } from "libphonenumber-js";

export const validatePhone = (number: string, country: CountryCode) => {
  try {
    const fullNumber = number.startsWith("+") ? number : `+${number}`;
    if (!isValidPhoneNumber(fullNumber, country)) return false;
    return true;
  } catch {
    return false;
  }
};

export const formatPhone = (number: string, country: CountryCode) => {
  try {
    const phoneNumber = parsePhoneNumber(number, country);
    return phoneNumber.formatInternational();
  } catch {
    return number;
  }
};

export const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
