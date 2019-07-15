import React from 'react';

class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      MOUNTAINS: [
        {name: 'Pico Blue', height: 2256, country: 'Jamaica' },
        {name: 'Monte Everest ', height: 8848, country: 'China' },
        {name: 'Nanga Parbat', height: 8125, country: 'Paquistão' },
        {name: 'Corcovado', height: 710, country: 'Rio de Janeiro' },
      ]
      
    }
  }

  renderTable = () => {
    const { mountains } = this.state;
    mountains.map((item) =>( 
    return (
      <p>item</p>
    );)
  }

  render() {
    return (
      <div className="App">
      {this.renderTable()}
        <table>
          <tr>
            <th>
              oiii
            </th>
          </tr>
          <tr>
            <td>
              oooo
            </td>
            <td>
              uuuu
            </td>
          </tr>
        </table>
      </div>
    );
   }
}

export default App;
