import { SET_SLIPPAGE, SET_DARKMODE, SET_NETWORK, SET_BRIDGE_DISCLAIMER } from "../constants";
import { CHAINS_IDS } from "./../../constants/chains";

// helper
import LS from "./../../helpers/storage";

// Constants
let baseState = {
  slippage: "0.10",
  darkmode: false,
  network: CHAINS_IDS.MAINNET,
  disclaimer: false
};
let initialState = {};

try {
  let settings = JSON.parse(LS.getItemDevice("settings"));
  initialState = Object.assign(baseState, settings);
} catch (error) {
  initialState = baseState;
}

// Reducer
export default function chatReducer(state = initialState, action) {
  switch (action.type) {
  case SET_SLIPPAGE:
    return { ...state, slippage: action.payload };
  case SET_DARKMODE:
    return { ...state, darkmode: action.payload };
  case SET_NETWORK:
    return { ...state, network: action.payload };
  case SET_BRIDGE_DISCLAIMER:
    return { ...state, disclaimer: action.payload };
  default:
    return state;
  }
}
