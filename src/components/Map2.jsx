import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const Map2 = () => {
  return (
    <>
      <Map
        // google={props.google}
        style={{ width: "100%", height: "100vh" }}
        zoom={10}
        initialCenter={{ lat: 12, long: 12 }}
      />
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBRkez8rOCfQDL5K3dngyj2cNu2_bjM3WY",
})(Map2);
