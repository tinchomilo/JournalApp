import { types } from "../types/types";

/*  esto retorna la base de datos
    {
        uid: '132121212sdada,
        name: 'Martin
    }
*/

export const authReducer = ( state = {}, action ) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
            
        case types.logout:
            return { }

        default:
            return state;
    }
}