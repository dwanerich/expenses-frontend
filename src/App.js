import React from 'react'
import {connect} from 'react-redux';
import {fetchAccounts} from './actions/fetchAccounts'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchAccounts({type: 'FETCH_ACCOUNTS', payload: {name: 'Checking'}})

  }

  render() {
    return (
      <div className="App">
        <h1>Expenses App</h1>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     accounts: state.accounts
//   }
// }

export default connect(null, {fetchAccounts})(App)
