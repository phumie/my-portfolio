import React, { Component } from "react";
import "../assets/styles/aboutme.css";
import { Grid, Cell } from "react-mdl";
import logo from "../assets/images/phumie-avatar.png";

class About extends Component {
  render() {
    return (
      <section class="about">
        <div className="about-content">
          <Grid className="demo-grid-2">
            <div className="about-info">
              <h4>LEARN A LITTLE ABOUT ME.</h4>
              <img src={logo} className="avatar-img" />
              <h5>Content will be here.</h5>
            </div>
          </Grid>
        </div>
      </section>
    );
  }
}

export default About;
