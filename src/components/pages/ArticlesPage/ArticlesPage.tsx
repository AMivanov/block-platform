import { Pagination, ConfigProvider, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Article from '../../Article';
import { RootState } from '../../../redux/store/store';
import { IArticleProps } from '../../../interfaces';
import { fetchArticles } from '../../../shared/api/api';

import * as Styles from './ArticlesPage.styles'
import { IArticlesPageProps } from './interfaces';

export default function ArticlesPage (props: IArticlesPageProps) {
    const { isOpen = false } = props
    const articles = useSelector((state: RootState) => state.localReducer.articles)
    const articlesCount = useSelector((state: RootState) => state.localReducer.articlesCount)
    const loadingArticles = useSelector((state: RootState) => state.localReducer.loadingArticles)
    const dispatch: any = useDispatch()

    useEffect(() => {
        dispatch(fetchArticles(1))
    }, [])
    const handlePageChange = (page: number) => {
        dispatch(fetchArticles(page))
    }
    const articlesArr = articles.map((article: IArticleProps, index: number) => {
        return (
            <Article
              key={index}
              article={article}
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
                          total={articlesCount}
                          onChange={handlePageChange}
                        />
                    </ConfigProvider>
                </Styles.Pagination>
            )}
        </Styles.ArticlesPage>
    )
}