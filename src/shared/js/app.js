import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Footer from '../../components/footer';
import HomePage from '../../pages/home-page';
import FundamentalPage from '../../pages/fundamental-page';
import LearningPage from "../../pages/learningPage";

class App extends Component {
    render() {
        return (
            <div className="app">
                <main>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/fundamentals" component={FundamentalPage}/>
                    <Route exact path="/learning" component={LearningPage}/>
                </main>
            </div>
        );
    }
}

export default App;