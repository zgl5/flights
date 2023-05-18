const React = require('react');
const myStyle = {
  color: '#090A0A',
  backgroundColor: '#40E0D0',
};

class Show extends React.Component {
  render() {
    const { flight } = this.props;

    // Sort the destinations by arrival date/time in ascending order
    const sortedDestinations =
      flight.destination && Array.isArray(flight.destination)
        ? flight.destination.sort((a, b) => {
            const dateA = new Date(a.arrival);
            const dateB = new Date(b.arrival);
            if (dateA < dateB) return -1;
            if (dateA > dateB) return 1;
            return 0;
          })
        : [];

    return (
      <div style={myStyle}>
        <nav style={{ fontFamily: 'Arial', fontSize: '30px', fontStyle: 'oblique', color: 'blue' }}>
          <a href="/flights">All Flights</a>
        </nav>
        <h1 style={{ color: 'red', textAlign: 'center' }}> Flight Information</h1>
        <br />
        <h2 style={{ color: 'blue', fontSize: '30px', textAlign: 'center' }}> Airline: {flight.airline} </h2>
        <br />
        <h2 style={{ color: 'blue', fontSize: '30px', textAlign: 'center' }}>
          Departure Airport: {flight.departureAirport}
        </h2>
        <br />
        <h2 style={{ color: 'blue', fontSize: '30px', textAlign: 'center' }}> Flight No: {flight.flightNo} </h2>
        <br />
        <h2 style={{ color: 'blue', textAlign: 'center' }}>
          Depart: {new Date(flight.departs).toLocaleString()}
        </h2>
        <br />
        <h2 style={{ color: 'blue', textAlign: 'center' }}>Destination Airport: {flight.destinationAirport} </h2>
        <br />
        <br />
        <a style={{fontFamily: 'Arial', fontSize: '30px', fontStyle: 'oblique', color: 'green'}} href={`/flights/${flight.id}/edit`}>Edit</a>
        {''}
        <a style={{fontFamily: 'Arial', fontSize: '30px', fontStyle: 'oblique', color: 'brown'}}  href="/flights">  Back </a>
        
      </div>
    );
  }
}

module.exports = Show;

