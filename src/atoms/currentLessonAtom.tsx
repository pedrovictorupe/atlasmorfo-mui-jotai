import { atomWithStorage } from "jotai/utils";
import content from "../contents.json";
import keys from "lodash/keys";

export default atomWithStorage("licaoAtual", keys(content)[0]);
