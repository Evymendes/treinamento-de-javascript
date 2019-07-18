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
  
  renderTitle = () => {
    let mountainsKey = Object.keys(this.state.MOUNTAINS[0]);
    
    return (
      mountainsKey.map((item) => {
        return (
          <th className="th"> 
            {item}
          </th>
        )
      })
    )
  }

  renderTable = () => {
    const { MOUNTAINS } = this.state;
    return (
      MOUNTAINS.map((item) => {
        return (
         <tr>
            <td>
              {item.name}
            </td>
            <td>
              {item.height}
            </td>
            <td>
              {item.country}
            </td>
          </tr> 
        )
      })
    )
  }
  
  render() {
    return (
      <div className="App">
        <table className="table">
          <tr  className="tr">
            {this.renderTitle()}
          </tr >
          {this.renderTable()}
        </table>
      </div>
    );
   }
}

export default App;
