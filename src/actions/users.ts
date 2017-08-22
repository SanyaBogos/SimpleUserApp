import { createAction } from 'redux-actions';
import * as Actions from '../constants/usersActions';

export const addUser = createAction<UserData>(Actions.ADD_USER);
export const editUser = createAction<UserData>(Actions.UPDATE_USER);
export const deleteUser = createAction<UserData>(Actions.REMOVE_USER);

