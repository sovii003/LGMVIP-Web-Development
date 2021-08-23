import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import FetchContent from "../body/FetchContent";
// import Loading from "../body/Loader";
import "./navbar.css";




class Nbar extends Component {
  constructor(props) {
    super(props);
    this.state =( { isClicked: null });
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ isClicked: true });
    console.log(this.state.isClicked);
  }
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <h1 className="Nav-head">Users-DB</h1>
            </Navbar.Brand>
            <button
              className="btn btn-primary"
              onClick={this.handleClick.bind()}
            >
              Get Users
            </button>
          </Container>
        </Navbar>
        {this.state.isClicked === true && <FetchContent/>}
      </div>
    );
  }
}

export default Nbar;
