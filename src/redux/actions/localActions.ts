import {
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_ERROR,
    CLEAR_ARTICLES } from '../types/localTypes'

export function fetchArticlesStart() {
    return {
        type: FETCH_ARTICLES_START,
    }
}

export function fetchArticlesSuccess(articles: any[], articlesCount: number) {
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

export function clearArticles() {
    return {
        type: CLEAR_ARTICLES,
    }
}