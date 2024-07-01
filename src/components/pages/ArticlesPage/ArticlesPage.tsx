import { Pagination, ConfigProvider, Spin } from 'antd';
import {useEffect, useState} from 'react';

import Article from '../../Article';
import { IArticleProps } from '../../../interfaces';
import { fetchArticles } from '../../../shared/api/api';
import { useAppSelector, useAppDispatch } from '../../../shared/hooks';

import * as Styles from './ArticlesPage.styles'
import { IArticlesPageProps } from './interfaces';

export default function ArticlesPage (props: IArticlesPageProps) {
    const { isOpen = false } = props
    const articles = useAppSelector((state) => state.localReducer.articles)
    const articlesCount = useAppSelector((state) => state.localReducer.articlesCount)
    const loadingArticles = useAppSelector((state) => state.localReducer.loadingArticles)
    const [page, setPage] = useState(1)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchArticles(1))
    }, [])

    const handlePageChange = (page: number) => {
        dispatch(fetchArticles(page))
        setPage(page)
    }

    const articlesArr = articles.map((article: IArticleProps, index: number) => {
        return (
            <Article
              key={index}
              article={article}
              page={page}
            />
        )
    })

    return (
        <Styles.ArticlesPage>
            {loadingArticles ? (
                <Spin size="large" style={{ alignItems: 'center' }} />
            ) : (
                <Styles.ArticlesList>
                    {articlesArr}
                </Styles.ArticlesList>
            )}
            {isOpen && (
                <Styles.Pagination>
                    <ConfigProvider
                      theme={{
                            token: {
                                colorBgContainer: '#1890FF',
                                colorPrimary: '#FFFFFF',
                            },
                        }}
                    >
                        <Pagination
                          defaultCurrent={1}
                          defaultPageSize={5}
                          total={articlesCount}
                          onChange={handlePageChange}
                        />
                    </ConfigProvider>
                </Styles.Pagination>
            )}
        </Styles.ArticlesPage>
    )
}