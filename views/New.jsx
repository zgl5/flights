const React = require('react');

class New extends React.Component {
  render() {
    return (
      <div>
        <nav style={{ fontFamily: 'Arial', fontSize: '30px', fontStyle: 'oblique', color: 'blue' }}>
          <a href="/flights">All Flights</a>
        </nav>
        <h1>New Flight page</h1>

        <form action="/flights" method="POST">
          Airline:
          <select name="airline">
            <option value="American">American</option>
            <option value="Southwest">Southwest</option>
            <option value="United">United</option>
          </select>
          <br /><br />
          Flight No.: <input type="number" name="flightNo" min="10" max="9999" /><br /><br />
          Departs: <input type="datetime-local" name="departs" /><br /><br />
          Departure Airport:
          <select name="departureAirport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br /><br />
          Destination Airport:
          <select name="destinationAirport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br /><br />
          <input type="submit" value="Create Flight" />
        </form>
      </div>
    );
  }
}

module.exports = New;
