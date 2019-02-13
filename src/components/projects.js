import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";
import { green, black } from "ansi-colors";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "150px",
              background:
                "url(https://cdn-images-1.medium.com/max/1200/1*DVkLFr953djSo0q6cA0-kg.png) center / cover"
            }}
          >
            React Project #1
          </CardTitle>
          <CardText>text will be here </CardText>
          <CardActions border>
            <Button colored>Github</Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "150px",
              background:
                "url(https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png) center / cover"
            }}
          >
            Angular Project #1
          </CardTitle>
          <CardText>text will be here </CardText>
          <CardActions border>
            <Button colored>Github</Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "150px",
              background:
                "url(http://www.bobbyberberyan.com/wp-content/uploads/2012/03/HTML5CSS3Logos.svg) center / cover"
            }}
          >
            HTML/CSS Project #1
          </CardTitle>
          <CardText>text will be here </CardText>
          <CardActions border>
            <Button colored>Github</Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "150px",
              background:
                "url(https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/9f78fc09-faec-4068-82bd-09e7cc8bbf34/File/e19ea0216ae8395bd4b3389970928be9/java_logo.png) center / cover"
            }}
          >
            JAva Project #1
          </CardTitle>
          <CardText>text will be here </CardText>
          <CardActions border>
            <Button colored>Github</Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "black",
              height: "150px",
              background:
                "url(https://www.android.com/static/2016/img/share/andy-lg.png) center / cover"
            }}
          >
            Android Project #1
          </CardTitle>
          <CardText>text will be here </CardText>
          <CardActions border>
            <Button colored>Github</Button>
          </CardActions>
        </Card>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>HTML/CSS</Tab>
          <Tab>Java</Tab>
          <Tab>Android</Tab>
        </Tabs>

        <Grid>
          <Cell col={12} className="project-grid">
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
