const React = require('react');

const myStyle = {
    color: '#6495ED',
    backgroundColor: '#9FE2BF',
    fontSize: '25px',
    lineHeight: '1.6',
    textAlign: 'center'
    };

class Index extends React.Component {
  render() {
      const { flights } = this.props;
      
       // Sort the flights by departure date in ascending order
       const sortedFlights = flights.sort((a, b) => {
        const dateA = new Date(a.departs);
        const dateB = new Date(b.departs);
        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;
        return 0;
      });
      console.log('flight prop:', flights);
      console.log('sorted flights:', sortedFlights);
      return (
             <div style={myStyle}>
            <nav> <a href="/flights/new">Add Flight</a> </nav>
                  <h1> See All The Flights</h1>
        <table >
        <thead>
          <tr style ={{paddingTop:'12px',paddingBottom: '12px', textAlign:'center',
                                color: 'blue', border: '2px solid blue',padding: '10px', width: '700px'}}>
            <th>Airlane</th>
            <th>Depart</th>
            </tr>
        </thead>
        <tbody> 
               {sortedFlights.map((flight, i) => {
                          return (
                           
                            <tr key={flight.id} > 
                            
                          <td style ={{paddingTop:'12px',paddingBottom: '12px', textAlign:'left', color: 'red', border: '2px solid blue',padding: '10px', width: '355px'}}> {flight.airline} {'\u2708'} <a href={`/flights/${flight.id}`}> <br/><br/>
                         details </a>{' '}<form action={`/flights/${flight.id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/></form> <a href={`/flights/${flight.id}/edit`}>Edit</a> </td>
                           <td style ={{paddingTop:'12px',paddingBottom: '12px', textAlign:'left', color: 'black', border: '2px solid blue',padding: '10px', width: '355px'}}> Depart: {new Date(flight.departs).toLocaleString()} </td>
                          </tr>
                          );
                      })}
                
                  {/*Put a link in the index page going to the new page*/}
                  {/*<nav> <a href="/flights">All Flights</a> </nav>*/}
                  </tbody>
                  </table>
              </div>
      );
  }
}
module.exports = Index;