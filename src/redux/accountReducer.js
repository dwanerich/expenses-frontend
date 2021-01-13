
export default function accountReducer(state = { accounts: []}, action) {
    return action.payload
    // this was set up to see our action was coming in correctly + store could properly be updated by our reducer
}
        
