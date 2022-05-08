import { MatchActionType } from '../contents/MatchActionType';

export const setDataLoaded = (matchs) => {
    return {
        type: MatchActionType.DATA_LOADED,
        payload: matchs,
    }
}

export const setUpCommingAllMatches = (matchs) => {
    return {
        type: MatchActionType.SET_UP_COMMING_ALL_MATCHES,
        payload: matchs,
    }
}

export const setUpAllBestMatches = (matchs) => {
    return {
        type: MatchActionType.SET_UP_All_BEST_MATCHES,
        payload: matchs,
    }
}

export const setUpMatchHistory = (matchs) => {
    return {
        type: MatchActionType.SET_UP_MATCH_HISTORY,
        payload: matchs,
    }
}