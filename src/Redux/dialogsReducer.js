const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState =  {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your react?'},
        {id: 3, message: 'Very Hard'},
        {id: 4, message: 'Very Hard'},
        {id: 5, message:  'Very Hard'}
    ],
    dialogs:[
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Alina'},
        {id: 3, name: 'Vladimir'},
        {id: 4, name: 'Valentina'},
        {id: 5, name:  'Vadim'}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = action.message
            return {
                ...state,
                messages: [...state.messages, {id:6, message: text}]
            }
        default:
            return state
    }
}
export const sendMessageCreator = (message) => ({type: SEND_MESSAGE, message})


export default dialogsReducer