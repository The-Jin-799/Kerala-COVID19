import React from "react";
import "./styles/cards.css";
const StateCard = () => {
  return (
    <statecard>
      <div>
        <cardheader>
          <h1>Complete Report</h1>
        </cardheader>
      </div>
      <cards>
        <div className="row">
          <div className="column ">
            <div className="card confirmed">
              <h3>300</h3>
              <p>Confirmed</p>
            </div>
          </div>

          <div className="column ">
            <div className="card recovered">
              <h3>200</h3>
              <p>Recovered</p>
            </div>
          </div>

          <div className="column">
            <div className="card active">
              <h3>96</h3>
              <p>Active</p>
            </div>
          </div>

          <div className="column ">
            <div className="card death">
              <h3>4</h3>
              <p>Deaths</p>
            </div>
          </div>
        </div>
      </cards>
    </statecard>
  );
};

export default StateCard;