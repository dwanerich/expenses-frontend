import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/accounts', {
      method: 'GET'
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <h1>Expenses App</h1>
      </div>
    );
  }
}

export default App;
