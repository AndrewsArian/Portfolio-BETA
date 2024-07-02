import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const map = () => {
  const defaultProps = {
    center: {
      lat: -34.62, 
      lng: -58.69,
    },
    zoom: 11,
  };
  return (
    <>
      {/* // Important! Always set the container height explicitly */}
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAnNlz2lKS-nyVBKO3ymcQFFQzF6pGQnOA" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={-34.62} lng={-58.69} text="" />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default map;
