import React, { Component, Fragment } from "react";
import "../body/FetchContent.css";
import Loader from "../body/Loader";


class FetchContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const json = await response.json();
      this.setState({ users: json.data, loading: false });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <Fragment>
        {this.state.loading ? <Loader /> : <div>
          <ul>
            <div className="col">
              {this.state.users.map((el) => (
                <li key={el.id}>
                  <br />
                  <div className="card text-white bg-dark mb-3">
                    <div className="card-header">
                      <img src={el.avatar} alt="" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">
                        {el.first_name} {el.last_name}
                      </h5>
                      <p className="card-text">{el.email}</p>
                    </div>
                  </div>
                </li>
              ))}
            </div>
          </ul>
        </div>}
      </Fragment>
    );
  }
}

export default FetchContent;

