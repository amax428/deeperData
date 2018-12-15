import React,{Component} from 'react';
import './learningPage.css';
import SvgComponent from "../../shared/style/svgComponents/svgComponent";
import partnersImg from '../../assets/partners.PNG';
import locationMap from '../../assets/location.png';
import deeperData from '../../assets/deepData.png';
import brandIcon from '../../assets/brand.png';
import man from '../../assets/man.png';

export default class LearningPage extends Component{
    state = {
        stars : []
    };
    starsHandler=()=>{
        for(let i=0;i<5;i++){
            if(i<4){
                this.state.stars.push(<SvgComponent name="full-star"/>);
            }else{
                this.state.stars.push(<SvgComponent name="empty-star"/>);
            }
        }
    };
    render(){
        this.starsHandler();
        return(
            <div>
                <div className="learning-page">
                    <div className="learning-page__section-1">
                        <div className="learning-page__section-1--title">
                            <div className="learning-page__section-1--title-1">
                            <span>College Certification Track :<br/>
                             Big Data with Spark</span>
                                <div className="learning-page__section-1--title-1-details">
                                    4 days / 6 hours of learning . 4 activities .  133
                                </div>
                            </div>
                            <div className="learning-page__section-1--title-2">
                                <a href="/" className="learning-page__title-btn"><SvgComponent name="save"/></a>
                                <a href="/" className="learning-page__title-btn"><SvgComponent name="share"/></a>
                            </div>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-1-wwd">
                            <div className="learning-page__section-1-wwd-details">
                                <div className="learning-page__section-1-wwd-details-btn"><span>What we’ll do</span></div>
                                <div className="learning-page__section-1-wwd-details-points">
                                    <div className="learning-page__section-1-wwd-details-points-1">
                                        <div className="learning-page__section-1-wwd-details-points-el">
                                            <i className="icon ion-md-alarm"></i>
                                            <span>6 hours of learning total</span>
                                        </div>
                                        <div className="learning-page__section-1-wwd-details-points-el">
                                            <i className="icon ion-ios-mic"></i>
                                            <span>Offered in English</span>
                                        </div>
                                    </div>
                                    <div className="learning-page__section-1-wwd-details-points-2">
                                        <div className="learning-page__section-1-wwd-details-points-el">
                                            <i className="icon ion-ios-list"></i>
                                            <span>One project</span>
                                        </div>
                                        <div className="learning-page__section-1-wwd-details-points-el">
                                            <i className="icon ion-ios-apps"></i>
                                            <span>3 in person activities</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="learning-page__section-1-wwd-time">
                                <div className="learning-page__section-1-wwd-time-nxt">
                                    Next cohort starts in 2 months<br/>
                                    <span>7th january 19 - 3rd February 19</span>
                                </div>
                                <button className="learning-page__section-1-wwd-time-details">
                                    <span>View details</span>
                                </button>
                            </div>
                            <div className="learning-page__section-1-wwd-overview">
                                <h3 className="heading-tertiary">Workshop overview</h3>
                                <div className="learning-page__section-1-wwd-overview-side">
                                    <div className="learning-page__section-1-wwd-overview-pg">
                                        College Certification track is a specially designed 4 week
                                        programme by Deeper Data in a classroom teaching
                                        environment.<br/><br/>

                                        Spread over 3 weeks and 12 hours of student engagement,
                                        this programmne involves theory sessions, hands on labs
                                        and assignments.<br/><br/>

                                        Only the top 50% of the students end up passing the
                                        certification and becoming Certified Distributed Application
                                        Developers.<br/><br/>
                                    </div>
                                    <h3 className="heading-tertiary">Benifites for Students</h3>
                                    <div className="learning-page__section-1-wwd-overview-benefits">
                                        <span>Globally recognized Smart Certification</span><br/>
                                        <span>Life time access to recorded content</span>
                                    </div>
                                    <div className="learning-page__section-1-wwd-partners">
                                        <h3 className="heading-tertiary">Partners</h3>
                                        <div className="path"></div>
                                        <img src={partnersImg}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-1-taught-by">
                            <h3 className="heading-tertiary">Taught by</h3>
                            <div className="learning-page__section-1-taught-by-dd">
                                <div>DeeperData</div><br/>
                                <div>Building the web 3.0 community, through quality education
                                    for developers, entrepreneurs, and enterprise.</div>
                            </div>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-1-location">
                            <h3 className="heading-tertiary">Location</h3>
                            <img src={locationMap}/>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-1-levels">
                            <div className="learning-page__section-1-levels-headings">
                                <h3 className="heading-tertiary">Need to know</h3>
                                <h3 className="heading-tertiary">Cancellation policy</h3>
                            </div>
                            <div className="learning-page__section-1-levels-pg">
                                <h3 className="heading-tertiary">Beginner level</h3>
                                <div>
                                    <div>This workshop has no pre-requisties</div>
                                    <div>Get a full refund if you cancel within 1 week of signing up.</div>
                                </div>
                            </div>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-1-ltinerary">
                            <h3 className="heading-tertiary">Ltinerary</h3>
                            <div className="learning-page__section-1-ltinerary-route">
                                <div className="learning-page__section-1-ltinerary-route-shape">
                                    <div className="oval"></div>
                                    <div className="line"></div>
                                    <div className="oval"></div>
                                </div>
                                <div className="learning-page__section-1-ltinerary-route-date">
                                    <div>Sunday, 22 November</div>
                                    <img src={deeperData}/>
                                </div>
                                <div className="learning-page__section-1-ltinerary-route-time">
                                    <h3 className="heading-tertiary">Meet up</h3>
                                    <div>
                                        <div>2:30 PM - 5:30 PM . In-person Session<br/><br/>
                                            Every open lab has on agenda 3 core activities:<br/><br/>
                                            1. Global Projects - Specially designed projects
                                            by The Blockchain<br/><br/></div>
                                        <a href="#">See Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-1-review">
                            <div className="learning-page__section-1-review-1">
                                <h3 className="heading-tertiary">Reviews (15)</h3>
                                <div>{this.state.stars}</div>
                            </div>
                            <div className="learning-page__section-1-review-2">
                                Start by giving stars to this workshop.
                            </div>
                        </div>
                    </div>
                    <div className="learning-page__section-2">
                        <div className="learning-page__section-2-photo">
                            <img  src={man} className="learning-page__section-2--img"/>
                            <h3 className="heading-tertiary">
                                Get Certified As a Big Data with spark and Build
                                Your own Dapp
                            </h3>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-2-more">
                            <div className="learning-page__section-2-more-1">
                                <div>
                                    $100 per person
                                </div>
                                <div className="min-stars">
                                    {this.state.stars} (12 Reviews)
                                </div>
                            </div>
                            <div className="learning-page__section-1-wwd-details-btn"><span>What we’ll do</span></div>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-2-subscribe">
                            <h3 className="heading-tertiary">Subscribe Newsletter</h3>
                            <div className="learning-page__section-2-subscribe-text">
                                subscribe to our mailing list to get the update to
                                your email
                            </div>
                            <div className="learning-page__section-2-subscribe-email">
                                <div className="learning-page__section-2-subscribe-email-icon"><i className="icon ion-md-mail"></i></div>
                                <input type="text" placeholder="Email"/>
                                <a className="learning-page__section-2-subscribe-email-btn"><span>Submit</span></a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer">
                    <div className="footer-div">
                        <div className="footer-div-start">
                            <h1>Get Starts Today</h1>
                            <h2>Lorem ipsum lit sum asml lope consectur elit sept</h2>
                            <div className="footer-div-start-link">
                                <div className="footer-div-start-link-logo">
                                    <a className="footer-div-start-link-logo-item" href="/">
                                        <img src={brandIcon} />
                                        DeeperData
                                    </a>
                                </div>
                                <div className="footer-div-start-link-menu-1">
                                    <div>Explore All Features</div>
                                    <div>Pricing</div>
                                    <div>Company</div>
                                    <div>Log In</div>
                                </div>
                                <div className="footer-div-start-link-menu-2">
                                    <div>Privacy Policy</div>
                                    <div>Terms Of Use</div>
                                    <div>Contact Us</div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-div-links">
                            <button className="footer-div-links-btn"><span>Get Started</span></button>
                            <div className="footer-div-social">
                                <div className="footer-div-social-text">Social</div>
                                <div className="footer-div-social-icons">
                                    <div className="social-icon social-icon-facebook"><i className="icon ion-logo-facebook"></i></div>
                                    <div className="social-icon social-icon-twitter"><i className="icon ion-logo-twitter"></i></div>
                                    <div className="social-icon social-icon-linkdin"><i className="icon ion-logo-linkedin"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}