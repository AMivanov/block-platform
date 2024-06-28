import {
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_ERROR,
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    LOGOUT_USER,
    // FETCH_USER_ARTICLE_START, FETCH_USER_ARTICLE_SUCCESS, FETCH_USER_ARTICLE_ERROR,
} from '../types/localTypes'
import { IArticleProps, IUser } from '../../interfaces';

export function fetchArticlesStart() {
    return {
        type: FETCH_ARTICLES_START,
    }
}

export function fetchArticlesSuccess(articles: IArticleProps[], articlesCount: IArticleProps) {
    return {
        type: FETCH_ARTICLES_SUCCESS,
        articles,
        articlesCount,
    }
}

export function fetchArticlesError() {
    return {
        type: FETCH_ARTICLES_ERROR,
    }
}

export function fetchUserStart() {
    return {
        type: FETCH_USER_START,
    }
}

export function fetchUserSuccess(user: IUser) {
    return {
        type: FETCH_USER_SUCCESS,
        user,
    }
}

export function fetchUserError() {
    return {
        type: FETCH_USER_ERROR,
    }
}

export function logOutUser() {
    return {
        type: LOGOUT_USER,
    }
}
