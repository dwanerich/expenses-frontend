import React from 'react'
import AccountsContainer from './containers/AccountsContainer'
import TransactionsContainer from './containers/TransactionsContainer'



class App extends React.Component {


  render() {
    return (
      <div className="App">
        <h1>Expenses App</h1>
        <AccountsContainer />
        <TransactionsContainer />
      </div>
    );
  }
}



export default (App)
