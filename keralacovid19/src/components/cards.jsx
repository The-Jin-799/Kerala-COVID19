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
        <div class="row">
          <div class="column ">
            <div class="card confirmed">
              <h3>Card 1</h3>
              <p>Some text</p>
              <p>Some text</p>
            </div>
          </div>

          <div class="column ">
            <div class="card recovered">
              <h3>Card 2</h3>
              <p>Some text</p>
              <p>Some text</p>
            </div>
          </div>

          <div class="column">
            <div class="card active">
              <h3>Card 3</h3>
              <p>Some text</p>
              <p>Some text</p>
            </div>
          </div>

          <div class="column ">
            <div class="card death">
              <h3>Card 4</h3>
              <p>Some text</p>
              <p>Some text</p>
            </div>
          </div>
        </div>
      </cards>
    </statecard>
  );
};

export default StateCard;
