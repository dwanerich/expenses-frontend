import React from 'react'
import {fetchAccounts} from '../actions/fetchAccounts'
import { connect } from 'react-redux'
import Accounts from '../components/Accounts'
import AccountForm from '../components/AccountForm'


class AccountsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchAccounts()

    }

    render() {
        return (
            <div>
                <h2>Accounts Container</h2>
                <AccountForm />
                <Accounts accounts={this.props.accounts}/>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, {fetchAccounts} )(AccountsContainer)