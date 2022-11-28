import { atomWithStorage } from "jotai/utils";
import content from "../content.json";
import keys from "lodash/keys";

export default atomWithStorage("licaoAtual", keys(content)[0]);
