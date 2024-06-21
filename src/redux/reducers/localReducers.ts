import {
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_ERROR,
    } from '../types/localTypes'

const initialState = {
    articles: [],
    articlesCount: 0,
    loadingArticles: false,
    error: false,
}

export const localReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_ARTICLES_START:
            return {
                ...state,
                loadingArticles: true,
            }
        case FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                loadingArticles: false,
                articles: [...action.articles],
                articlesCount: action.articlesCount,
                error: false,
            }
        case FETCH_ARTICLES_ERROR:
            return {
                ...state,
                loadingArticles: false,
                error: true,
            }
        default:
            return state;
    }
}