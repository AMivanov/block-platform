import axios from 'axios';

import {
    fetchArticlesError,
    fetchArticlesStart,
    fetchArticlesSuccess,
    fetchUserError,
    fetchUserStart,
    fetchUserSuccess,
} from '../../redux/actions/localActions';
import { IUser, IUserArticle } from '../../interfaces'
import { AppDispatch } from '../../redux/store/store';

const instance = axios.create({
    baseURL: 'https://blog.kata.academy/api/',
    responseType: 'json',
    headers: {
        Authorization: `Token ${localStorage.getItem('token')?.replaceAll('"', '')}`,
    },
})

export function fetchArticles(page: number) {
    return async (dispatch: AppDispatch) => {
        dispatch(fetchArticlesStart())
        try {
            const response = await instance.get(`/articles?limit=5&offset=${(page - 1) * 5}`)
            const articles = [...response.data.articles]
            const { articlesCount } = response.data
            if (response.status === 200) {
                if (articles.length === 0) {
                    fetchArticles(page)
                } else {
                    dispatch(fetchArticlesSuccess(articles, articlesCount))
                }
            }
        } catch (e: any) {
            dispatch(fetchArticlesError())
        }
    }
}

export function fetchPostNewUser(data: IUser) {
    return async () => {
        try {
            const response = await instance.post('/users', {
                user: {
                    userName: data.userName,
                    emailAddress: data.emailAddress,
                    password: data.password,
                },
            })
            console.log(response.data)
        } catch (e: any) {
            console.log('Ошибка при отправке нового пользователя', e)
        }
    }
}

export function fetchPostLoginUser(data: IUser) {
    return async (dispatch: AppDispatch) => {
        dispatch(fetchUserStart())
        try {
            const response = await instance.post('/users/login', {
                user: {
                    email: data.emailAddress,
                    password: data.password,
                },
            })
            if (response.status === 200) {
                dispatch(fetchUserSuccess(response.data))
                localStorage.setItem('token', JSON.stringify(response.data.user.token))
            }
            return response
        } catch (e: any) {
            dispatch(fetchUserError())
            throw e
        }
    }
}

export function fetchPutEditProfile (data: IUser) {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await instance.put('/user', {
                user: {
                    email: data.emailAddress,
                    username: data.userName,
                    bio: 'My bio',
                    image: data.avatar,
                },
            })
            if (response.status === 200) {
                dispatch(fetchUserSuccess(response.data))
            }
            return response
        } catch (e: any) {
            console.log('Ошибка при отправке нового пользователя', e)
            return Promise.reject(e)
        }
    }
}

export function fetchPostCreateArticle (data: IUserArticle) {
    return async () => {
        try {
            const response = await instance.post('/articles', {
                article: {
                    title: data.title,
                    description: data.description,
                    body: data.body,
                    tagList: data.tags,
                },
            })
            console.log('create', response.data)
        } catch (e: any) {
            console.log('Ошибка при создании статьи', e)
        }
    }
}

export function fetchPutEditArticle(data: IUserArticle) {
    return async () => {
        const slug = localStorage.getItem('slug')
        try {
            const response = await instance.put(`/articles/${slug}`, {
                article: {
                    title: data.title,
                    description: data.description,
                    body: data.body,
                },
            })
            console.log('editArticle', response.data)
            return response
        } catch (e: any) {
            console.log('Ошибка при отправке обновленной статьи', e)
            return Promise.reject(e)
        }
    }
}

export const fetchDeleteArticle = async () => {
    const slug = localStorage.getItem('slug')
    try {
        const response = instance.delete(`/articles/${slug}`)
        console.log(response)
    } catch (e: any) {
        console.log('Ошибка при создании статьи', e)
    }
}