import { atom } from "nanostores";
import { LANGUAGES } from "../utils/models";

export const languageStore = atom(LANGUAGES.ENGLISH);
