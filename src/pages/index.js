import React from "react"
import LandingPageImage from "../images/undraw_Container_ship_ok.svg"

export default () => (
  <div>
    <header>
      <div className="header-bg">
        <div className="menu">
          <div className="site-logo">
            {/* <a href="/">
                <img src="/assets/images/airbnb-1.svg" alt="Airbnb logo image" />
              </a> */}
            Light Chandling Limited
          </div>
          <nav className="navigation">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-form--section">
          <section className="header-form--section-1">
            <h2 className="header-form__h2 seconday-font">
            Affordable quality products and services that saves you money
            </h2>
            <p className="header-form__p">
              At <span className="primay-color-text mh-bold">Light Chandling Limited</span>, we strive for quality, professionalism
              and compliance with local and international maritime standards that saves you money.
            </p>
          </section>
          <section className="header-form--section-1">
            <img
              src={LandingPageImage}
              alt="container image"
              className="landing-pic"
            />
          </section>
        </div>
      </div>
    </header>
    <main>
      <section className="about-section">
        <section className="mini-hero">
          <div className="hero-section-1">
            <h3>About Us</h3>
            <p>
              Light Chandling Limited (LCL) is a West African Company
              incorporated in Nigeria with the commission to champion
              international maritime standards and practices in Vessel Chandling
              Industry
            </p>
          </div>

          <div className="hero-section-1">
            <h4>Vision</h4>
            <p>
              To be the number one international vessel chandling and marine
              servicing company by consistently providing the highest quality
              product and services to our clients.
            </p>
          </div>
          <div className="hero-section-2">
            <h4>Mission</h4>
            <p>
              To provide the highest product quality as well as superior
              customer services while proffering solutions to our clients in oil
              and gas/ maritime industry while protecting the quality of the
              environment.
            </p>
          </div>
        </section>
      </section>
      <section className="services-section">
        <div className="services-heading">
          <h3>Our Services</h3>
        </div>
        <div className="services-list"></div>
      </section>
      <section className="places">
        <h2 className="section-title m-top-3">
          <a href="#">SERVICES</a>
        </h2>
        <div className="places-card">
          <div className="places-card--image">Icon Here</div>
          <div className="places-card--details">
            <h4 className="places-card--title">VESSEL CHANDLING</h4>
            <div>
              Our chandling service includes but not limited to the following:
              Food supplies and other food related services Vessel management
              and maintenance Cleaning arrangement as per clients’ request
              Stationeries Electronic gadgets Chains, pipes, anchors, shackles,
              flanges and other related accessories
            </div>
          </div>
        </div>
        <div className="places-card">
          <div className="places-card--image">Icon Here</div>
          <div className="places-card--details">
            <h4 className="places-card--title">WATER BUNKERING</h4>
            <div>
              Fresh water is always necessary for the daily needs of passengers
              and the crew on board as well as operation of the ship. LCL
              supplies fresh water for vessels and crew members taking in
              consideration quick time in delivery.
            </div>
          </div>
        </div>
        <div className="places-card">
          <div className="places-card--image">Icon Here</div>
          <div className="places-card--details">
            <h4 className="places-card--title">FUEL BUNKERING</h4>
            <div>
              We offer marine fueling and bunkering to various vessels –
              passenger vessels, ferry operators, tug and barge operators,
              marinas, shipyards within Nigeria and Africa. We maintain strict
              compliance with all state and federal laws relating to loading,
              transport and discharge of petroleum products.
            </div>
          </div>
        </div>
        <div className="places-card">
          <div className="places-card--image">Icon Here</div>
          <div className="places-card--details">
            <h4 className="places-card--title">VESSEL WASTE MANAGEMENT</h4>
            <div>
              LCL is committed to providing an integrated waste management
              service to vessel owners, assisting them in meeting the strict
              demands of the local / international regulatory bodies, as well as
              complying with the internal values and operating standards of
              their international parent organizations.
            </div>
          </div>
        </div>
        <div className="places-card">
          <div className="places-card--image">Icon Here</div>
          <div className="places-card--details">
            <h4 className="places-card--title">VESSEL CHARTERING</h4>
            <div>
              You don’t need to go through the whole stressful process of
              finding a vessel. We ensure quick and efficient solution by
              ensuring that all vessel requests of our clients are met and of
              good standard. We provide: Barges Tug boat Anchor Handling Tug
              Platform Supply Vessels Multi-Purpose Vessels Accommodation
              Vessels Crew boat
            </div>
          </div>
        </div>

        <div className="places-card">
          <div className="places-card--image">Icon Here</div>
          <div className="places-card--details">
            <h4 className="places-card--title">VESSEL CHARTERING</h4>
            <div>
              You don’t need to go through the whole stressful process of
              finding a vessel. We ensure quick and efficient solution by
              ensuring that all vessel requests of our clients are met and of
              good standard. We provide: Barges Tug boat Anchor Handling Tug
              Platform Supply Vessels Multi-Purpose Vessels Accommodation
              Vessels Crew boat
            </div>
          </div>
        </div>

        <div className="places-card">
          <div className="places-card--image">Icon Here</div>
          <div className="places-card--details">
            <h5 className="places-card--subtitle">Private Room · Marrakesh</h5>
            <h4 className="places-card--title">The Cozy Palace</h4>
            <div>$100/night</div>

            <div className="places-card--more">
              <span className="mh-bold">4.84 (564</span>)· Superhost
            </div>
          </div>
        </div>
      </section>
      <section className="careers-section"></section>
      <section className="team-section"></section>
      <section className="contact-section">
        <section className="contact-section__part-1">
          <h4 className="places-card--title">CONTACT</h4>
          <h3>Let's build an awesome brand your customers will go wild for!</h3>
          <p>Fill this out so we can learn more about you and your needs.</p>
        </section>
        <section className="contact-section__part-2">html here</section>
      </section>
    </main>
    <footer className="">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Light Chandling Limited</h3>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Policies</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Discover</h3>
          <ul>
            <li>
              <a href="#">Trust & Safety</a>
            </li>
            <li>
              <a href="#">Travel Credit</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Business Travel</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Why Host</h3>
          <ul>
            <li>
              <a href="#">Why Host</a>
            </li>
            <li>
              <a href="#">Hospitality</a>
            </li>
            <li>
              <a href="#">Responsible Hosting</a>
            </li>
            <li>
              <a href="#">Community Center</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <div className="social-icons">
            <span style={{ fontSize: "22px", color: "#484848" }}>
              <i className="fab fa-facebook-f"></i>
            </span>
            <span style={{ fontSize: "22px", color: "#484848" }}>
              <i className="fab fa-twitter"></i>
            </span>
            <span style={{ fontSize: "22px", color: "#484848" }}>
              <i className="fab fa-instagram"></i>
            </span>
          </div>
          <ul>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footy">
        <div className="footy-section-1">
          <span style={{ marginRight: "8px" }}>Logo</span>
        </div>
        <div className="footy-section-2">
          <span dir="ltr" className="footy-tagline">
            © 2019 , Inc. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  </div>
)
