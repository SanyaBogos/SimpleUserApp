import { createAction } from 'redux-actions';
import * as Actions from '../constants/userActions';

export const changeCurrentUser = createAction<UserData>(Actions.CHANGE_CURRENT_USER);
