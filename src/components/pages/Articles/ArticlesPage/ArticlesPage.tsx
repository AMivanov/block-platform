import { Pagination, ConfigProvider } from 'antd';
// import ArticlesList from '../../../ArticlesList/ArticlesList';
import { useSelector } from 'react-redux';

import Article from '../../../Article';
import { RootState } from '../../../../redux/store/store';

import * as Styles from './ArticlesPage.styles'
import { IArticlePageProps } from './interfaces';

export default function ArticlesPage (props: IArticlePageProps) {
    const { isOpen = false } = props
    const articles = useSelector((state: RootState) => state.localReducer.articles)

    const articlesArr = articles.map((articleElem, index) => {
        return (
            <Article
              key={index}
              articleElem={articleElem}
              isOpenProp={isOpen}
            />
        )
    })
    return (
        // <Styles.ArticlesPage>
        <>
            <Styles.ArticlesList>
                {articlesArr}
            </Styles.ArticlesList>
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
                        <Pagination defaultCurrent={1} total={50} />
                    </ConfigProvider>
                </Styles.Pagination>
            )}
        </>
        // </Styles.ArticlesPage>
    )
}