import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const API_KEY = process.env.REACT_APP_API_KEY

export class MapContainer extends React.Component {

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={{ height: '200px', width: '200px' }}
        initialCenter={{ lat: 40.537550, lng: -111.892280 }}
      >
        <Marker position={{ lat: 40.537550, lng: -111.892280 }} />
      </Map>

    )
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer)