import Markdown from 'react-markdown';
import { Link, useHistory } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { Button, ConfigProvider } from 'antd';

import { ReactComponent as LikeImg } from '../../shared/images/Vector.svg'
import { ReactComponent as NoAvatar } from '../../shared/images/noAvatar.svg'
import { IArticleElemProps } from '../../interfaces';
import { useAppSelector } from '../../shared/hooks';
import { fetchDeleteArticle } from '../../shared/api/api';

import * as Styles from './Article.styles'

export default function Article(props: IArticleElemProps) {
    const { isFullArticle = false, article } = props

    if (!article || !article.author) {
        return null
    }

    const userState = useAppSelector((state) => state.localReducer.user)

    const isCurrentUser = userState.username && article.author.username === userState.username
    const formatDate = article.createdAt ? format(parseISO(article.createdAt), 'MMMM d, y') : ''
    const history = useHistory()

    const handleDeleteArticle = () => {
        fetchDeleteArticle()
            .then(() => {
            console.log('delete');
            history.push('/articles/');
        })
            .catch((error) => {
                console.error('Ошибка удаления статьи', error);
            });
    }

    return (
        <Link to={`/article/${article.slug}/`}>
            <Styles.Article>
                <Styles.WrapperArticle>
                    <Styles.Title>
                        {article.title}
                    </Styles.Title>
                    <LikeImg />
                    <Styles.LikesCount>
                        {article.favoritesCount}
                    </Styles.LikesCount>
                </Styles.WrapperArticle>
                <Styles.TagList>
                    {article.tagList.map((tag, index) => (
                        <Styles.Tag key={index}>
                            {tag}
                        </Styles.Tag>
                    ))}
                </Styles.TagList>
                <Styles.Content>
                    {article.description}
                </Styles.Content>
                <Styles.UserInfo>
                    <Styles.UserName>
                        {article.author.username}
                    </Styles.UserName>
                    <Styles.PublicationDate>
                        {formatDate}
                    </Styles.PublicationDate>
                </Styles.UserInfo>
                <Styles.Avatar>
                    {article.author.image ? (
                        <img src={article.author.image} alt="user-logo" />
                    ) : (
                        <NoAvatar />
                    )}
                </Styles.Avatar>
                {isFullArticle && (
                    <>
                        <Markdown>{article.body}</Markdown>
                        {isCurrentUser && (
                            <Styles.WrapperAuthButton>
                                <Button
                                  danger
                                  size="middle"
                                  onClick={handleDeleteArticle}
                                >
                                    Delete
                                </Button>
                                <ConfigProvider
                                  theme={{
                                        token: {
                                        },
                                        components: {
                                            Button: {
                                                defaultHoverBorderColor: '#52C41A',
                                                defaultHoverColor: '#52C41A',
                                                defaultActiveBorderColor: '#52C41A',
                                                defaultActiveColor: '#52C41A',
                                                defaultBorderColor: '#52C41A',
                                                defaultColor: '#52C41A',
                                            },
                                        },
                                    }}
                                >
                                    <Link to={`/article/${article.slug}/edit/`}>
                                        <Button size="middle">Edit</Button>
                                    </Link>
                                </ConfigProvider>
                            </Styles.WrapperAuthButton>
                        )}
                    </>
                )}
            </Styles.Article>
        </Link>
    )
}