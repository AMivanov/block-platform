import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import { ReactComponent as LikeImg } from '../../shared/images/Vector.svg'
import { ReactComponent as NoAvatar } from '../../shared/images/noAvatar.svg'
import { IArticleElemProps } from '../../interfaces';

import * as Styles from './Article.styles'

export default function Article(props: IArticleElemProps) {
    const { isFullArticle = false, articleElem } = props

    const formatDate = articleElem.createdAt ? format(parseISO(articleElem.createdAt), 'MMMM d, y') : ''

    return (
        <Link to={`/article/${articleElem.slug}/`}>
            <Styles.Article>
                <Styles.WrapperArticle>
                    <Styles.Title>
                        {articleElem.title}
                    </Styles.Title>
                    <LikeImg />
                    <Styles.LikesCount>
                        {articleElem.favoritesCount}
                    </Styles.LikesCount>
                </Styles.WrapperArticle>
                <Styles.TagList>
                    {articleElem.tagList.map((tag, index) => (
                        <Styles.Tag key={index}>
                            {tag}
                        </Styles.Tag>
                    ))}
                </Styles.TagList>
                <Styles.Content>
                    {articleElem.description}
                </Styles.Content>
                <Styles.UserInfo>
                    <Styles.UserName>
                        {articleElem.author.username}
                    </Styles.UserName>
                    <Styles.PublicationDate>
                        {formatDate}
                    </Styles.PublicationDate>
                </Styles.UserInfo>
                <Styles.Avatar>
                    {articleElem.author.image ? (
                        <img src={articleElem.author.image} alt="user-logo" />
                    ) : (
                        <NoAvatar />
                    )}
                </Styles.Avatar>
                {isFullArticle && (
                    <Markdown>{articleElem.body}</Markdown>
                )}
            </Styles.Article>
        </Link>
    )
}