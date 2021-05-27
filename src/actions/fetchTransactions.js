export function fetchTransactions() {
    return (dispatch) => {
        fetch('http://localhost:3000/transactions')
        .then(r => r.json())
        .then(transactions => dispatch({
            type: 'FETCH_TRANSACTIONS',
            payload: transactions
        }))
}}
