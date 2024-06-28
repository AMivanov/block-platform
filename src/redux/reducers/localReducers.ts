import {
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_ERROR,
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    LOGOUT_USER,
    // FETCH_USER_ARTICLE_START,
    // FETCH_USER_ARTICLE_SUCCESS, FETCH_USER_ARTICLE_ERROR,
} from '../types/localTypes'

const initialState = {
    articles: [],
    articlesCount: 0,
    loadingArticles: false,
    errorArticles: false,
    user: {},
    loadingUser: false,
    errorUser: false,
    userArticle: {},
    loadingUserArticle: false,
    errorUserArticle: false,
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
                errorArticles: false,
            }
        case FETCH_ARTICLES_ERROR:
            return {
                ...state,
                loadingArticles: false,
                errorArticles: true,
            }
        case FETCH_USER_START:
            return {
                ...state,
                loadingUser: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loadingUser: false,
                user: action.user.user,
                errorUser: false,
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                loadingUser: false,
                errorUser: true,
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: {},
            }
        default:
            return state;
    }
}