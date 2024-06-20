import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import { ReactComponent as LikeImg } from '../../shared/images/Vector.svg'
import { ReactComponent as NoAvatar } from '../../shared/images/noAvatar.svg'
import { IArticleElemProps } from '../../interfaces';

import * as Styles from './Article.styles'

export default function Article(props: IArticleElemProps) {
    const { isFullArticle = false, article } = props

    const formatDate = article.createdAt ? format(parseISO(article.createdAt), 'MMMM d, y') : ''

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
                    <Markdown>{article.body}</Markdown>
                )}
            </Styles.Article>
        </Link>
    )
}