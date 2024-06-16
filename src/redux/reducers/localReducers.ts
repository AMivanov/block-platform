import {
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_ERROR } from '../types/localTypes'

const initialState = {
    articles: [],
    loadingTickets: false,
    error: false,
}

export const localReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_ARTICLES_START:
            return {
                ...state,
                loadingTickets: true,
            }
        case FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                loadingTickets: false,
                articles: [...state.articles, ...action.articles],
                error: false,
            }
        case FETCH_ARTICLES_ERROR:
            return {
                ...state,
                loadingTickets: false,
                error: true,
            }
        default:
            return state;
    }
}