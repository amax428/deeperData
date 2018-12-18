import React, { Component } from 'react';
import Header from '../../components/header';
import HomePageBanner from '../../components/homePageBanner';
import FundamentalTutorial from '../../components/fundamentalTutorial';
import bannerImage from '../../assets/fundamentals-page.png';
import './fundamental-page.css';

export default class FundamentalPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="fundamental-page">
          <HomePageBanner
            title="It all starts with Fundamentals"
            description={["We've categorized a list of curated tutorials to get started with Python and Data Science, as a prerequisite to our training classes and open learning sessions"]}
            buttons={["Python","Data Science"]}
            imgUrl={bannerImage}
          />
          <FundamentalTutorial />
        </div>
      </div>
    )
  }
}
