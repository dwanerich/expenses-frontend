import React from 'react'
import {connect} from 'react-redux'
import {addTransaction} from '../actions/addTransaction'

class TransactionForm extends React.Component {

    state = {
        name: '',
        balance: ''
    }

    handleChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAccount(this.state)
        this.setState({
            name: '',
            balance: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>User ID:</label>
                    <input type='text' placeholder='UserId' name='name' value={this.state.name} onChange={this.handleChange} /> <br />
                    <label>Amount:</label>
                    <input type='text' placeholder='Amount' name='name' value={this.state.name} onChange={this.handleChange} /> <br />
                    <label>Kind:</label>
                    <input type='text' placeholder='Kind' name='balance' value={this.state.balance} onChange={this.handleChange}/> <br />
                    <label>Date:</label>
                    <input type='text' placeholder='Date' name='balance' value={this.state.balance} onChange={this.handleChange} /> <br />
                    <label>Description:</label>
                    <input type='text' placeholder='Description' name='balance' value={this.state.balance} onChange={this.handleChange} /> <br />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}
export default connect(null, {addTransaction})(TransactionForm)