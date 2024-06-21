import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as Styles from './App.styles'
import Header from './components/Header';
import ArticlesPage from './components/pages/ArticlesPage';
import AuthenticationPage from './components/pages/AuthenticationPage';
import ArticlesCreatePage from './components/pages/ArticlesCreatePage';
import { ArticlePage } from './components/pages/ArticlePage';
import { EditProfilePage } from './components/pages/EditProfilePage';

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
                           return <ArticlePage slug={slug} />
                       }}
                />
                <Route path="/sign-up/" render={() => <AuthenticationPage isSignUp />} />
                <Route path="/sign-in/" component={AuthenticationPage} />
                <Route path="/profile/" component={EditProfilePage} />
                <Route path="/create-article/" component={ArticlesCreatePage} />
            </Router>
        </>
    )
}