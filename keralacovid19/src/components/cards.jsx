import React, { Component } from "react";
import "./styles/cards.css";
class StateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentlyActive: "",
      totalActive: "",
      totalDeath: "",
      totalRecovered: "",
      updatedDate: "",
      todayActive: "",
      todayDeath: "",
      todayRecovered: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/status/")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          isLoading: false,
          currentlyActive: response.currentlyactive,
          totalActive: response.totalactive,
          totalDeath: response.totaldeath,
          totalRecovered: response.totalrecovered,
        });
        console.log(response);
      });
    fetch("http://localhost:8000/today/")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          updatedDate: response.date,
          todayActive: response.active,
          todayDeath: response.death,
          todayRecovered: response.recovered,
        });
      });
  }

  render() {
    return (
      <div className="stateCard">
        <div className="cardheader">
          <h1>Complete Report</h1>
        </div>
        <div className="updatedTime">
          <p>Last Updated: {this.state.updatedDate}</p>
        </div>
        <div className="cards">
          <div className="row">
            <div className="column ">
              <div className="card confirmed">
                <h3>
                  {this.state.isLoading ? "Loading" : this.state.totalActive}
                </h3>
                <p>Confirmed</p>
              </div>
            </div>

            <div className="column ">
              <div className="card recovered">
                <h3>
                  {this.state.isLoading ? "Loading" : this.state.totalRecovered}
                </h3>
                <p>Recovered</p>
              </div>
            </div>

            <div className="column">
              <div className="card active">
                <h3>
                  {this.state.isLoading
                    ? "Loading"
                    : this.state.currentlyActive}
                </h3>
                <p>Active</p>
              </div>
            </div>

            <div className="column ">
              <div className="card death">
                <h3>
                  {this.state.isLoading ? "Loading" : this.state.totalDeath}
                </h3>
                <p>Deaths</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StateCard;
