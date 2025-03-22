import { atom } from "recoil";

export const cartState = atom({
  key: "cartState", // unique ID for this atom
  default: [], // initial value
});
