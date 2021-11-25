import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin'
import MainPagePage from './pages/mainpage'
import SignupPage from "./pages/signup";
import verifyPage from "./pages/verify";
import AboutUsPage from "./pages/aboutus";
import DiscoverPage from "./pages/discover";
import LogOutPage from "./pages/logout";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signin" component={SigninPage} exact />
                <Route path="/mainpage" component={MainPagePage} exact />
                <Route path="/signup" component={SignupPage} exact />
                <Route path="/verify" component={verifyPage} exact />
                <Route path="/aboutus" component={AboutUsPage} exact />
                <Route path="/discover" component={DiscoverPage} exact />
                <Route path="/logout" component={LogOutPage} exact />

            </Switch>
        </Router>
    );
}

export default App;
