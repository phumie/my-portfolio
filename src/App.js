import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import scrollToComponent from "react-scroll-to-component";
import HeaderLogo from "./assets/images/thechiqgeek_white.png";

const particleOpt = {
  particles: {
    number: {
      value: 50
    },
    size: {
      value: 3
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    }
  }
};

const customTitle = (
  <div className="custom-title">
    <img src={HeaderLogo} />
  </div>
);
class App extends Component {
  render() {
    return (
      <div>
        <div className="fullscreen">
          <header className="header-nav">
            <nav>
              <ul id="nav" className="nav">
                <li className="current">
                  <a className="smoothscroll" exact href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="/aboutme">
                    About
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="/resume">
                    Resume
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="/portfolio">
                    Porfolio
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <Main />
        </div>

        <Layout className="media">
          <Drawer title="Phumie Nevhutala" className="media">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
            <a href="#" class="scroll-down" address="true" />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
