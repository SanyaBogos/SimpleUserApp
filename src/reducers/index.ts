import { combineReducers, Reducer } from 'redux';
import todos from './todos';
import users from './users';
import currentUser from './currentUser';

export interface RootState {
  todos: TodoStoreState;
  users: UsersStoreState;
  currentUser: CurrentUserStoreState;
}

export default combineReducers<RootState>({
  todos, users, currentUser
});
