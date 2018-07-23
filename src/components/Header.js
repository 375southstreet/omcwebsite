import React from "react";


export default class Header extends React.Component {
  render(){
    return(
      <div className="page-wrapper">
        <div className="header-container">
          <NotificationBar />
          <NavigationBar />
        </div>
        <SliderBox />
        <AboutSection />
        <AboutSection2Dot1 />
        <NewsAndServicesSection />
        <TeamSection />
        <FooterMain />
      </div>
    )
  }
};


class NavigationBar extends React.Component {
  render(){
    return(
      <div className="sticky-wrapper"><header className="header fixed fixed-desktop clearfix">
          <div className="container">
            <div className="row">
              <NavigationBarLogo />
              <div className="col-lg-8 ml-lg-auto">
                <div className="header-second clearfix">
                <div className="main-navigation main-navigation--mega-menu  animated">
                  <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="navbar-brand clearfix hidden-lg-up">
                      <div id="logo-mobile" className="logo">
                        <a href="index.html"><img id="logo-img-mobile" src="images/logo_pink_orig.png" width="50" alt="O.M Clinic" /></a>
                      </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-1" aria-controls="navbar-collapse-1" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                      <ul className="navbar-nav ml-xl-auto">
                        <li className="nav-item dropdown active mega-menu mega-menu--wide">
                          <a href="index.html" className="nav-link" id="first-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                        </li>
                        <li className="nav-item dropdown mega-menu mega-menu--wide">
                          <a href="#about-omc" className="nav-link smooth-scroll" id="second-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
                        </li>
                        <li className="nav-item dropdown mega-menu mega-menu--narrow">
                          <a href="#services-omc" className="nav-link smooth-scroll" id="fourth-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                        </li>
                        <li className="nav-item">
                          <a href="#news-omc" className="nav-link smooth-scroll" id="third-dropdown">News</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a href="#team-omc" className="nav-link smooth-scroll" id="fifth-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Team</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a href="#contact-omc" className="nav-link smooth-scroll" id="sixth-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                </div>

              </div>
              <div className="col-auto hidden-md-down pl-0 pl-md-1">
                <div className="header-dropdown-buttons">
                  <button href="#" className="btn btn-sm hidden-xs btn-default btn-animated" data-toggle="modal" data-target="#appointmentModal">Apointment <i className="fa fa-hospital-o pl-1"></i></button>
                </div>
                <div className="container">
                  <div className="modal fade" id="appointmentModal" role="dialog">
                    <div className="modal-dialog">

                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">Appointment</h4>
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                          <p>Please call us for Appointments between 6:30PM to 9PM on Monday to Saturday</p>
                          <a href="tel:+919551625019" className="btn btn-sm hidden-xs btn-default btn-animated">Call Us <i className="pl-1 fa fa-phone"></i></a>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-sm hidden-xs btn-default btn-animated" data-dismiss="modal">Close <i className="pl-1 fa fa-close"></i></button>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </header></div>
    )
  }
};

class NavigationBarLogo extends React.Component {
  render(){
    return(
      <div className="col-md-auto hidden-md-down pl-3">
        <div className="header-first clearfix">
          <div id="logo" className="logo">
            <a href="index.html"><img id="logo_img" src="images/logo_pink_orig.png" height="70" width="50" alt="O.M Clinic" /></a>
          </div>
        </div>
      </div>
    )
  }
};

class NotificationBar extends React.Component {
  render(){
    return(
      <div className="header-top colored">
        <div className="container">
          <div className="row">
            <NotificationBarLeft />
            <NotificationBarRight />
          </div>
        </div>
      </div>
    )
  }
};

class NotificationBarLeft extends React.Component {
  render(){
    return(
      <div className="col-3 col-md-5">
        <div className="header-top-first clearfix">
          <ul className="social-links circle small clearfix hidden-sm-down">
            <li className="twitter"><a href="https://twitter.com/omcarepammal"><i className="fa fa-twitter"></i></a></li>
            <li className="youtube"><a href="#"><i className="fa fa-youtube-play"></i></a></li>
            <li className="facebook"><a href="https://www.facebook.com/omcare.pammal"><i className="fa fa-facebook"></i></a></li>
          </ul>
          <div className="social-links hidden-md-up circle small pull-right">
            <div className="btn-group dropdown">
              <button id="header-top-drop-1" type="button" className="btn dropdown-toggle dropdown-toggle--no-caret" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt"></i></button>
              <ul className="dropdown-menu dropdown-animation" aria-labelledby="header-top-drop-1">
                <li className="twitter"><a href="https://twitter.com/omcarepammal"><i className="fa fa-twitter"></i></a></li>
                <li className="youtube"><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                <li className="facebook"><a href="https://www.facebook.com/omcare.pammal"><i className="fa fa-facebook"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

class NotificationBarRight extends React.Component {
  render(){
    return(
      <div className="col-8 col-md-7">
        <div id="header-top-second" className="clearfix text-right">
          <ul className="list-inline">
            <li className="list-inline-item hidden-md-down"><a className="link-light" href="#"><i className="fa fa-user-md pr-1"></i>Find a Doctor</a></li>
            <li className="list-inline-item hidden-md-down"><a className="link-light" href="#"><i className="fa fa-flask pr-1"></i>Researches</a></li>
            <li className="list-inline-item"><a className="link-light" href="#"><i className="fa fa-info-circle pr-1"></i>Information</a></li>
            <li className="list-inline-item"><a className="link-light" href="tel:+919551625019"><i className="fa fa-phone pr-1"></i><strong>Call Us</strong></a></li>
          </ul>
        </div>
      </div>
    )
  }
};

class SliderBox extends React.Component {
  render() {
    return (
      <div className="banner clearfix">
        <div className="slideshow">

          <img src="./images/medical-slider-slide-1.jpg" />
        </div>

      </div>
    )
  }
};

class AboutSection3 extends React.Component {
  render(){
    var listPaddingTopStyle1 = {
      padding: 1
    };
    var listPaddingTopStyle2 = {
      padding: 1,
      marginBottom: "0.85rem"
    };
    return (
      <div className="row">
        <div className="col-lg-4">
          <div className="pv-30 ph-20 feature-box bordered shadow-2 text-center object-non-visible animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
            <span className="icon default-bg circle"><i className="fa fa-plus-square"></i></span>
            <h3>Since 2014</h3>
            <div className="separator clearfix"></div>
            <p>We provide modern scientific medicine with individualized care since 2014.</p>
            <a href="#" className="btn btn-default btn-animated btn-sm hidden-xs">Read More <i className="fa fa-angle-double-right"></i></a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pv-30 ph-20 feature-box bordered shadow-2 text-center object-non-visible animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay="200">
            <span className="icon default-bg circle"><i className="fa fa-hospital-o"></i></span>
            <h3>Apointments</h3>
            <div className="separator clearfix"></div>
            <p>Consultation by appointment basis from Monday to Saturday in the evenings</p>
            <a href="#" className="btn btn-default btn-animated btn-sm hidden-xs">Make An Apointment <i className="pl-1 fa fa-stethoscope"></i></a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="pv-30 ph-20 feature-box bordered shadow-2 text-center object-non-visible animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay="300">
            <span className="icon default-bg circle"><i className="fa fa-clock-o"></i></span>
            <h3>Opening Hours</h3>
            <div className="separator-2 mt-20 clearfix"></div>
            <ul className="list-unstyled small list-icons text-left" style={listPaddingTopStyle2}>
              <li style={listPaddingTopStyle1}><strong className="text-default">Monday - Saturday</strong> <span className="pull-right">6.30PM - 9PM</span></li>
              <li style={listPaddingTopStyle1}><strong className="text-default">Sunday</strong> <span className="pull-right">Holiday</span></li>
            </ul>
            <a href="#" className="btn btn-default btn-sm hidden-xs btn-animated">Call Us <i className="pl-1 fa fa-phone"></i></a>
          </div>
        </div>
      </div>
    )
  }
};

class AboutSection4 extends React.Component {
  render() {
    return (
      <div className="row grid-space-10">
        <div className="col-md-6 col-lg-3">
          <div className="pv-30 ph-20 white-bg feature-box bordered text-center">
            <span className="icon default-bg circle"><i className="fa fa-plus-square"></i></span>
            <h3>Since 2014</h3>
            <div className="separator clearfix"></div>
            <p>We provide modern scientific medicine with individualized care since 2014.</p>
            <a href="#" className="btn btn-default btn-animated btn-sm hidden-xs">Read More <i className="fa fa-angle-double-right"></i></a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="pv-30 ph-20 white-bg feature-box bordered text-center">
            <span className="icon default-bg circle"><i className="fa fa-hospital-o"></i></span>
            <h3>Apointments</h3>
            <div className="separator clearfix"></div>
            <p>Consultation by appointment basis from Monday to Saturday in the evenings.</p>
            <a href="#" className="btn btn-default btn-animated">Make An Apointment <i className="pl-1 fa fa-stethoscope"></i></a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="pv-30 ph-20 default-bg feature-box bordered text-center">
            <span className="icon dark-bg circle"><i className="fa fa-phone"></i></span>
            <h3>Lorem Ipsum</h3>
            <div className="separator clearfix"></div>
            <p>Inventore dolores aut laboriosam cum consequuntur delectus sequi lorem ipsum dolor sit amet</p>
            <a href="#" className="btn btn-default btn-animated">Lets talk <i className="pl-1 fa fa-phone"></i></a>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="pv-30 ph-20 white-bg feature-box bordered text-center">
            <span className="icon default-bg circle"><i className="fa fa-clock-o"></i></span>
            <h3>Opening Hours</h3>
            <div className="separator-2 mt-20 clearfix"></div>
            <ul className="list-unstyled small list-icons text-left">
              <li><strong className="text-default">Monday - Saturday</strong> <span className="pull-right">6.30PM - 9PM</span></li>
              <li><strong className="text-default">Sunday</strong> <span className="pull-right">Holiday</span></li>
            </ul>
            <div className="separator-3 mt-20 clearfix"></div>
            <p className="small text-default">Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
      </div>
    )
  }
};

class AboutSection extends React.Component {
  render() {
    return (
      <section className="pv-10 light-gray-bg clearfix" id="about-omc">
        <div className="container">
        <br />
          <h3 className="title logo-font text-center text-default">O.M Child &nbsp;<span className="text-muted">and</span>&nbsp; Health Care</h3>
          <div className="separator"></div>
          <p className="text-center"><span className="text-default">O.M Child</span> & <span className="text-default">Health Care</span> clinic was opened in 2014, since then we are providing holistic care in the field of child health, vaccination, joint pain, back pain, musculoskeletal pain, Rheumatological problems, diabetes, hypertension, cardio respiratory problems <br /> We have successfully managed nearly 10000 patients in the past 3 years.</p>
          <br />
          <AboutSection3 />
        </div>
      </section>
    )
  }
};

class FindDoctor extends React.Component {
  render(){
    return(
      <section className="section dark-bg clearfix">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="call-to-action text-center">
                <div className="row">
                  <div className="col-md-8">
                    <h1 className="title"><i className="fa fa-user-md pr-10"></i>Find A Doctor</h1>
                    <ul className="list-inline">
                      <li className="list-inline-item"><i className="fa fa-circle text-default"></i> <a href="#" className="link-light">Rheumatologists&lrm;</a></li>
                      <li className="list-inline-item"><i className="fa fa-circle text-default"></i> <a href="#" className="link-light">Pediatrics&lrm;</a></li>
                      <li className="list-inline-item"><i className="fa fa-circle text-default"></i> <a href="#" className="link-light">Diabetologists&lrm;</a></li>
                      <li className="list-inline-item"><i className="fa fa-circle text-default"></i> <a href="#" className="link-light">General Physicians&lrm;</a></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <br />
                    <p><a href="#" className="btn btn-lg btn-default btn-animated">More Specialties<i className="fa fa-search pl-20"></i></a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

class AboutSection2 extends React.Component {

  render(){
    var divStyle = {
      marginTop: '-131.191px'
    };
    return (
      <section className="full-width-section">
        <div className="full-image-container light-gray-bg">
          <img className="to-right-block" src="images/medical-section-image-1.jpg" alt="" />
          <div className="full-image-overlay text-right" style={divStyle}>
            <h3 className="mt-4">With Compassionate Care Since 2014</h3>
            <ul className="list-icons">
              <li>Unt in culpa qui deserunt <i className="fa fa-check-square-o"></i></li>
              <li>Elegant Design <i className="fa fa-check-square-o"></i></li>
              <li>ipsam asperiores fugiat quo <i className="fa fa-check-square-o"></i></li>
              <li>Animi veniam veritatis sint <i className="fa fa-check-square-o"></i></li>
              <li>Voluptatum officia suscipit <i className="fa fa-check-square-o"></i></li>
              <li>Labore et dolore magna aliqua <i className="fa fa-check-square-o"></i></li>
            </ul>
          </div>
        </div>
        <div className="full-text-container light-gray-bg">
          <h3 className="logo-font mt-4"><span className="text-muted">About</span> <span className="text-default">O.M Childcare</span></h3>
          <div className="separator-2 hidden-lg-down"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi veniam, veritatis sint consequuntur! Natus, culpa, explicabo! Non quo laboriosam nobis quia, amet excepturi optio dolor impedit. Perferendis libero unde, nulla deserunt sequi. Voluptatum, officia suscipit porro reprehenderit vitae quo rem reiciendis, a vero quae. Vero beatae voluptatum.</p>
          <div className="separator-3 hidden-lg-down"></div>
        </div>
        <div className="full-text-container light-gray-bg">
          <h3 className="logo-font mt-4"><span className="text-muted">About</span> <span className="text-default">O.M Healthcare</span></h3>
          <div className="separator-2 hidden-lg-down"></div>
          <p>
          Content under adult health
1. Rheumatology-Rheumatoid arthritis & SLE
2. Joint pain
3. Back pain
4. Musculoskeletal pain
5 Diabetes
6. Hypertension
7.Respiratory problems
          </p>
          <div className="separator-3 hidden-lg-down"></div>
        </div>
      </section>
    )
  }
};


class AboutSection2Dot1 extends React.Component {
  render() {
    var aboutSection21Style1 = {
      backgroundPosition: '50% 15%'
    };
    var bgImage = {
      backgroundPosition: '50% 15%',
      backgroundImage: 'url(./images/background-image-1.png)'
    };
    return (
      <section className="pv-40 dark-translucent-bg" style={bgImage} id="services-omc">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <br />
              <div className="feature-box-2 object-non-visible right animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                <span className="icon default-bg small"><i className="fa fa-user-md"></i></span>
                <div className="body">
                  <h3 className="logo-font mt-4"><span className="text-default">O.M Childcare</span> Services</h3>
                  <p>Content for childcare. Provide some description here, add more details and information, what else?</p>
                  <div className="separator-3"></div>
                  <ul className="list-icons">
                    <li>Vaccination<i className="fa fa-check-square-o"></i></li>
                    <li>Child specialist<i className="fa fa-check-square-o"></i></li>
                    <li>Adolescent care (12-18 yrs)<i className="fa fa-check-square-o"></i></li>
                    <li>Child development screening<i className="fa fa-check-square-o"></i></li>
                    <li>Newborn care (upto 1 month of life)<i className="fa fa-check-square-o"></i></li>
                    <li>Allergy, asthma, respiratory problems<i className="fa fa-check-square-o"></i></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <br />
              <div className="feature-box-2 object-non-visible animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                <span className="icon default-bg small"><i className="fa fa-medkit"></i></span>
                <div className="body">
                  <h3 className="logo-font mt-4"><span className="text-default">O.M Healthcare</span> Services </h3>
                  <p>Content for childcare. Provide some description here, add more details and information, what else?</p>
                  <div className="separator-2"></div>
                  <ul className="list-icons">
                    <li><i className="fa fa-check-square-o"></i>Diabetes</li>
                    <li><i className="fa fa-check-square-o"></i>Hypertension</li>
                    <li><i className="fa fa-check-square-o"></i>Back & Joint pain</li>
                    <li><i className="fa fa-check-square-o"></i>Musculoskeletal pain</li>
                    <li><i className="fa fa-check-square-o"></i>Respiratory problems</li>
                    <li><i className="fa fa-check-square-o"></i>Rheumatology-Rheumatoid arthritis & SLE</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

class ServicesSlickSlider extends React.Component {
  render() {
    return(
      <div className="slick-carousel content-slider-with-large-controls-autoplay dark-controls light-gray-bg buttons-hide">
        <div className="image-box style-2">
          <div className="overlay-container overlay-visible">
            <img src="images/medical-service-1.jpg" alt="" />
            <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
            <div className="overlay-bottom hidden-xs">
              <div className="text">
                <p className="lead margin-clear text-left">Medical Education</p>
              </div>
            </div>
          </div>
          <div className="body padding-horizontal-clear">
            <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Aliquam atque ipsam nihil dood truck quinoa.</p>
            <a className="link-dark" href="page-services.html">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
          </div>
        </div>
        <div className="image-box style-2">
          <div className="overlay-container overlay-visible">
            <img src="images/medical-service-2.jpg" alt="" />
            <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
            <div className="overlay-bottom hidden-xs">
              <div className="text">
                <p className="lead margin-clear text-left">Seminars For Medicals Professionals</p>
              </div>
            </div>
          </div>
          <div className="body padding-horizontal-clear">
            <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Aliquam atque ipsam nihil dood truck quinoa.</p>
            <a className="link-dark" href="page-services.html">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
          </div>
        </div>
        <div className="image-box style-2">
          <div className="overlay-container overlay-visible">
            <img src="images/medical-service-3.jpg" alt="" />
            <a href="#" className="overlay-link"><i className="fa fa-link"></i></a>
            <div className="overlay-bottom hidden-xs">
              <div className="text">
                <p className="lead margin-clear text-left">Research &amp; Development</p>
              </div>
            </div>
          </div>
          <div className="body padding-horizontal-clear">
            <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Aliquam atque ipsam nihil dood truck quinoa.</p>
            <a className="link-dark" href="page-services.html">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
          </div>
        </div>
      </div>
    )
  }
};

class ServiceGallery extends React.Component {
  render() {
    return(
      <div className="col-lg-4">
        <h3 className="mt-4">Our <span className="text-default">Gallery</span></h3>
        <div className="separator-2"></div>

        <div className="row grid-space-20">
          <div className="col-4">
            <div className="overlay-container">
              <img src="images/portfolio-1.png" alt="" />
              <a href="images/portfolio-1.png" className="overlay-link small popup-img" title="Second image title">
                <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="overlay-container">
              <img src="images/portfolio-2.jpg" alt=""/>
              <a href="images/portfolio-2.jpg" className="overlay-link small popup-img" title="Third image title">
                <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="overlay-container">
              <img src="images/portfolio-3.jpg" alt=""/>
              <a href="images/portfolio-3.jpg" className="overlay-link small popup-img" title="Fourth image title">
                <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>

        </div>
        <br />
        <div className="row grid-space-20">

          <div className="col-4">
            <div className="overlay-container">
              <img src="images/portfolio-5.jpg" alt=""/ >
              <a href="images/portfolio-5.jpg" className="overlay-link small popup-img" title="Fifth image title">
                <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="overlay-container">
              <img src="images/portfolio-6.jpg" alt=""/>
              <a href="images/portfolio-6.jpg" className="overlay-link small popup-img" title="Fourth image title">
                <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="overlay-container">
              <img src="images/portfolio-4.jpg" alt=""/ >
              <a href="images/portfolio-4.jpg" className="overlay-link small popup-img" title="Fifth image title">
                <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="row grid-space-20">

          <div className="col-4">
            <div className="overlay-container">
              <img src="images/portfolio-7.jpg" alt=""/ >
              <a href="images/portfolio-7.jpg" className="overlay-link small popup-img" title="Fifth image title">
                <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="overlay-container">
              <img src="images/portfolio-8.jpg" alt=""/>
              <a href="images/portfolio-8.jpg" className="overlay-link small popup-img" title="Fourth image title">
                <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="overlay-container">
              <img src="images/portfolio-9.jpg" alt=""/ >
              <a href="images/portfolio-9.jpg" className="overlay-link small popup-img" title="Fifth image title">
                <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
        </div>


      </div>
    )
  }
};

class NewsAndServicesSection extends React.Component {
  render(){
    var nsStyle1 = {
      width: '254px'
    };
    var nsStyle2 = {
      display: 'inline-block'
    };
    var nsStyle3 = {
      opacity: 1,
      width: '254px',
      transform: 'translate3d(-509px, 0px, 0px)'
    };
    return(
      <section className="section clearfix" id="news-omc">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h3 className="mt-4">Latest <span className="text-default">News</span></h3>
              <div className="separator-2"></div>
              <div className="block">
                <div className="media margin-clear">
                  <div className="d-flex pr-2">
                    <div className="overlay-container">
                      <img className="media-object" src="images/medical-blog-thumb-1.jpg" alt="blog-thumb" />
                      <a href="blog-post.html" className="overlay-link small"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="media-heading mb-2"><a href="blog-post.html">Lorem ipsum dolor sit amet</a></h5>
                    <div className="row">
                      <div className="col-lg-8">second line of news</div>
                      <div className="col-lg-4 pull-right"><a href="#" className="btn btn-default btn-sm hidden-xs btn-animated">Read More<i className="fa fa-long-arrow-right pl-1"></i></a></div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="media margin-clear">
                  <div className="d-flex pr-2">
                    <div className="overlay-container">
                      <img className="media-object" src="images/medical-blog-thumb-3.jpg" alt="blog-thumb" />
                      <a href="blog-post.html" className="overlay-link small"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="media-heading mb-2"><a href="blog-post.html">Cum eligendi nisi rerum porro</a></h5>
                    <div className="row">
                      <div className="col-lg-8">second line of news</div>
                      <div className="col-lg-4 pull-right"><a href="#" className="btn btn-default btn-sm hidden-xs btn-animated">Read More<i className="fa fa-long-arrow-right pl-1"></i></a></div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="media margin-clear">
                  <div className="d-flex pr-2">
                    <div className="overlay-container">
                      <img className="media-object" src="images/medical-blog-thumb-3.jpg" alt="blog-thumb" />
                      <a href="blog-post.html" className="overlay-link small"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="media-heading mb-2"><a href="blog-post.html">Cum eligendi nisi rerum porro</a></h5>
                    <div className="row">
                      <div className="col-lg-8">second line of news</div>
                      <div className="col-lg-4 pull-right"><a href="#"  className="btn btn-default btn-sm hidden-xs btn-animated">Read More<i className="fa fa-long-arrow-right pl-1"></i></a></div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="media margin-clear">
                  <div className="d-flex pr-2">
                    <div className="overlay-container">
                      <img className="media-object" src="images/medical-blog-thumb-3.jpg" alt="blog-thumb" />
                      <a href="blog-post.html" className="overlay-link small"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="media-heading mb-2"><a href="blog-post.html">Cum eligendi nisi rerum porro</a></h5>
                    <div className="row">
                      <div className="col-lg-8">second line of news</div>
                      <div className="col-lg-4 pull-right"><a href="#"  className="btn btn-default btn-sm hidden-xs btn-animated">Read More<i className="fa fa-long-arrow-right pl-1"></i></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h3 className="mt-4">Our <span className="text-default">Services</span></h3>
              <div className="separator-2"></div>
              <div className="collapse-style-2 mb-4" id="accordion-1" role="tablist" aria-multiselectable="true">
                <div className="card">
                  <div className="card-header" role="tab" id="headingOne">
                    <h4 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordion-1" href="#collapseOne-2" aria-expanded="false" aria-controls="collapseOne-2" className="collapsed">
                        <i className="fa fa-medkit pr-10"></i>Outpatient Treatment
                      </a>
                    </h4>
                  </div>
                  <div id="collapseOne-2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                    <div className="card-block bordered p-15">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officiaasd. <a href="#">Read More<i className="fa fa-long-arrow-right pl-1"></i></a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingTwo">
                    <h4 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordion-1" href="#collapseTwo-2" className="collapsed" aria-expanded="false" aria-controls="collapseTwo-2" >
                        <i className="fa fa fa-hospital-o pr-10"></i>Inpatient Treatment
                      </a>
                    </h4>
                  </div>
                  <div id="collapseTwo-2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="card-block bordered p-15">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officiaasd. <a href="#">Read More<i className="fa fa-long-arrow-right pl-1"></i></a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingThree">
                    <h4 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordion-1" href="#collapseThree-2" className="collapsed" aria-expanded="false" aria-controls="collapseThree-2">
                        <i className="fa fa-eyedropper pr-10"></i>Vaccination
                      </a>
                    </h4>
                  </div>

                  <div id="collapseThree-2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                    <div className="card-block bordered p-15">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officiaasd. <a href="#">Read More<i className="fa fa-long-arrow-right pl-1"></i></a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingFour">
                    <h4 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordion-1" href="#collapseFour-2" className="collapsed" aria-expanded="false" aria-controls="collapseFour-2">
                        <i className="fa-stethoscope fa pr-10"></i>Health Checkup
                      </a>
                    </h4>
                  </div>
                  <div id="collapseFour-2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                    <div className="card-block bordered p-15">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officiaasd. <a href="#">Read More<i className="fa fa-long-arrow-right pl-1"></i></a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingFive">
                    <h4 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordion-1" href="#collapseFive-2" className="collapsed" aria-expanded="false" aria-controls="collapseFive-2">
                        <i className="fa-road fa pr-10"></i>Lab Services
                      </a>
                    </h4>
                  </div>
                  <div id="collapseFive-2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                    <div className="card-block bordered p-15">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officiaasd. <a href="#">Read More<i className="fa fa-long-arrow-right pl-1"></i></a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingSix">
                    <h4 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordion-1" href="#collapseSix-2" className="collapsed" aria-expanded="false" aria-controls="collapseSix-2">
                        <i className="fa-book fa pr-10"></i>Health Education
                      </a>
                    </h4>
                  </div>
                  <div id="collapseSix-2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                    <div className="card-block bordered p-15">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officiaasd. <a href="#">Read More<i className="fa fa-long-arrow-right pl-1"></i></a>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingSeven">
                    <h4 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordion-1" href="#collapseSeven-2" className="collapsed" aria-expanded="false" aria-controls="collapseSeven-2">
                        <i className="fa-user-md fa pr-10"></i>Counseling
                      </a>
                    </h4>
                  </div>
                  <div id="collapseSeven-2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSeven">
                    <div className="card-block bordered p-15">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officiaasd. <a href="#">Read More<i className="fa fa-long-arrow-right pl-1"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ServiceGallery />

          </div>
        </div>
      </section>
    )
  }
};

class FooterMain extends React.Component {
  render(){
    return (
      <section id="contact-omc">
        <footer id="footer" className="clearfix light">
          <div className="footer">
            <div className="container">
              <div className="footer-inner">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="footer-content">
                      <div className="logo-footer">
                        <div className="row">
                          <div className="col-lg-1">
                            <img id="logo-footer" src="images/logo_pink_orig.png" alt="" />
                          </div>
                          <div className="col-lg-7">
                            <h4 className="title logo-font text-default text-left">O.M Health <span className="text-muted"> & </span>Child Care</h4>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <p>We have successfully managed nearly 10,000 patients in the past 3 years. We develop strong bonds with many of our patients and gain great satisfaction from seeing their happiness. Reach us at., </p>
                          <ul className="list-icons">
                            <li><i className="fa fa-map-marker pr-10 text-default"></i>Old No-31, New No-13, Kamaraj Salai, Anagaputhur, Chennai - 600 070</li>
                            <li><i className="fa fa-phone pr-10 text-default"></i> +91 95516 25019, +91 94446 98388</li>
                            <li><a href="mailto:omcarepammal@gmail.com"><i className="fa fa-envelope-o pr-10"></i>omcarepammal@gmail.com</a></li>
                          </ul>
                          <ul className="social-links circle animated-effect-1">
                            <li className="twitter"><a href="https://twitter.com/omcarepammal"><i className="fa fa-twitter"></i></a></li>
                            <li className="youtube"><a href="#"><i className="fa fa-youtube"></i></a></li>
                            <li className="facebook"><a href="https://www.facebook.com/omcare.pammal"><i className="fa fa-facebook"></i></a></li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <div id="map-canvas"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="footer-content">
                      <h2 className="title">Contact Us</h2>
                      <br />
                      <form className="margin-clear">
                        <div className="form-group has-feedback">
                          <label className="sr-only" htmlFor="name2">Name</label>
                          <input type="text" className="form-control" id="name2" placeholder="Name" required="" />
                          <i className="fa fa-user form-control-feedback"></i>
                        </div>
                        <div className="form-group has-feedback">
                          <label className="sr-only" htmlFor="email2">Email address</label>
                          <input type="email" className="form-control" id="email2" placeholder="Enter email" required="" />
                          <i className="fa fa-envelope form-control-feedback"></i>
                        </div>
                        <div className="form-group has-feedback">
                          <label className="sr-only" htmlFor="message2">Message</label>
                          <textarea className="form-control" rows="6" id="message2" placeholder="Message" required=""></textarea>
                          <i className="fa fa-pencil form-control-feedback"></i>
                        </div>
                        <button type="button" value="Send" className="margin-clear submit-button btn btn-default btn-sm hidden-xs btn-animated">Send  <i className="pl-1 fa fa-send"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="subfooter">
            <div className="container">
              <div className="subfooter-inner">
                <div className="row">
                  <div className="col-md-12">
                    <p className="text-center">Copyright © 2018. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </footer>
      </section>
    )
  }
};

class TeamSection extends React.Component {
  render(){
    var teamStyle1 = {
      opacity: 0.5,
      width: '5850px',
      transform: 'translate3d(-1170px, 0px, 0px)'
    };
    var teamStyle2 = {
      width: '1170px'
    };
    var teamStyle3 = {
      fontSize: '60%'
    };
    return (
      <section className="clearfix" id="team-omc">
        <div className="container pv-20">
          <div className="row justify-content-lg-center">
            <div className="col-lg-10">
              <h3 className="mt-4 text-center">Meet Our <span className="text-default">Team</span></h3>
              <div className="separator"></div>
              <p className="lead text-center">O.M Clinic is led by couple of Young Experienced Doctors. <br />Our Team is responsible for Family centred care, Great bond and Satisfaction. <br /> Medicine is not just a business to us. It is our life. Our business and reputation rests on the happiness of every individual patient we see and your privacy is absolutely paramount. You will feel our warmth and support from the moment you walk through our door.  </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div className="image-box team-member shadow mb-20">
              <div className="overlay-container overlay-visible">
                <img src="images/doctor-2.svg" alt="" />
                <a href="#" className="overlay-link" title="Dr.M.Sabarinath, MBBS, MD (Paediatrics)"><i className="fa fa-link"></i></a>
                <div className="overlay-bottom">
                  <div className="text">
                    <h3>Dr.M.Sabarinath, <br /><em className="small" style={teamStyle3}>MBBS,MD (PAED)</em></h3>
                    <div className="separator light"></div>
                    <p className="medium margin-clear"><em>Child Specialist</em></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="image-box team-member shadow mb-20">
              <div className="overlay-container overlay-visible">
                <img src="images/doctor-1.svg" alt="" />
                <a href="#" className="overlay-link" title="Dr.C.Saranya, MBBS, MD (General Medicine), DM (Rheumatology) "><i className="fa fa-link"></i></a>
                <div className="overlay-bottom">
                  <div className="text">
                    <h3 className="title">Dr.C.Saranya, <br/><em className="small" style={teamStyle3}>MBBS, MD (Gen Med)</em></h3>
                    <div className="separator light"></div>
                    <p className="medium margin-clear">
                      <em>Internal Medicine & Rheumatology</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="image-box team-member shadow mb-20">
              <div className="overlay-container overlay-visible">
                <img src="images/manager.svg" alt="" />
                <a href="#" className="overlay-link" title="Clinic Manager"><i className="fa fa-link"></i></a>
                <div className="overlay-bottom">
                  <div className="text">
                    <h3 className="title">V.Mahadevan, <br/><em className="small" style={teamStyle3}>Clinic Manager</em></h3>
                    <div className="separator light"></div>
                    <p className="medium margin-clear"><em> Clinic Manager</em></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
