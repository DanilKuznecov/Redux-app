export const ADD_USER = 'ADD_USER';



// Action creator
export const addUser = (users) => ({
    type: ADD_USER,
    payload: {
        name: users
   }
})