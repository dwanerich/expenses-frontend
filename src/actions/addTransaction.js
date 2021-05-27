export const addTransaction = (data) => {

    // debugger;
    return (dispatch) => {
        fetch('http://localhost:3000/transactions', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then(transaction => dispatch({type: 'ADD_TRANSACTION', payload: transaction}))
    }

}