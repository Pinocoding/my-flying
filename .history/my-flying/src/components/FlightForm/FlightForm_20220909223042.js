import React from "react";
import FlightInforForm from "../FlightsInfor/FlightInforForm";
import "./FlightForm.css";
function FlightForm({ img, name }) {
  return (
    <div className="flightForm">
      <div>
        <FlightInforForm img={img} name={name} />
        
        
        <FlightInforFormB
      </div>
    </div>
  );
}

export default FlightForm;