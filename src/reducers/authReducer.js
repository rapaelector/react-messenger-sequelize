import { AccessTimeOutlined } from "@material-ui/icons";

const initialState = {
    token: '',
    user: null ,
    error: '',
    success:""
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            const {response} = action.payload;
            return {...state, token: response.token}
        case 'LOGIN_PENDING':
            return {...state, token: '', error: ''}
        case 'REGISTER_SUCCESS':
            return {...state, success: action.payload.success, error: ''}
        case 'DO_PURGE_AUTH_MESSAGE':
            return {...state, error: '', success: ''}
        case 'REGISTER_FAILED':
            return {...state, error: action.payload.error, success: ''}
        case 'USER_VALID':
            return {...state, user: action.payload.user}
        case 'LOGOUT':
            return {...state, token: ''}
        case 'USER_NONVALID':
            return {...state, token: '', error: action.payload.error}
        case 'LOGIN_FAILED':
            const {error} = action.payload;
            return {...state, error: error}
        default : 
            return state;
    }
}