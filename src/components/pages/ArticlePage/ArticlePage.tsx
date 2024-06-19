import { useSelector } from 'react-redux';

import Article from '../../Article';
import { RootState } from '../../../redux/store/store';

import { IArticlePageProps } from './ArticlePage.interfaces';

export default function ArticlePage(props: IArticlePageProps) {
    const { slug = '' } = props

    const articles = useSelector((state: RootState) => state.localReducer.articles)

    return (
        <Article
          isFullArticle
          articleElem={articles.find((elem) => elem.slug === slug)}
        />
    )
}