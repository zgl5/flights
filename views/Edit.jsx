const React = require('react');

class Edit extends React.Component {
  render() {
    const { flight } = this.props;
    const destination = this.props.destinations;

    return (
      <div>
        <h2>Edit Page</h2>

        <form action={`/flights/${flight.id}?_method=PUT`} method="POST">
          Airline:
          <select name="airline" defaultValue={flight.airline}>
            <option value="American">American</option>
            <option value="Southwest">Southwest</option>
            <option value="United">United</option>
          </select>
          <br /><br />
          Flight No.: <input type="number" name="flightNo" min="10" max="9999" defaultValue={flight.flightNo} /><br /><br />
          Departs: <input type="datetime-local" name="departs" defaultValue={flight.departs} /><br /><br />
          Departure Airport:
          <select name="departureAirport" defaultValue={flight.airport}>
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br /><br />
          Destination Airport:
          <select name="destinationAirport" defaultValue={flight.destination}>
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br /><br />
          <input type="submit" value="Submit Changes" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;
