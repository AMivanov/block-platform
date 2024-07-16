import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as Styles from './App.styles'
import Header from './components/Header';
import ArticlesPage from './components/pages/ArticlesPage';
import AuthenticationPage from './components/pages/AuthenticationPage';
import ArticleCreatePage from './components/pages/ArticleCreatePage';
import { ArticlePage } from './components/pages/ArticlePage';

export default function App() {
    return (
        <>
            <Styles.GlobalStyles />
            <Router>
                <Header />
                <Route path="/articles/" exact render={() => <ArticlesPage isOpen />} />
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
                <Route
                  path="/article/:slug/edit/"
                  render={({ match }) => {
                        const { slug } = match.params
                            return <ArticleCreatePage slug={slug} />
                    }}
                />
            </Router>
        </>
    )
}