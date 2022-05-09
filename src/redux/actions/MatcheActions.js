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

export const setAllBestMatches = (matchs) => {
    return {
        type: MatchActionType.SET_All_BEST_MATCHES,
        payload: matchs,
    }
}

export const setMatchHistory = (matchs) => {
    return {
        type: MatchActionType.SET_MATCH_HISTORY,
        payload: matchs,
    }
}

export const setClubs = (matchs) => {
    return {
        type: MatchActionType.SET_CLUBS,
        payload: matchs,
    }
}