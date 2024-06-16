import {
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_ERROR } from '../types/localTypes'

export function fetchArticlesStart() {
    return {
        type: FETCH_ARTICLES_START,
    }
}

export function fetchArticlesSuccess(articles: any[]) {
    return {
        type: FETCH_ARTICLES_SUCCESS,
        articles,
    }
}

export function fetchArticlesError() {
    return {
        type: FETCH_ARTICLES_ERROR,
    }
}