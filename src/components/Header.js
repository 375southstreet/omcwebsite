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
                  <button className="btn btn-sm hidden-xs btn-default btn-animated" data-toggle="modal" data-target="#appointmentModal">Appointment <i className="fa fa-hospital-o pl-1"></i></button>
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
                          <p>Please call us between 10:00 AM - 11:00 AM and 4:00 PM - 5:00 PM Monday to Saturday to book your appointment. Appointment will be given between 6:30 PM to 9:00 PM</p>
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
            <li className="facebook"><a href="https://www.facebook.com/Omhealthcareclinic"><i className="fa fa-facebook"></i></a></li>
          </ul>
          <div className="social-links hidden-md-up circle small pull-right">
            <div className="btn-group dropdown">
              <button id="header-top-drop-1" type="button" className="btn dropdown-toggle dropdown-toggle--no-caret" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-share-alt"></i></button>
              <ul className="dropdown-menu dropdown-animation" aria-labelledby="header-top-drop-1">
                <li className="twitter"><a href="https://twitter.com/omcarepammal"><i className="fa fa-twitter"></i></a></li>
                <li className="youtube"><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                <li className="facebook"><a href="https://www.facebook.com/Omhealthcareclinic"><i className="fa fa-facebook"></i></a></li>
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
              <li className="list-inline-item"><a className="link-light" href="#" data-toggle="modal" data-target="#informationModal"><i className="fa fa-info-circle pr-1"></i>Information</a></li>
              <li className="list-inline-item"><a className="link-light" href="tel:+919551625019"><i className="fa fa-phone pr-1"></i><strong>Call Us</strong></a></li>
            </ul>
          </div>
          <div className="modal fade" id="informationModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Information</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  <h4>Save yourself from Dengue.</h4>

                  <h5>Prevention </h5>
                  <p>Exclusion from childcare, preschool, school or work is usually not necessary but people experiencing fever from dengue infection should not be in an environment where they may be bitten by mosquitoes. If this is not possible they should stay at home until they have no fever and are therefore no longer infectious (usually 3 to 5 days). There is no vaccine to prevent human infection by this virus.
                  Personal protection and the environmental management of mosquitoes are important in preventing illness. Prevent access of mosquitoes to an infected person with a fever.
                  Protect yourself from mosquito bites at all times in dengue areas. Wear long sleeved protective clothing, long pants, socks and shoes when in mosquito infested areas
                  Use mosquito repellents, coils and chemicals Ensure you do not create mosquito breeding habitats such as old automobile tires, coconut shells,plastic bottles, open pots around your homes <br />
                  Consult your doctor if you have <br /></p>
                  <ul>
                    <li> High Fever (106F or 41C)</li>
                    <li> Pain behind the eyes</li>
                    <li> Headaches</li>
                    <li> Bone, Muscle, and joint pain</li>
                    <li> Rash all over the body</li>
                    <li> Minor bleeding from gums or nose</li>
                    <li> Vomiting and nausea</li>
                  </ul>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-sm hidden-xs btn-default btn-animated" data-dismiss="modal">Close <i className="pl-1 fa fa-close"></i></button>
                </div>
              </div>
            </div>
          </div>

        </div>
    )
  }
};

class SliderBox extends React.Component {

  render() {
    var degreeStyle = {
      fontSize: "50%"
    };
    return (
      <div className="bd-example">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="./images/banner-1.jpg" alt="Banner One" />
              <div className="carousel-caption">
                <h1 className="bannerHeading">O.M. Child Care</h1>
                <h3 className="bannerCaptionLevel1 animated fadeInUp">Dr. Sabarinath Mahadevan, <em className="bannerCaptionLevel2-1" style={degreeStyle}>M.B.B.S., M.D. in Paediatrics</em></h3>
                <h3 className="bannerCaptionLevel2 animated fadeInUp">Child Specialist</h3>
                <h3 className="bannerCaptionLevel3 animated fadeInUp">குழந்தை நல சிறப்பு மருத்துவர்</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-75" src="./images/banner-2.jpg" alt="Banner Two" />
              <div className="carousel-caption">
                <h1 className="bannerHeading">O.M Health Care</h1>
                <h3 className="bannerCaptionLevel1 animated fadeInUp">Dr. Saranya Chinnadurai, <em className="bannerCaptionLevel2-1" style={degreeStyle}>M.B.B.S., M.D. in General Medicine, DM in Rheumatology</em></h3>
                <h3 className="bannerCaptionLevel2 animated fadeInUp">Rheumatology and Muscle, Joint care Specialist</h3>
                <h3 className="bannerCaptionLevel3 animated fadeInUp">மூட்டு தசை இணைப்புத்திசு நோயிகளியல் துறை நிபுணர்</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-75" src="./images/banner-3.jpg" alt="Banner Three" />
              <div className="carousel-caption">
                <h1 className="bannerHeading">O.M. Child Care</h1>
                <h3 className="bannerCaptionLevel1 animated fadeInUp">Dr. Sabarinath Mahadevan, <em className="bannerCaptionLevel2-1" style={degreeStyle}>M.B.B.S., M.D. in Paediatrics</em></h3>
                <h3 className="bannerCaptionLevel2 animated fadeInUp">Child Specialist</h3>
                <h3 className="bannerCaptionLevel3 animated fadeInUp">குழந்தை நல சிறப்பு மருத்துவர்</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./images/banner-4.jpg" alt="Banner Four" />
              <div className="carousel-caption">
                <h1 className="bannerHeading">O.M Health Care</h1>
                <h3 className="bannerCaptionLevel1 animated fadeInUp">Dr. Saranya Chinnadurai, <em className="bannerCaptionLevel2-1" style={degreeStyle}>M.B.B.S., M.D. in General Medicine, DM in Rheumatology</em></h3>
                <h3 className="bannerCaptionLevel2 animated fadeInUp">Rheumatology and Muscle, Joint care Specialist</h3>
                <h3 className="bannerCaptionLevel3 animated fadeInUp">மூட்டு தசை இணைப்புத்திசு நோயிகளியல் துறை நிபுணர்</h3>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
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
            <button className="btn btn-sm hidden-xs btn-default btn-animated" data-toggle="modal" data-target="#appointmentModal">Make An Apointment <i className="pl-1 fa fa-stethoscope"></i></button>
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
            <a href="tel:+919551625019" className="btn btn-default btn-sm hidden-xs btn-animated">Call Us <i className="pl-1 fa fa-phone"></i></a>
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
          <p className="text-center"><span className="text-default">O.M Child</span> & <span className="text-default">Health Care</span> clinic was opened in 2014, since then we are providing holistic care in the field of child health, vaccination, joint pain, back pain, muskuloskeletal problems, Rheumatological problems, diabetes, hypertension, cardio respiratory problems <br /> We have successfully managed over 10000 patients in the past 3 years.</p>
          <br />
          <AboutSection3 />
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
      backgroundImage: 'url(./images/banner-20.jpg)'
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
                  <p> <br /> </p>
                  <div className="separator-3"></div>
                  <ul className="list-icons animate flipInX">
                    <li>Child specialist<i className="fa fa-check-square-o"></i></li>
                    <li>Vaccination<i className="fa fa-check-square-o"></i></li>
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
                  <p> <br /> </p>
                  <div className="separator-2"></div>
                  <ul className="list-icons">
                    <li><i className="fa fa-check-square-o"></i>Rheumatology - Arthritis (Rheumatoid arthritis, Osteoarthritis)</li>
                    <li><i className="fa fa-check-square-o"></i>SLE</li>
                    <li><i className="fa fa-check-square-o"></i>Diabetes</li>
                    <li><i className="fa fa-check-square-o"></i>Hypertension</li>
                    <li><i className="fa fa-check-square-o"></i>Back & Joint pain</li>
                    <li><i className="fa fa-check-square-o"></i>Muskuloskeletal problems</li>
                    <li><i className="fa fa-check-square-o"></i>Respiratory problems</li>
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
              <a href="images/portfolio-1.png" className="overlay-link small popup-img" title="Dengue Introduction">
                <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="overlay-container">
              <img src="images/portfolio-2.png" alt=""/>
              <a href="images/portfolio-2.png" className="overlay-link small popup-img" title="Econiomic Impact of Dengue">
                <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="overlay-container">
              <img src="images/portfolio-3.png" alt=""/>
              <a href="images/portfolio-3.png" className="overlay-link small popup-img" title="Why Dengue is Spreading">
                <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>

        </div>
        <br />
        <div className="row grid-space-20">

          <div className="col-4">
            <div className="overlay-container">
              <img src="images/portfolio-4.png" alt=""/ >
              <a href="images/portfolio-4.png" className="overlay-link small popup-img" title="Importance of Breastfeeding">
                <i className="fa fa-plus"></i>
              </a>
            </div>
          </div>
          <div className="col-4">
            <div className="overlay-container">
              <img src="images/portfolio-5.jpg" alt=""/>
              <a href="images/portfolio-5.jpg" className="overlay-link small popup-img" title="Body Safety for Kids">
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
                      <img className="media-object" src="images/medical-blog-thumb-4.jpg" alt="blog-thumb" />
                      <a href="http://www.immunizeindia.org/home" target="_blank" className="overlay-link small"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="media-heading mb-2"><a href="blog-post.html">Immunize India</a></h5>
                    <div className="row">
                      <div className="col-lg-8">Ensure your child never misses a vaccination. Send a message to 566778 and Receive reminders now!</div>
                      <div className="col-lg-4 pull-right">
                        <a href="http://www.immunizeindia.org/home" target="_blank" className="btn btn-default btn-sm hidden-xs btn-animated">Click Here<i className="fa fa-long-arrow-right pl-1"></i></a>
                      </div>
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
                    <h5 className="media-heading mb-2"><a href="http://www.tnhealth.org/dphfacts/dengue.htm">Frequently Asked Questions on Dengue</a></h5>
                    <div className="row">
                      <div className="col-lg-8">Take a moment and read what our TamilNadu Govt says about Dengue</div>
                      <div className="col-lg-4 pull-right"><a href="http://www.tnhealth.org/dphfacts/dengue.htm" target="_blank" className="btn btn-default btn-sm hidden-xs btn-animated">Read More<i className="fa fa-long-arrow-right pl-1"></i></a></div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="media margin-clear">
                  <div className="d-flex pr-2">
                    <div className="overlay-container">
                      <img className="media-object" src="images/medical-blog-thumb-5.jpg" alt="blog-thumb" />
                      <a href="https://twitter.com/omcarepammal" className="overlay-link small"><i className="fa fa-link"></i></a>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="media-heading mb-2"><a href="blog-post.html">Follow us on Twitter</a></h5>
                    <div className="row">
                      <div className="col-lg-8">Yes, we are in Twitter now. Follow us in twitter for more health tips!</div>
                      <div className="col-lg-4 pull-right"><a href="https://twitter.com/omcarepammal"  className="btn btn-default btn-sm hidden-xs btn-animated">Read More<i className="fa fa-long-arrow-right pl-1"></i></a></div>
                    </div>
                  </div>
                </div>
                <hr />
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
                      We provide outpatient services in clinic from Monday to Saturday at evenings 6:30 PM - 9:00 PM. You may confirm your appointment by calling number +91 9551625019 between 10:00 AM - 11:00 AM and 5:00 PM - 6:00 PM. You will be guided further regarding the exact time by our clinic manager. If you require vaccination, the same need to be informed through phone. It would be more useful and informative, if you could bring the old consultation records or other medical records from any other Centre. In case you have any specific requirements like counseling or special testing, the same need to be informed over phone.
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
                      We also provide inpatient services in the hospitals nearby, depending upon your health condition and needs. We also encourage opinions from consultants of other specialty, if required. Blood investigations and imaging shall be done, wherever essential.  Inpatient services shall be covered under insurance, if required.
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
                      We provide vaccination across all age groups. We follow guidelines from Indian academy of pediatrics and national government guidelines for Immunisation.<a href="http://www.acvip.org/parents/">Visit ACVIP for more details<i className="fa fa-long-arrow-right pl-1"></i></a>
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
                      We provide master health checkup for adults, routine health check up for children, preterm baby follow up care, fitness certificate for occupation purposes, health checkup for overseas and airtravel, vaccination for international travel and physical fitness for school going children.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" role="tab" id="headingFive">
                    <h4 className="mb-0">
                      <a data-toggle="collapse" data-parent="#accordion-1" href="#collapseFive-2" className="collapsed" aria-expanded="false" aria-controls="collapseFive-2">
                        <i className="fa-flask fa pr-10"></i>Lab Services
                      </a>
                    </h4>
                  </div>
                  <div id="collapseFive-2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                    <div className="card-block bordered p-15">
                      Facilities available,
                      <ul>
                        <li>Bood Sugar Testing</li>
                        <li>Lipid Profile (Cholesterol)</li>
                        <li>Complete Blood Count</li>
                        <li>Urine Routine </li>
                        <li>Blood Culture </li>
                        <li>Urine Culture </li>
                        <li>CRP</li>
                        <li>Thyroid Function Test</li>
                        <li>Liver Function Test</li>
                        <li>Renal Function Test </li>
                        <li>PEFR Testing (Asthma) </li>
                      </ul>

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
                      Health education is any combination of learning experiences designed to help individuals and communities improve their health, by increasing their knowledge or influencing their attitudes. We provide health education at individual level, community level as in schools and work places.
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
                      We provide professional assistance and guidance to patients and their families regarding health problems. We try to assist you in managing your health problems with clarified vision and finding alternative solutions.
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
  handleSubmit(event) {
    var contactName = event.target.contactName.value;
    var contactEmail = event.target.contactEmail.value;
    var contactMessage = event.target.contactMessage.value;
    const formAction="https://a8bab4c9b0.execute-api.us-east-1.amazonaws.com/final";
    fetch(formAction, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        Name: contactName,
        Email: contactEmail,
        Message: contactMessage
      })
    });
    event.preventDefault();
  }

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
                          <p>We have successfully managed over 10,000 patients in the past 3 years. We develop strong bonds with many of our patients and gain great satisfaction from seeing their happiness. Reach us at., </p>
                          <ul className="list-icons">
                            <li><i className="fa fa-map-marker pr-10 text-default"></i>Old No-31, New No-13, Kamaraj Salai, Anagaputhur, Chennai - 600 070</li>
                            <li><i className="fa fa-phone pr-10 text-default"></i> +91 95516 25019, +91 94446 98388</li>
                            <li><a href="mailto:omcarepammal@gmail.com"><i className="fa fa-envelope-o pr-10"></i>omcarepammal@gmail.com</a></li>
                          </ul>
                          <ul className="social-links circle animated-effect-1">
                            <li className="twitter"><a href="https://twitter.com/omcarepammal"><i className="fa fa-twitter"></i></a></li>
                            <li className="youtube"><a href="#"><i className="fa fa-youtube"></i></a></li>
                            <li className="facebook"><a href="https://www.facebook.com/Omhealthcareclinic"><i className="fa fa-facebook"></i></a></li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <div id="map-canvas">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1502.6970323256414!2d80.12933696646816!3d12.97760892235142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0d0736998d%3A0xf45c57155d260f67!2sO.M+Child+%26+Health+Care+Clinic!5e0!3m2!1sen!2sau!4v1533733263509" height="300" frameBorder="0" allowFullScreen></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="footer-content">
                      <h2 className="title">Contact Us</h2>
                      <br />
                      <form className="margin-clear" onSubmit={this.handleSubmit} action="post" formAction="post">
                        <div className="form-group has-feedback">
                          <label className="sr-only" htmlFor="contactName">Name</label>
                          <input type="text" className="form-control" id="contactName" name="contactName" placeholder="Name" required="" />
                          <i className="fa fa-user form-control-feedback"></i>
                        </div>
                        <div className="form-group has-feedback">
                          <label className="sr-only" htmlFor="contactEmail">Email address</label>
                          <input type="email" className="form-control" id="contactEmail" name="contactEmail" placeholder="Enter email" required="" />
                          <i className="fa fa-envelope form-control-feedback"></i>
                        </div>
                        <div className="form-group has-feedback">
                          <label className="sr-only" htmlFor="contactMessage">Message</label>
                          <textarea className="form-control" rows="6" id="contactMessage" name="contactMessage" placeholder="Message" required=""></textarea>
                          <i className="fa fa-pencil form-control-feedback"></i>
                        </div>
                        <input type="submit" value="Send" name="sendMail" id="sendMail" className="margin-clear submit-button btn btn-default btn-sm hidden-xs btn-animated">

                        </input>
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
              <p className="lead text-center">O.M Clinic is led by couple of Young Experienced Doctors. <br />Our Team is responsible for Family centred care, Great bond and Satisfaction. Our business and reputation rests on the happiness of every individual patient we see and your privacy is absolutely paramount. You will feel our warmth and support from the moment you walk through our door. </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div className="image-box team-member shadow mb-20">
              <div className="overlay-container overlay-visible">
                <img src="images/doctor-2.svg" alt="" />
                <a href="#" className="overlay-link" title="Dr.M.Sabarinath, MBBS, MD (Paediatrics)"  data-toggle="modal" data-target="#teamMemberOneModal"><i className="fa fa-link"></i></a>
                <div className="overlay-bottom">
                  <div className="text">
                    <h3>Dr.M.Sabarinath, <br /><em className="small" style={teamStyle3}>MBBS,MD (PAED)</em></h3>
                    <div className="separator light"></div>
                    <p className="medium margin-clear"><em>Child Specialist</em></p>
                  </div>
                </div>
                <div className="modal fade" id="teamMemberOneModal" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Sabarinath Mahadevan</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-lg-3 col-md-3">
                            <img src="images/doctor-2.svg" alt="" />
                          </div>
                          <div className="col-lg-9 col-md-9">
                              <h3>Dr. Sabarinath Mahadevan</h3>
                              <em>MBBS., MD (Paed)</em><br/>
                              <span>Reg.No. 89974</span><br/>
                              <span>Child Specialist, குழந்தை நல சிறப்பு மருத்துவர்</span>
                          </div>
                        </div>
                        <br />
                        <p><b>Sabarinath Mahadevan</b>, in practice for around 10 years with particular interests in Management of Childhood Infections, Allergy and Immunological problems. He also manages children with Respiratory Illness, Asthma, Adolescent Health problems, Newborn Care (upto 1 month of life), Routine Vaccination and Vaccination in special circumstances.</p>
                        <p>Sabarinath is a enthusiastic paediatrician, who did his undergraduation in Chengalpattu Government Medical College and Postgraduation from Madurai Medical College. He has experience of working in Kanchipuram district headquarters hospital Pediatric Department for a period of 3 years. He has also served as Assistant Professor in Department of pediatrics in Chengalpattu Government Medical College for a period of around 2 years. He is also qualified for part 1 and part 2 of MRCPCH (UK). Currently he is working in Department of Immunology, Madras Medical College.</p>
                        <h4>Languages Spoken</h4>
                        <p>Tamil, English, Hindi</p>
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
          <div className="col-lg-3 col-md-6">
            <div className="image-box team-member shadow mb-20">
              <div className="overlay-container overlay-visible">
                <img src="images/doctor-1.svg" alt="" />
                <a href="#" className="overlay-link" title="Dr.C.Saranya, MBBS, MD (General Medicine), DM (Rheumatology)" data-toggle="modal" data-target="#teamMemberTwoModal"><i className="fa fa-link"></i></a>
                <div className="overlay-bottom">
                  <div className="text">
                    <h3 className="title">Dr.C.Saranya, <br/><em className="small" style={teamStyle3}>MBBS, MD (Gen Med), DM (Rheumatology) </em></h3>
                    <div className="separator light"></div>
                    <p className="medium margin-clear">
                      <em>Internal Medicine & Rheumatology</em>
                    </p>
                  </div>
                </div>
                <div className="modal fade" id="teamMemberTwoModal" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Saranya Chinnadurai</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-lg-3 col-md-3">
                            <img src="images/doctor-1.svg" alt="" />
                          </div>
                          <div className="col-lg-9 col-md-9">
                            <h3>Dr. Saranya Chinnadurai</h3>
                            <em>MBBS., MD (Internal Medicine), DM (Rheumatology)</em> <br/>
                            <span>Reg.No. 89970</span> <br/>
                            <span>இரத்த அழுத்தம், சர்க்கரை நோய் சிறப்பு மருத்துவர், மூட்டு தசை இணைப்புத்திசு நோயிகளியல் துறை நிபுணர்</span>
                          </div>
                        </div>
                        <br />
                        <p><b>Dr Saranya Chinnadurai</b> is a physician, actively involved in Management of Adult and Gediatric Health problems for past 10 years. She completed her MBBS from Chengalpattu Government Medical College and MD in Internal Medicine from Tanjore Medical College. She has competed her superspeciality in DM Clinical Immunology and Rheumatology from Madras Medical College. She has various publications under her name in esteemed journals and she has vast experience in management of joint pain, back pain, muscle pain, arthritis (rheumatoid arthritis, osteoarthritis), SLE, diabetes, hypertension and other rheumatological problems. She is currently working as an Assistant Professor in Department of Rheumatology, Sri Ramachandra Medical College, Porur.</p>
                        <h4>Languages Spoken</h4>
                        <p>Tamil, English, Hindi</p>
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
          <div className="col-lg-3 col-md-6">
            <div className="image-box team-member shadow mb-20">
              <div className="overlay-container overlay-visible">
                <img src="images/manager.svg" alt="" />
                <a href="#" className="overlay-link" title="Clinic Manager"  data-toggle="modal" data-target="#teamMemberThreeModal"><i className="fa fa-link"></i></a>
                <div className="overlay-bottom">
                  <div className="text">
                    <h3 className="title">V.Mahadevan, <br/><em className="small" style={teamStyle3}>Clinic Manager</em></h3>
                    <div className="separator light"></div>
                    <p className="medium margin-clear"><em> Clinic Manager</em></p>
                  </div>
                </div>

                <div className="modal fade" id="teamMemberThreeModal" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Mahadevan Velappan</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>

                      <div className="modal-body">
                        <div className="row">
                          <div className="col-lg-3 col-md-3">
                            <img src="images/manager.svg" alt="" />
                          </div>
                          <div className="col-lg-9 col-md-9">
                            <h3>Mr. Mahadevan Velappan</h3>
                            <em>Retd <span className="text-default">Role officer from Hospital/College Name</span></em> <br/>
                          </div>
                        </div>
                        <br />
                        <p><b>Mahadevan Velappan</b> has vast experience in medical related fields. He has served as role in various medical colleges</p>
                        <p>He solely manages OMCare Clinic and support our doctors with all facilities. He is an easily approachable person, who welcomes you with a smiling face and he is also the same person who picks your appointment calls. With his great experience, his hospitality service is a great asset to OMCare.</p>
                        <h4>Languages Spoken</h4>
                        <p>Tamil, English</p>
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
      </section>
    )
  }
}
