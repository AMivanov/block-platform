import { ReactComponent as LikeImg } from '../../../../images/Vector.svg'
// @ts-ignore
import { ReactComponent as NoAvatar } from '../../../../images/noAvatar.svg'

import * as Styles from './Article.styles'

export default function Article () {
    return (
        <Styles.Article>
            <Styles.WrapperArticle>
                <Styles.Title>
                    Some article title
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
        </Styles.Article>
    )
}