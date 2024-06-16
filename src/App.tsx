import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as Styles from './App.styles'
import Header from './components/Header';
// import MainContainer from './components/MainContainer';
import ArticlesPage from './components/pages/Articles/ArticlesPage';
import AuthenticationPage from './components/pages/AuthenticationPage';
import ArticlesCreatePage from './components/pages/Articles/ArticlesCreatePage';
import { fetchArticles } from './api/api';
// import SignInPages from './components/pages/SignInPages';

export default function App() {
    const dispatch: any = useDispatch()
    useEffect(() => {
        dispatch(fetchArticles())
    }, [])

    return (
        <>
            <Styles.GlobalStyles />
            <Router>
            <Header />
                <Route path="/articles/" exact render={() => <ArticlesPage isOpen />} />
                <Route
                  path="/articles/:id/"
                  render={({ match }) => {
                      const { id } = match.params
                           // console.log(match)
                           return <ArticlesPage itemId={id} />
                       }}
                />
                <Route path="/sign-up/" render={() => <AuthenticationPage isSignUp />} />
                <Route path="/sign-in/" component={AuthenticationPage} />
                <Route path="/create-article/" component={ArticlesCreatePage} />
            </Router>
        </>
    )
}