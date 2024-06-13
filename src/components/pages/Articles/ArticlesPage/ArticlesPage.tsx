import { Pagination, ConfigProvider } from 'antd';

import ArticlesList from '../ArticlesList/ArticlesList';

import * as Styles from './ArticlesPage.styles'

export default function ArticlesPage () {
    return (
        // <Styles.ArticlesPage>
        <>
            <ArticlesList />
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
        </>
        // </Styles.ArticlesPage>
    )
}