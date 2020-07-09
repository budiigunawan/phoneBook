const initialState = {
    contact: null,
    contacts: []
}

function contactReducer(state = initialState, {type,payload}) {
    switch (type) {
        case 'GET_CONTACTS':
            return {...state, contacts: payload.contacts}
        case 'SET_CONTACT':
            return {...state, contact: payload}
        default:
            return state
    }
}

export default contactReducer