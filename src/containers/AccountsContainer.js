import React from 'react'
import {fetchAccounts} from '../actions/fetchAccounts'
import { connect } from 'react-redux'
import Accounts from '../components/Accounts'
import AccountInput from '../components/AccountInput'


class AccountsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchAccounts()

    }

    render() {
        return (
            <div>
                Accounts Container
                <AccountInput />
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