import React from "react"
import LandingPageImage from "../images/undraw_Container_ship_ok.svg"
import VesselImage from "../images/icons8-oil-industry-50.png"
import WaterImage from "../images/icons8-water-tower-50.png"
import FuelImage from "../images/icons8-oil-tanker-50.png"
import WasteImage from "../images/icons8-nuclear-power-plant-50.png"
import VesselCharterImage from "../images/icons8-oil-storage-tank-50.png"

export default () => (
  <div>
    <header>
      <div className="header-bg">
        <div className="menu">
          <div className="site-logo primay-color-text mh-bold">
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
              At{" "}
              <span className="primay-color-text mh-bold">
                Light Chandling Limited
              </span>
              , we strive for quality, professionalism and compliance with local
              and international maritime standards that saves you money.
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

    <section className="about-section">
      <div className="hero-section-1">
        <h3 className="caps hero-section-h3 white-color-text">About Us</h3>
        <p>
          Light Chandling Limited (LCL) is a West African Company incorporated
          in Nigeria with the commission to champion international maritime
          standards and practices in Vessel Chandling Industry
        </p>
      </div>
      <section className="hero-section-2">
        <div>
          <h4 className="hero-section__mini-h4 caps">Vision</h4>
          <p>
            To be the number one international vessel chandling and marine
            servicing company by consistently providing the highest quality
            product and services to our clients.
          </p>
        </div>
        <div className="hero-section__mini">
          <h4 className="hero-section__mini-h4 caps">Mission</h4>
          <p>
            To provide the highest product quality as well as superior customer
            services while proffering solutions to our clients in oil and gas/
            maritime industry while protecting the quality of the environment.
          </p>
        </div>
      </section>
    </section>

    <main>
      <section className="places">
        <div className="hero-section-1">
          <h3 className="caps hero-section-h3 primay-color-text">Services</h3>
        </div>
        <section className="places-list">
          <div className="places-card">
            <div className="places-card--image">
              <img
                src={VesselImage}
                alt="container image"
                className="landing-pic"
              />
            </div>
            <div className="places-card--details">
              <h4 className="places-card--title">Vessel Chandling</h4>
              <p>
                We offer Food supplies and other food related services Vessel
                management and maintenance Cleaning arrangement as per clients’
                request.
              </p>
            </div>
          </div>
          <div className="places-card">
            <div className="places-card--image">
              <img
                src={WaterImage}
                alt="container image"
                className="landing-pic"
              />
            </div>
            <div className="places-card--details">
              <h4 className="places-card--title">Water Bunkering</h4>
              <p>
                LCL supplies fresh water for vessels and crew members taking in
                consideration quick time in delivery.
              </p>
            </div>
          </div>
          <div className="places-card">
            <div className="places-card--image">
              <img
                src={FuelImage}
                alt="container image"
                className="landing-pic"
              />
            </div>
            <div className="places-card--details">
              <h4 className="places-card--title">Fuel Bunkering</h4>
              <p>
                We offer marine fueling and bunkering to various vessels –
                passenger vessels, ferry operators, tug and barge operators,
                marinas, shipyards within Nigeria and Africa.
              </p>
            </div>
          </div>
          <div className="places-card">
            <div className="places-card--image">
              <img
                src={WasteImage}
                alt="container image"
                className="landing-pic"
              />
            </div>
            <div className="places-card--details">
              <h4 className="places-card--title">Vessel Waste Management</h4>
              <p>
                LCL provide an integrated waste management service to vessel
                owners, assisting them in meeting the strict demands of the
                local / international regulatory bodies
              </p>
            </div>
          </div>
          <div className="places-card">
            <div className="places-card--image">
              <img
                src={VesselCharterImage}
                alt="container image"
                className="landing-pic"
              />
            </div>
            <div className="places-card--details">
              <h4 className="places-card--title">Vessel Chartering</h4>
              <p>
                We provide: Barges Tug boat Anchor Handling Tug Platform Supply
                Vessels Multi-Purpose Vessels Accommodation Vessels Crew boat
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="careers-section"></section>
      <section className="team-section"></section>
      <section className="contact-section ">
        <div className="hero-section-1">
          <h3 className="caps hero-section-h3 primay-color-text">Contacts</h3>
        </div>
        <section className="hero-section-2">
          <section className="contact-section__part-1">
            <h3>
              Let's build an awesome brand your customers will go wild for!
            </h3>
            <p>Fill this out so we can learn more about you and your needs.</p>
          </section>
          <section className="contact-section__part-2">html here</section>
        </section>
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
          <span style={{ marginRight: "8px" }}>
            Light Chandling Limited (LCL)
          </span>
        </div>
        <div className="footy-section-2">
          <span dir="ltr" className="footy-tagline">
            © 2019 Light Chandling Limited (LCL). All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  </div>
)
