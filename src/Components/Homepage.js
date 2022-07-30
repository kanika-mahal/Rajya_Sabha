import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <div className="App">
        <div class="banner">
          <div class="row">
            <div class="col">
              <h1>Rajya Sabha</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo non autem earum itaque molestiae rem praesentium
                reprehenderit repudiandae. Harum, nam. Suscipit praesentium
                ratione obcaecati quidem itaque aliquid et minus atque.
              </p>
              <Link to="/secondpage" className="button"><button>
                Explore</button>
              </Link>
            </div>
            <div class="col">
              <div class="card"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
