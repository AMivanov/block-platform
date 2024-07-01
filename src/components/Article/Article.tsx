import Markdown from 'react-markdown';
import { Link, useHistory } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import type { PopconfirmProps } from 'antd';
import { Button, ConfigProvider, message, Popconfirm } from 'antd';
import React from 'react';

import { ReactComponent as LikeImg } from '../../shared/images/Vector.svg'
import { ReactComponent as NoAvatar } from '../../shared/images/noAvatar.svg'
import { ReactComponent as RedHeart } from '../../shared/images/red-heart.svg'
import { IArticleElemProps } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { fetchArticles, fetchDeleteArticle, fetchDeleteArticleLike, fetchPostArticleLike } from '../../shared/api/api';

import * as Styles from './Article.styles'
import { ImageWrapper } from './Article.styles';

export default function Article(props: IArticleElemProps) {
    const { isFullArticle = false, article, page } = props
    if (!article || !article.author) {
        return null
    }

    const userState = useAppSelector((state) => state.localReducer.user)

    const isCurrentUser = userState.username && article.author.username === userState.username
    const formatDate = article.createdAt ? format(parseISO(article.createdAt), 'MMMM d, y') : ''
    const history = useHistory()
    const dispatch = useAppDispatch()

    const handleDeleteArticle = () => {
        fetchDeleteArticle()
            .then(() => {
            history.push('/articles/');
        })
            .catch((error) => {
                console.error('Ошибка удаления статьи', error);
            });
    }

    const confirm: PopconfirmProps['onConfirm'] = (e) => {
        console.log(e);
        message.success('Click on Yes')
        handleDeleteArticle()
    }

    const cancel: PopconfirmProps['onCancel'] = (e) => {
        console.log(e);
        message.error('Click on No');
    };

    const handleLikeClick = (page: number | undefined) => {
        if (article?.favorited) {
            fetchDeleteArticleLike(article.slug)
                .then((res) => {
                    if (res.status === 200) {
                        dispatch(fetchArticles(page));
                    }
                });
        } else {
            fetchPostArticleLike(article.slug)
                .then((res) => {
                    if (res.status === 200) {
                        dispatch(fetchArticles(page));
                    }
                });
        }
    }

    const handleRouteArticle = () => {
        if (!window.location.pathname.includes(`/article/${article.slug}/`)) {
            history.push(`/article/${article.slug}/`)
        }
    }

    return (
            <Styles.Article onClick={handleRouteArticle}>
                <Styles.WrapperArticle>
                    <Styles.Title>
                        {article.title}
                    </Styles.Title>
                    <ImageWrapper onClick={(e) => {
                        e.stopPropagation()
                        handleLikeClick(page)
                    }}
                    >{article.favorited ? <RedHeart /> : <LikeImg /> }
                    </ImageWrapper>

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
                        <Styles.Markdown>
                            <Markdown>{article.body}</Markdown>
                        </Styles.Markdown>
                        {isCurrentUser && (
                            <Styles.WrapperAuthButton>
                                <Popconfirm
                                  title=""
                                  description="Are you sure to delete this article?"
                                  onConfirm={confirm}
                                  onCancel={cancel}
                                  okText="Yes"
                                  cancelText="No"
                                  placement="rightTop"
                                >
                                    <Button danger size="middle">
                                        Delete
                                    </Button>
                                </Popconfirm>
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
    )
}