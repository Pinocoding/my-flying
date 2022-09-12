import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./List.css";
import FlightInfor from "../FlightsInfor/FlightInfor";
function List() {
  return (
    <div>
      <Header />

      <div className="list-container">
        <div className="list-filter">filter here</div>
        <div className="list-row">
          <FlightInfor />
        </div>
        <div className="list-userFlight"></div>
       
      </div>
     
    </div>
  );
}

export default List;