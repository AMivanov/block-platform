import {
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_ERROR,
    } from '../types/localTypes'
import { IArticleProps } from '../../interfaces';

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