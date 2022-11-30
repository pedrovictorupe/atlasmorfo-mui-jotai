import { atomWithStorage } from "jotai/utils";
import content from "../contents.json";

export default atomWithStorage("licaoAtual", Object.keys(content)[0]);
