import { atomWithStorage } from "jotai/utils";
import content from "../content/pretestes.json";
import keys from "lodash/keys";

export default atomWithStorage("licaoAtual", keys(content)[0]);
