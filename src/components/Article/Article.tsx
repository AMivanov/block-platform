import Markdown from 'react-markdown';
import { Link } from 'react-router-dom';

import { ReactComponent as LikeImg } from '../../images/Vector.svg'
import { ReactComponent as NoAvatar } from '../../images/noAvatar.svg'

import { IArticleProps } from './interfaces';
import * as Styles from './Article.styles'

export default function Article (props: IArticleProps) {
    const { isOpenProp = false, articleElem } = props
    const markdown = '# Hi, *Pluto*!'
    return (
        <Link to="/articles/:id/">
            <Styles.Article>
                <Styles.WrapperArticle>
                    <Styles.Title>
                        {articleElem.title}
                    </Styles.Title>
                    <LikeImg />
                    <Styles.LikesCount>
                        13
                    </Styles.LikesCount>
                </Styles.WrapperArticle>
                <Styles.TagList>
                    <Styles.Tag>
                        Tag 1
                    </Styles.Tag>
                    <Styles.Tag>
                        Some Tag
                    </Styles.Tag>
                </Styles.TagList>
                <Styles.Content>
                    BlabberBlabberBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablalaBlablablaBlablabla
                    BlablablaBlablablaBlablablaBlablablaBlablab
                    BlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablablaBlablabla
                </Styles.Content>
                <Styles.UserInfo>
                    <Styles.UserName>
                        John John
                    </Styles.UserName>
                    <Styles.PublicationDate>
                        March 5, 2020
                    </Styles.PublicationDate>
                </Styles.UserInfo>
                <Styles.Avatar>
                    <NoAvatar />
                </Styles.Avatar>
                {!isOpenProp && (
                    <Markdown>{markdown}</Markdown>
                )}
            </Styles.Article>
        </Link>
    )
}