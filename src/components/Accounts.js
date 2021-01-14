import React from 'react'

const Accounts = (props) => {

    return (
        <div>
            <h1>Accounts</h1>
            {props.accounts.map(account => <li key={account.id}>{account.name} - {account.balance} </li> )}
        </div>
    )
}

export default Accounts