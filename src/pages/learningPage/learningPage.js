import React,{Component} from 'react';
import './learningPage.css';
import SvgComponent from "../../shared/style/svgComponents/svgComponent";
import partnersImg from '../../assets/partners.PNG';
import locationMap from '../../assets/location.png';
import saveMaterial from '../../assets/save-material.png';
import saveMaterial2x from '../../assets/save-material@2x.png';
import saveMaterial3x from '../../assets/save-material@3x.png';
import shareIcon from '../../assets/share-alt-square-font-awesome.png';
import shareIcon2x from '../../assets/share-alt-square-font-awesome@2x.png';
import shareIcon3x from '../../assets/share-alt-square-font-awesome@3x.png';
import deeperData from '../../assets/deepData.png';
import brandIcon from '../../assets/brand.png';
import man from '../../assets/man.png';
import line from '../../assets/line.PNG';

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
                            <span className="text-big">College Certification Track :<br/>
                             Big Data with Spark</span>
                                <div className="learning-page__section-1--title-1-details text-small">
                                    4 days / 6 hours of learning . 4 activities . <i className="icon ion-md-eye"></i> 133
                                </div>
                            </div>
                            <div className="learning-page__section-1--title-2">
                                <a href="/" className="learning-page__section-1--title-btn">
                                    <img src={saveMaterial} srcSet={`${saveMaterial2x} 2x,${saveMaterial3x} 3x`}/>
                                </a>
                                <a href="/" className="learning-page__section-1--title-btn">
                                    <img src={shareIcon} srcSet={`${shareIcon2x} 2x,${shareIcon3x} 3x`}/>
                                </a>
                            </div>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-1-wwd">
                            <div className="learning-page__section-1-wwd-details">
                                <div className="learning-page__section-1-wwd-details-btn"><span className="text-small">What we’ll do</span></div>
                                <div className="learning-page__section-1-wwd-details-points">
                                    <div className="learning-page__section-1-wwd-details-points-1">
                                        <div className="learning-page__section-1-wwd-details-points-el margin-bit-to-right">
                                            <i className="icon ion-md-alarm text-medium"></i>
                                            <span className="text-small">6 hours of learning total</span>
                                        </div>
                                        <div className="learning-page__section-1-wwd-details-points-el">
                                            <i className="icon ion-ios-mic text-medium"></i>
                                            <span className="text-small">Offered in English</span>
                                        </div>
                                    </div>
                                    <div className="learning-page__section-1-wwd-details-points-2">
                                        <div className="learning-page__section-1-wwd-details-points-el">
                                            <i className="icon ion-ios-list text-medium"></i>
                                            <span className="text-small">One project</span>
                                        </div>
                                        <div className="learning-page__section-1-wwd-details-points-el">
                                            <i className="icon ion-ios-apps text-medium"></i>
                                            <span className="text-small">3 in person activities</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="learning-page__section-1-wwd-time">
                                <div className="learning-page__section-1-wwd-time-nxt text-small">
                                    Next cohort starts in 2 months<br/>
                                    <span>7th january 19 - 3rd February 19</span>
                                </div>
                                <button className="learning-page__section-1-wwd-time-details">
                                    <span className="text-small">View details</span>
                                </button>
                            </div>
                            <div className="for-smaller-screen">
                                <div className="learning-page__section-1-path"></div>
                                <div className="learning-page__section-2-photo">
                                    <h3 className="heading-tertiary text-medium">
                                        Get Certified As a Big Data with spark and Build
                                        Your own Dapp
                                    </h3>
                                </div>
                                <div className="learning-page__section-1-path"></div>
                                <div className="learning-page__section-2-more">
                                    <div className="learning-page__section-2-more-1">
                                        <div className="text-small">
                                            $100 per person
                                        </div>
                                        <div className="min-stars">
                                            {this.state.stars} (12 Reviews)
                                        </div>
                                    </div>
                                    <div className="learning-page__section-1-wwd-details-btn"><span>What we’ll do</span></div>
                                </div>
                                <div className="learning-page__section-1-path"></div>
                                <div className="learning-page__section-2-subscribe ">
                                    <h3 className="heading-tertiary text-small">Subscribe Newsletter</h3>
                                    <div className="learning-page__section-2-subscribe-text text-small">
                                        subscribe to our mailing list to get the update to
                                        your email
                                    </div>
                                    <div className="learning-page__section-2-subscribe-email">
                                        <div className="learning-page__section-2-subscribe-email-icon"><i className="icon ion-md-mail text-normal"></i></div>
                                        <input type="text" placeholder="Email" className="text-small"/>
                                        <a className="learning-page__section-2-subscribe-email-btn"><span className="text-medium">Submit</span></a>
                                    </div>
                                </div>
                                <div className="learning-page__section-1-path"></div>
                            </div>
                            <div className="learning-page__section-1-wwd-overview">
                                <h3 className="heading-tertiary text-small">Workshop overview</h3>
                                <div className="learning-page__section-1-wwd-overview-side">
                                    <div className="learning-page__section-1-wwd-overview-pg text-small">
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
                                    <h3 className="heading-tertiary text-small">Benifites for Students</h3>
                                    <div className="learning-page__section-1-wwd-overview-benefits">
                                        <span className="text-small">Globally recognized Smart Certification</span><br/>
                                        <span className="text-small">Life time access to recorded content</span>
                                    </div>
                                    <div className="learning-page__section-1-wwd-partners">
                                        <h3 className="heading-tertiary text-small">Partners</h3>
                                        <div className="path"></div>
                                        <img src={partnersImg}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-1-taught-by">
                            <h3 className="heading-tertiary text-small">Taught by</h3>
                            <div className="learning-page__section-1-taught-by-dd text-small">
                                <div>DeeperData</div><br/>
                                <div>Building the web 3.0 community, through quality education
                                    for developers, entrepreneurs, and enterprise.</div>
                            </div>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-1-location">
                            <h3 className="heading-tertiary text-small">Location</h3>
                            <img src={locationMap}/>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-1-levels">
                            <div className="learning-page__section-1-levels-headings">
                                <h3 className="heading-tertiary text-small">Need to know</h3>
                                <h3 className="heading-tertiary text-small">Cancellation policy</h3>
                            </div>
                            <div className="learning-page__section-1-levels-pg text-small">
                                <h3 className="heading-tertiary text-small">Beginner level</h3>
                                <div>
                                    <div>This workshop has no pre-requisties</div>
                                    <div>Get a full refund if you cancel within 1 week of signing up.</div>
                                </div>
                            </div>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-1-ltinerary">
                            <h3 className="heading-tertiary text-small">Ltinerary</h3>
                            <div className="learning-page__section-1-ltinerary-route">
                                <div className="learning-page__section-1-ltinerary-route-shape">
                                    <img src={line}/>
                                </div>
                                <div className="learning-page__section-1-ltinerary-route-date">
                                    <div className="text-small">Sunday, 22 November</div>
                                    <img src={deeperData}/>
                                </div>
                                <div className="learning-page__section-1-ltinerary-route-time text-small">
                                    <h3 className="heading-tertiary text-small">Meet up</h3>
                                    <div>
                                        <div>2:30 PM - 5:30 PM . In-person Session<br/><br/>
                                            Every open lab has on agenda 3 core activities:<br/><br/>
                                            1. Global Projects - Specially designed projects
                                            by The Blockchain<br/><br/></div>
                                        <a href="#" className="text-small">See Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-1-review">
                            <div className="learning-page__section-1-review-1">
                                <h3 className="heading-tertiary text-small">Reviews (15)</h3>
                                <div>{this.state.stars}</div>
                            </div>
                            <div className="learning-page__section-1-review-2 text-small">
                                Start by giving stars to this workshop.
                            </div>
                        </div>
                    </div>
                    <div className="learning-page__section-2">
                        <div className="learning-page__section-2-photo">
                            <img  src={man} className="learning-page__section-2--img"/>
                            <h3 className="heading-tertiary text-small">
                                Get Certified As a Big Data with spark and Build
                                Your own Dapp
                            </h3>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-2-more">
                            <div className="learning-page__section-2-more-1">
                                <div className="text-small">
                                    $100 per person
                                </div>
                                <div className="min-stars">
                                    {this.state.stars} (12 Reviews)
                                </div>
                            </div>
                            <div className="learning-page__section-1-wwd-details-btn"><span>What we’ll do</span></div>
                        </div>
                        <div className="learning-page__section-1-path"></div>
                        <div className="learning-page__section-2-subscribe ">
                            <h3 className="heading-tertiary text-small">Subscribe Newsletter</h3>
                            <div className="learning-page__section-2-subscribe-text text-small">
                                subscribe to our mailing list to get the update to
                                your email
                            </div>
                            <div className="learning-page__section-2-subscribe-email">
                                <div className="learning-page__section-2-subscribe-email-icon"><i className="icon ion-md-mail text-normal"></i></div>
                                <input type="text" placeholder="Email" className="text-small"/>
                                <a className="learning-page__section-2-subscribe-email-btn"><span className="text-medium">Submit</span></a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer">
                    <div className="footer-div">
                        <div className="footer-div-start">
                            <h1 className="text-biggest">Get Starts Today</h1>
                            <h2 className="text-normal">Lorem ipsum lit sum asml lope consectur elit sept</h2>
                            <div className="footer-div-start-link">
                                <div className="footer-div-start-link-logo">
                                    <a className="footer-div-start-link-logo-item" href="/">
                                        <img src={brandIcon} />
                                        DeeperData
                                    </a>
                                </div>
                                <div className="footer-div-start-link-menu-1">
                                    <div className="text-small">Explore All Features</div>
                                    <div className="text-small">Pricing</div>
                                    <div className="text-small">Company</div>
                                    <div className="text-small">Log In</div>
                                </div>
                                <div className="footer-div-start-link-menu-2">
                                    <div className="text-small">Privacy Policy</div>
                                    <div className="text-small">Terms Of Use</div>
                                    <div className="text-small">Contact Us</div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-div-links">
                            <button className="footer-div-links-btn"><span className="text-big">Get Started</span></button>
                            <div className="footer-div-social">
                                <div className="footer-div-social-text text-bigger">Social</div>
                                <div className="footer-div-social-icons">
                                    <div className="social-icon social-icon-facebook"><i className="icon ion-logo-facebook text-normal"></i></div>
                                    <div className="social-icon social-icon-twitter"><i className="icon ion-logo-twitter text-normal"></i></div>
                                    <div className="social-icon social-icon-linkdin"><i className="icon ion-logo-linkedin text-normal"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-for-small-screen">
                    <div className="footer-div-start">
                        <h1 className="text-biggest">Get Starts Today</h1>
                        <button className="footer-div-links-btn"><span className="text-big">Get Started</span></button>
                    </div>
                    <div className="footer-div-navigation">
                        <a className="footer-div-start-link-logo-item" href="/">
                            <img src={brandIcon} />
                        </a>
                        <div className="footer-line"></div>
                        <div className="footer-nav">
                            <div className="text-small">Company</div>
                            <div><i className="icon ion-ios-arrow footer-icon"></i></div>
                        </div>
                        <div className="footer-line"></div>
                        <div className="footer-nav">
                            <div className="text-small">Resources</div>
                            <div><i className="icon ion-ios-arrow text-small"></i></div>
                        </div>
                        <div className="footer-line"></div>
                        <div className="footer-nav">
                            <div className="text-small">Terms</div>
                            <div><i className="icon ion-ios-arrow text-small"></i></div>
                        </div>
                        <div className="footer-line"></div>
                        <div className="footer-nav">
                            <div className="footer-nav-icon"><i className="icon ion-logo-facebook text-normal"></i></div>
                            <div className="footer-nav-icon"><i className="icon ion-logo-twitter text-normal"></i></div>
                            <div className="footer-nav-icon"><i className="icon ion-logo-linkedin text-normal"></i></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}