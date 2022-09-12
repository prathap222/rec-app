import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
require("dotenv").config();

const Map = props => {
  let activityData = props.activities;
  let initialCenter = props.initialCenter;

  const [selectedActivity, setSelectedActivity] = useState(null);
  if (initialCenter.length === 0) {
    return "NO MAP FOUND";
  } else {
    return (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{
          lat: Number(initialCenter[0].latitude),
          lng: Number(initialCenter[0].longitude)
        }}
      >
        {activityData.map(activity => {
          let animation = null;
          if (props.hoverActivity === activity.id) {
            animation = window.google.maps.Animation.BOUNCE;
          } else if (props.latestActivity === activity.id) {
            animation = window.google.maps.Animation.DROP;
          }
          return (
            <Marker
              key={activity.id}
              animation={animation}
              position={{
                lat: Number(activity.latitude),
                lng: Number(activity.longitude)
              }}
              onClick={() => {
                setSelectedActivity(activity);
              }}
            />
          );
        })}
        {selectedActivity && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedActivity(null);
            }}
            position={{
              lat: Number(selectedActivity.latitude),
              lng: Number(selectedActivity.longitude)
            }}
          >
            <div>
              <h5>{selectedActivity.name}</h5>
              <img
                height="80px"
                width="100px"
                src={selectedActivity.image_url}
              />
              <p>🌟🌟🌟🌟🌟</p>
              <p style={{ wordWrap: "break-word", maxWidth: "100px" }}>
                Hello. This is a wonderful place to visit! .
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }
};
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function GMap(props) {
  const mapUrl = process.env.REACT_APP_GMAPURL;
  const mapApiKey = process.env.REACT_APP_GMAPKey;
  return (
    <div className="g-map">
      <MapWrapped
        googleMapURL={`${mapUrl}=${mapApiKey}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={
          <div
            style={{
              height: `100%`,
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px"
            }}
          />
        }
        activities={props.activities}
        activityItem={props.columns}
        initialCenter={props.initialCenter}
        hoverActivity={props.hoverActivity}
        latestActivity={props.latestActivity}
      />
    </div>
  );
}
