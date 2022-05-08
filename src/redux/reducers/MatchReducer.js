import { MatchActionType } from "./../contents/MatchActionType";

const initialState = {
  DataLoaded: false,
  CommingMatchs: [],
  AllBestMatches: [],
  MatchHistory: [],
};

export const MatchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MatchActionType.DATA_LOADED:
      return { ...state, DataLoaded: payload };
    case MatchActionType.SET_UP_COMMING_ALL_MATCHES:
      return { ...state, CommingMatchs: payload };
    case MatchActionType.SET_UP_All_BEST_MATCHES:
      return { ...state, AllBestMatches: payload };
    case MatchActionType.SET_UP_MATCH_HISTORY:
      return { ...state, MatchHistory: payload };
    default:
      return state;
  }
};
