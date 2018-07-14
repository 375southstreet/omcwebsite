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
        <FindDoctor />
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
                        <a href="index.html"><img id="logo-img-mobile" src="images/logo_pink_orig.png" width="50" alt="OM Clinic" /></a>
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
                          <a href="#" className="nav-link" id="second-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
                        </li>
                        <li className="nav-item">
                          <a href="#news" className="nav-link js-scroll-trigger" id="third-dropdown">News</a>
                        </li>
                        <li className="nav-item dropdown mega-menu mega-menu--narrow">
                          <a href="#" className="nav-link" id="fourth-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a href="#" className="nav-link" id="fifth-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Team</a>
                        </li>
                        <li className="nav-item dropdown">
                          <a href="#" className="nav-link" id="sixth-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                </div>

              </div>
              <div className="col-auto hidden-md-down pl-0 pl-md-1">
                <div className="header-dropdown-buttons">
                  <a href="#" className="btn btn-sm hidden-xs btn-default">Apointment <i className="fa fa-hospital-o pl-1"></i></a>
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
            <a href="index.html"><img id="logo_img" src="images/logo_pink_orig.png" height="70" width="50" alt="OM Clinic" /></a>
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
      <div className="col-2 col-md-5">
        <div className="header-top-first clearfix">
          <ul className="social-links circle small clearfix hidden-sm-down">
            <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li className="googleplus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
            <li className="youtube"><a href="#"><i className="fa fa-youtube-play"></i></a></li>
            <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
          </ul>
          <div className="social-links hidden-md-up circle small">
            <div className="btn-group dropdown">
              <button id="header-top-drop-1" type="button" className="btn dropdown-toggle dropdown-toggle--no-caret" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt"></i></button>
              <ul className="dropdown-menu dropdown-animation" aria-labelledby="header-top-drop-1">
                <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li className="googleplus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                <li className="youtube"><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
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
      <div className="col-10 col-md-7">
        <div id="header-top-second" className="clearfix text-right">
          <ul className="list-inline">
            <li className="list-inline-item"><a className="link-light" href="#"><i className="fa fa-user-md pr-1"></i>Find a Doctor</a></li>
            <li className="list-inline-item"><a className="link-light" href="#"><i className="fa fa-flask pr-1"></i>Researches</a></li>
            <li className="list-inline-item"><a className="link-light" href="#"><i className="fa fa-info-circle pr-1"></i>Information</a></li>
            <li className="list-inline-item hidden-md-down"><strong className="pl-1">Call Us:</strong> +12 123 123 123</li>
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
                <a href="#" className="btn btn-default btn-animated">Read More <i className="fa fa-angle-double-right"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="pv-30 ph-20 feature-box bordered shadow-2 text-center object-non-visible animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay="200">
                <span className="icon default-bg circle"><i className="fa fa-hospital-o"></i></span>
                <h3>Apointments</h3>
                <div className="separator clearfix"></div>
                <p>Consultation by appointment basis from Monday to Saturday in the evenings</p>
                <a href="#" className="btn btn-default btn-animated">Make An Apointment <i className="pl-1 fa fa-stethoscope"></i></a>
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
                <a href="#" className="btn btn-default btn-animated">Call Us <i className="pl-1 fa fa-phone"></i></a>
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
            <a href="#" className="btn btn-default btn-animated">Read More <i className="fa fa-angle-double-right"></i></a>
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
      <section className="pv-10 light-gray-bg clearfix">
        <div className="container">
        <br />
          <h3 className="title logo-font text-center text-default">OM Child &nbsp;<span className="text-muted">and</span>&nbsp; Health Care</h3>
          <div className="separator"></div>
          <p className="text-center"><span className="text-default">OM Child</span> & <span className="text-default">Health Care</span> clinic was opened in 2014, since then we are providing holistic care in the field of child health, vaccination, joint pain, back pain, musculoskeletal pain, Rheumatological problems, diabetes, hypertension, cardio respiratory problems <br /> We have successfully managed nearly 10000 patients in the past 3 years.</p>
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
          <h3 className="logo-font mt-4"><span className="text-muted">About</span> <span className="text-default">OM Childcare</span></h3>
          <div className="separator-2 hidden-lg-down"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi veniam, veritatis sint consequuntur! Natus, culpa, explicabo! Non quo laboriosam nobis quia, amet excepturi optio dolor impedit. Perferendis libero unde, nulla deserunt sequi. Voluptatum, officia suscipit porro reprehenderit vitae quo rem reiciendis, a vero quae. Vero beatae voluptatum.</p>
          <div className="separator-3 hidden-lg-down"></div>
        </div>
        <div className="full-text-container light-gray-bg">
          <h3 className="logo-font mt-4"><span className="text-muted">About</span> <span className="text-default">OM Healthcare</span></h3>
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
      backgroundImage: 'url(../../images/background-image-1.png)'
    };
    return (
      <section className="pv-40 dark-translucent-bg" style={bgImage}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <br />
              <div className="feature-box-2 object-non-visible right animated object-visible fadeInDownSmall" data-animation-effect="fadeInDownSmall" data-effect-delay="100">
                <span className="icon default-bg small"><i className="fa fa-user-md"></i></span>
                <div className="body">
                  <h3 className="logo-font mt-4"><span className="text-default">OM Childcare</span> Services</h3>
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
                  <h3 className="logo-font mt-4"><span className="text-default">OM Healthcare</span> Services </h3>
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
      width: '1778px',
      transform: 'translate3d(-762px, 0px, 0px)'
    };
    return(
      <section className="section clearfix" id="news">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt corrupti, cum exercitationem.</p>
                    <a href="#">Read More<i className="fa fa-long-arrow-right pl-1"></i></a>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt corrupti, cum exercitationem.</p>
                    <a href="#">Read More<i className="fa fa-long-arrow-right pl-1"></i></a>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt corrupti, cum exercitationem.</p>
                    <a href="#">Read More<i className="fa fa-long-arrow-right pl-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h3 className="mt-4">Our <span className="text-default">Departments</span></h3>
              <div className="separator-2"></div>
              <div className="collapse-style-2 mb-4" id="accordion-2" role="tablist" aria-multiselectable="true">
                <div className="card">
                  <div className="card-header" role="tab" id="headingOne">
                    <h4 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordion-2" href="#collapseOne-2" aria-expanded="false" aria-controls="collapseOne-2" className="collapsed">
                        <i className="fa fa-eye pr-10"></i>Ophthalmology
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
                      <a data-toggle="collapse" data-parent="#accordion-2" href="#collapseTwo-2" className="collapsed" aria-expanded="false" aria-controls="collapseTwo-2">
                        <i className="fa fa-leaf pr-10"></i>Primary care
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
                      <a data-toggle="collapse" data-parent="#accordion-2" href="#collapseThree-2" className="collapsed" aria-expanded="false" aria-controls="collapseThree-2">
                        <i className="fa fa-users pr-10"></i>Paediatrics
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
                      <a data-toggle="collapse" data-parent="#accordion-2" href="#collapseFour-2" className="collapsed" aria-expanded="false" aria-controls="collapseFour-2">
                        <i className="fa-female fa pr-10"></i>Gynaecology
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
                      <a data-toggle="collapse" data-parent="#accordion-2" href="#collapseFive-2" className="collapsed" aria-expanded="false" aria-controls="collapseFive-2">
                        <i className="fa-road fa pr-10"></i>Orthopaedics
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
                      <a data-toggle="collapse" data-parent="#accordion-2" href="#collapseSix-2" className="collapsed" aria-expanded="false" aria-controls="collapseSix-2">
                        <i className="fa-heart fa pr-10"></i>Cardiology
                      </a>
                    </h4>
                  </div>
                  <div id="collapseSix-2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                    <div className="card-block bordered p-15">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officiaasd. <a href="#">Read More<i className="fa fa-long-arrow-right pl-1"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h3 className="mt-4">Health <span className="text-default">Services</span></h3>
              <div className="separator-2"></div>
              <div className="slick-carousel content-slider-with-large-controls-autoplay dark-controls light-gray-bg buttons-hide slick-initialized slick-slider slick-dotted"><button type="button" className="slick-prev slick-arrow" style={nsStyle2}>Prev</button>
                <div className="slick-list draggable"><div className="slick-track" style={nsStyle3}><div className="image-box style-2 slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabIndex="-1" style={nsStyle1}>
                  <div className="overlay-container overlay-visible">
                    <img src="images/medical-service-3.jpg" alt="" />
                    <a href="#" className="overlay-link" tabIndex="-1"><i className="fa fa-link"></i></a>
                    <div className="overlay-bottom hidden-xs">
                      <div className="text">
                        <p className="lead margin-clear text-left">Research &amp; Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="body padding-horizontal-clear">
                    <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Aliquam atque ipsam nihil dood truck quinoa.</p>
                    <a className="link-dark" href="page-services.html" tabIndex="-1">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
                  </div>
                </div><div className="image-box style-2 slick-slide" data-slick-index="0" aria-hidden="true" tabIndex="-1" role="tabpanel" id="slick-slide10" aria-describedby="slick-slide-control10" style={nsStyle1}>
                  <div className="overlay-container overlay-visible">
                    <img src="images/medical-service-1.jpg" alt="" />
                    <a href="#" className="overlay-link" tabIndex="-1"><i className="fa fa-link"></i></a>
                    <div className="overlay-bottom hidden-xs">
                      <div className="text">
                        <p className="lead margin-clear text-left">Medical Education</p>
                      </div>
                    </div>
                  </div>
                  <div className="body padding-horizontal-clear">
                    <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Aliquam atque ipsam nihil dood truck quinoa.</p>
                    <a className="link-dark" href="page-services.html" tabIndex="-1">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
                  </div>
                </div><div className="image-box style-2 slick-slide" data-slick-index="1" aria-hidden="true" tabIndex="-1" role="tabpanel" id="slick-slide11" aria-describedby="slick-slide-control11" style={nsStyle1}>
                  <div className="overlay-container overlay-visible">
                    <img src="images/medical-service-2.jpg" alt="" />
                    <a href="#" className="overlay-link" tabIndex="-1"><i className="fa fa-link"></i></a>
                    <div className="overlay-bottom hidden-xs">
                      <div className="text">
                        <p className="lead margin-clear text-left">Seminars For Medicals Professionals</p>
                      </div>
                    </div>
                  </div>
                  <div className="body padding-horizontal-clear">
                    <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Aliquam atque ipsam nihil dood truck quinoa.</p>
                    <a className="link-dark" href="page-services.html" tabIndex="-1">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
                  </div>
                </div><div className="image-box style-2 slick-slide slick-current slick-active" data-slick-index="2" aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide12" aria-describedby="slick-slide-control12" style={nsStyle1}>
                  <div className="overlay-container overlay-visible">
                    <img src="images/medical-service-3.jpg" alt="" />
                    <a href="#" className="overlay-link" tabIndex="0"><i className="fa fa-link"></i></a>
                    <div className="overlay-bottom hidden-xs">
                      <div className="text">
                        <p className="lead margin-clear text-left">Research &amp; Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="body padding-horizontal-clear">
                    <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Aliquam atque ipsam nihil dood truck quinoa.</p>
                    <a className="link-dark" href="page-services.html" tabIndex="0">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
                  </div>
                </div><div className="image-box style-2 slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" tabIndex="-1" style={nsStyle1}>
                  <div className="overlay-container overlay-visible">
                    <img src="images/medical-service-1.jpg" alt="" />
                    <a href="#" className="overlay-link" tabIndex="-1"><i className="fa fa-link"></i></a>
                    <div className="overlay-bottom hidden-xs">
                      <div className="text">
                        <p className="lead margin-clear text-left">Medical Education</p>
                      </div>
                    </div>
                  </div>
                  <div className="body padding-horizontal-clear">
                    <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Aliquam atque ipsam nihil dood truck quinoa.</p>
                    <a className="link-dark" href="page-services.html" tabIndex="-1">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
                  </div>
                </div><div className="image-box style-2 slick-slide slick-cloned" data-slick-index="4" aria-hidden="true" tabIndex="-1" style={nsStyle1}>
                  <div className="overlay-container overlay-visible">
                    <img src="images/medical-service-2.jpg" alt="" />
                    <a href="#" className="overlay-link" tabIndex="-1"><i className="fa fa-link"></i></a>
                    <div className="overlay-bottom hidden-xs">
                      <div className="text">
                        <p className="lead margin-clear text-left">Seminars For Medicals Professionals</p>
                      </div>
                    </div>
                  </div>
                  <div className="body padding-horizontal-clear">
                    <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Aliquam atque ipsam nihil dood truck quinoa.</p>
                    <a className="link-dark" href="page-services.html" tabIndex="-1">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
                  </div>
                </div><div className="image-box style-2 slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabIndex="-1" style={nsStyle1}>
                  <div className="overlay-container overlay-visible">
                    <img src="images/medical-service-3.jpg" alt="" />
                    <a href="#" className="overlay-link" tabIndex="-1"><i className="fa fa-link"></i></a>
                    <div className="overlay-bottom hidden-xs">
                      <div className="text">
                        <p className="lead margin-clear text-left">Research &amp; Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="body padding-horizontal-clear">
                    <p>Lorem ipsum dolor sit amet, consectetur adipis elit. Aliquam atque ipsam nihil dood truck quinoa.</p>
                    <a className="link-dark" href="page-services.html" tabIndex="-1">Read More<i className="pl-1 fa fa-angle-double-right"></i></a>
                  </div>
                </div></div></div>


              <button type="button" className="slick-next slick-arrow" style={nsStyle2}>Next</button><ul className="slick-dots" role="tablist"><li className="" role="presentation"><button type="button" role="tab" id="slick-slide-control10" aria-controls="slick-slide10" aria-label="1 of 3" tabIndex="-1">1</button></li><li role="presentation" className=""><button type="button" role="tab" id="slick-slide-control11" aria-controls="slick-slide11" aria-label="2 of 3" tabIndex="-1">2</button></li><li role="presentation" className="slick-active"><button type="button" role="tab" id="slick-slide-control12" aria-controls="slick-slide12" aria-label="3 of 3" tabIndex="0" aria-selected="true">3</button></li></ul></div>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

class FooterMain extends React.Component {
  render(){
    return (
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
                          <h4 className="title logo-font text-default text-left">OM Health <span className="text-muted"> & </span>Child Care</h4>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus illo vel dolorum soluta consectetur doloribus sit. Delectus non tenetur odit dicta vitae debitis suscipit doloribus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dolore fugit vitae quia dicta inventore reiciendis. Ipsa, aut voluptas quaerat.</p>
                        <ul className="social-links circle animated-effect-1">
                          <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                          <li className="googleplus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                          <li className="youtube"><a href="#"><i className="fa fa-youtube"></i></a></li>
                          <li className="facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        </ul>
                        <ul className="list-icons">
                          <li><i className="fa fa-map-marker pr-10 text-default"></i>Old No-31, New No-13, Kamaraj Salai, Anagaputhur, Chennai - 600 070</li>
                          <li><i className="fa fa-phone pr-10 text-default"></i> +91 95516 25019, +91 94446 98388</li>
                          <li><a href="mailto:email@domain.com"><i className="fa fa-envelope-o pr-10"></i>email@domain.com</a></li>
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
                      <input type="submit" value="Send" className="margin-clear submit-button btn btn-default" />
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
      <section className="clearfix">
              <div className="container pv-20">
                <div className="row justify-content-lg-center">
                  <div className="col-lg-8">
                    <h3 className="mt-4 text-center">Meet Our <span className="text-default">Team</span></h3>
                    <div className="separator"></div>
                    <p className="lead text-center">Collaborative careCollaborative practiceModel of care Patient outcomes Provider outcomes Evaluation Evidence-based practice Patient-centred careFamily-centred care</p>
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
                          <h3>Dr.M.Sabarinath, <em className="small" style={teamStyle3}>MBBS,MD (PAED)</em></h3>
                          <div className="separator light"></div>
                          <p className="medium margin-clear"><em>MD in Paediatrics &lrm; <br /> Child Specialist</em></p>
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
                          <h3 className="title">Dr.C.Saranya, <em className="small" style={teamStyle3}>MBBS, MD (Gen Med)</em></h3>
                          <div className="separator light"></div>
                          <p className="medium margin-clear"><em>DM in Rheumatology<br /> Specialist in Cardiology, Muscle & Joint care</em></p>
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
