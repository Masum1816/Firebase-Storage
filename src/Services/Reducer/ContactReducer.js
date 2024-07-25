
const intialState = {
    
    contacts: [],
    contact: null,
    loading: true

}

const ContactReducer = (state = intialState, action) => {

    switch(action.type){

        case "GETCONTACT":
            return{
                ...state,
                contacts: action.payload,
                contact: null,
                loading: false
            }

        case "UPDATECONTACT":
            return{
                ...state,
                contact: action.payload,
                loading: false
            }

        case "DELETECONTACT":
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload.id),
                loading: false
            }

        default:
            return state

    }

}

export default ContactReducer;







