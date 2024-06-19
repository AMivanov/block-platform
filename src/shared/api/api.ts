import axios from 'axios';

import { fetchArticlesError, fetchArticlesStart, fetchArticlesSuccess } from '../../redux/actions/localActions';

// export async function fetchArticles() {
//     try {
//         const response = await axios.get('https://blog.kata.academy/api/articles');
//         console.log(response.data)
//         return response.data
//     } catch (error) {
//         console.error('Error fetching articles:', error)
//         return null
//     }
// }

export function fetchArticles(page: number) {
    return async (dispatch: any) => {
        dispatch(fetchArticlesStart())
        try {
            const response = await axios.get(`https://blog.kata.academy/api/articles?limit=20&offset=${(page - 1) * 20}`)
            console.log(response.data)
            const articles = [...response.data.articles]
            const { articlesCount } = response.data
            console.log(articlesCount)
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