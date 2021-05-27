import React from 'react'
import { fetchTransactions } from '../actions/fetchTransactions'
import { connect } from 'react-redux'
import Transactions from '../components/Transactions'
import TransactionForm from '../components/TransactionForm'


class TransactionsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTransactions()

    }

    render() {
        return (
            <div>
                <h2>Transactions Container</h2>
                <TransactionForm />
                <Transactions accounts={this.props.accounts} />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, { fetchTransactions })(TransactionsContainer)