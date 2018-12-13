import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import HomePage from '../../pages/home-page';
import FundamentalPage from '../../pages/fundamental-page';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <main>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/fundamentals" component={FundamentalPage}/>
                    <Route exact path="/learning" component={FundamentalPage}/>
                </main>
            </div>
        );
    }
}

export default App;