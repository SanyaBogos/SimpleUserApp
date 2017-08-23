import { handleActions } from 'redux-actions';
import * as Actions from '../constants/usersActions';
import { changeCurrentUser } from '../actions/user';

const initialState: UsersStoreState = [{
    id: 0,
    name: 'Alex',
    surname: 'B',
    age: 25,
    gender: 'Male'
}];

export default handleActions<UsersStoreState, UserData>({
    [Actions.ADD_USER]: (state, action) => {
        return [{
            ...action.payload,
            id: state.reduce((maxId, user) => Math.max(user.id, maxId), -1) + 1
        }, ...state];
    },

    [Actions.REMOVE_USER]: (state, action) => {
        return state.filter(user => user.id !== action.payload.id);
    },

    [Actions.UPDATE_USER]: (state, action) => {
        return state.map(user => {
            return user.id === action.payload.id
                ? { ...action.payload }
                : user;
        });
    }    
}, initialState);
