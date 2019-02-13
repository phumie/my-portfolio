import React, { Component } from "react";
import { Grid, Cell, Button } from "react-mdl";
import logo from "../assets/phumie-avatar.png";
import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      value: 80
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

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Particles
          params={particleOpt}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%"
          }}
        />
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={logo} className="avatar-img" />
            <div className="banner-text">
              <h1>Phumie Nevhutala</h1>
              <h4>DEVELOPER & UI/UX DESIGNER</h4>
              <p>HTML/CSS | BOOTSTRAP | REACT | ANGULAR | JAVA</p>
              <div className="social-links">
                {/* Linkedin */}
                <a
                  href="https://www.linkedin.com/in/phumudzo-nevhutala-152168b8/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/phumie"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github" />
                </a>

                {/* Twitter */}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-twitter" />
                </a>
              </div>
              {/* <Button raised colored>
                Click For More
              </Button> */}
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
