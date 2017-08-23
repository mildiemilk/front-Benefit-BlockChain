import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import PropTypes from 'prop-types';

/* eslint react/prop-types : [0, { ignore: 0, customValidators: 0 }] */
/* eslint react/prefer-stateless-function: [0, { "ignorePureComponents": 0 }] */
const style = {
  width: '100%',
  height: '300px',
  position: 'relative',
};
export class HospitalMap extends React.Component {
  static propTypes = {
    // name: PropTypes.number.isRequired,
    latlong: PropTypes.number.isRequired,
  }
  render() {
    return (
      <div style={style}>
        <Map
          style={style}
          google={this.props.google}
          zoom={15}
          initialCenter={{
            lat: this.props.latlong[0],
            lng: this.props.latlong[1],
          }}
        >
          <Marker
            name={'SOMA'}
            title={'The marker`s title will appear as a tooltip.'}
            position={{ lat: this.props.latlong[0], lng: this.props.latlong[1] }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA0yLgH7kYeveHcJxtQtvPDGRwBc80bo6M',
})(HospitalMap);
