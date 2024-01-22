import numeral from "numeral";
export const ChangeNumber = (number) => {
  return numeral(number).format("0a");
};
