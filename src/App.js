import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin'
import MainPagePage from './pages/mainpage'
import SignupPage from "./pages/signup";
import verifyPage from "./pages/verify";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signin" component={SigninPage} exact />
                <Route path="/mainpage" component={MainPagePage} exact />
                <Route path="/signup" component={SignupPage} exact />
                <Route path="/verify" component={verifyPage} exact />

            </Switch>
        </Router>
    );
}

export default App;
