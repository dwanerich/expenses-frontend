import React from 'react'
import AccountsContainer from './containers/AccountsContainer'


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <h1>Expenses App</h1>
        <AccountsContainer />
      </div>
    );
  }
}



export default (App)
