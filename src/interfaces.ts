export interface IAuthorProps {
    username: string;
    image: string;
    following: boolean;
}

export interface IArticleProps {
    slug: string;
    title: string;
    description: string;
    body: string;
    createdAt: string;
    updatedAt: string;
    tagList: string[];
    favorited: boolean;
    favoritesCount: number;
    author: IAuthorProps;
    articleCount: number;
}

export interface IArticleElemProps {
    isFullArticle?: boolean;
    article: IArticleProps
}

export interface IUser {
    userName: string;
    emailAddress: string;
    password: string;
    repeatPassword?: string;
    agreeToTerms?: boolean;
    token?: string;
    bio?: string;
    avatar?: string;
}

export interface IUserArticle {
    title: string;
    description: string;
    body: string;
    tags: string[];
}