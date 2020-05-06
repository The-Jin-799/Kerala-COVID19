import React, { Component } from "react";
import "./styles/cards.css";
import Footer from "./Footer";

class StateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchTotal: true,
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

  handleTodayClick = () => {
    this.setState((prevState) => ({
      switchTotal: !prevState.switchTotal,
    }));
  };

  componentDidMount() {
    fetch("https://antony0101.pythonanywhere.com/status/")
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
    fetch("https://antony0101.pythonanywhere.com/today/")
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
        <div id="container">
          <div id="main" onClick={this.handleTodayClick}>
            <div
              className={
                this.state.switchTotal ? "total coloron" : "total coloroff"
              }
            >
              Total
            </div>
            <div
              className={
                this.state.switchTotal ? "today coloroff" : "today coloron"
              }
            >
              Today
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="updatedTime">
            <p>Last Updated: {this.state.updatedDate}</p>
          </div>
          <div className="row">
            <div className="column ">
              <div className="card confirmed">
                <h3>
                  {this.state.isLoading
                    ? "Loading"
                    : this.state.switchTotal
                    ? this.state.totalActive
                    : this.state.todayActive}
                </h3>
                <p>Confirmed</p>
              </div>
            </div>

            <div className="column ">
              <div className="card recovered">
                <h3>
                  {this.state.isLoading
                    ? "Loading"
                    : this.state.switchTotal
                    ? this.state.totalRecovered
                    : this.state.todayRecovered}
                </h3>
                <p>Recovered</p>
              </div>
            </div>

            <div className="column">
              <div className="card active">
                <h3>
                  {this.state.isLoading
                    ? "Loading"
                    : this.state.switchTotal
                    ? this.state.currentlyActive
                    : this.state.currentlyActive}
                </h3>
                <p>Active</p>
              </div>
            </div>

            <div className="column ">
              <div className="card death">
                <h3>
                  {this.state.isLoading
                    ? "Loading"
                    : this.state.switchTotal
                    ? this.state.totalDeath
                    : this.state.todayDeath}
                </h3>
                <p>Deaths</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default StateCard;
