import { handleActions } from 'redux-actions';
import * as Actions from '../constants/userActions';

const initialState: CurrentUserStoreState = {
    id: 0,
    name: '',
    surname: '',
    age: 0,
    gender: null
};

export default handleActions<CurrentUserStoreState, UserData>({
    [Actions.CHANGE_CURRENT_USER]: (state, action) => {
        return { ...state, ...action.payload };
    }
}, initialState);
