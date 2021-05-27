import React from 'react'

const Transactions = (props) => {

    return (
        <div>
            <h1>Transactions</h1>
            {props.accounts.map(account => <li key={account.id}>{account.name} - {account.balance} <button>Send</button></li> )}
            
        </div>
    )
}

export default Transactions