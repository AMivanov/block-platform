import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import * as Styles from './App.styles'
import Header from './components/Header';
import ArticlesPage from './components/pages/ArticlesPage';
import AuthenticationPage from './components/pages/AuthenticationPage';
import ArticleCreatePage from './components/pages/ArticleCreatePage';
import { ArticlePage } from './components/pages/ArticlePage';
import NotFoundPage from './components/pages/NotFoundPage';

export default function App() {
    return (
        <>
            <Styles.GlobalStyles />
            <Router>
                <Header />
                <Switch>
                    <Route path="/articles/" exact render={() => <ArticlesPage isOpen />} />
                    <Route
                      path="/article/:slug/edit/"
                      render={({ match }) => {
                            const { slug } = match.params
                            return <ArticleCreatePage slug={slug} />
                        }}
                    />
                    <Route
                      path="/article/:slug/"
                      render={({ match }) => {
                            const { slug } = match.params
                            if (window.location.pathname.includes('/edit/')) {
                                return null
                            }
                            return <ArticlePage slug={slug} />
                        }}
                    />
                    <Route path="/sign-up/" render={() => <AuthenticationPage type="signUp" />} />
                    <Route path="/sign-in/" render={() => <AuthenticationPage type="signIn" />} />
                    <Route path="/profile/" render={() => <AuthenticationPage type="edit" />} />
                    <Route path="/create-article/" render={() => <ArticleCreatePage slug="" />} />
                    <Route exact path="/">
                        <Redirect to="/articles/" />
                    </Route>
                    <Route render={() => <NotFoundPage />} />
                </Switch>
            </Router>
        </>
    )
}