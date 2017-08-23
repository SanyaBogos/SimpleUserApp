import * as React from "react";
import * as UsersActions from '../../actions/users';
import * as UserActions from '../../actions/user';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

export namespace UsersList {
    export interface Props {
        users?: UserData[];
        usersArrayActions?: typeof UsersActions;
        currentUserActions?: typeof UserActions
    }

    export interface State {
        users?: UserData[];
    }
}

export class UsersList extends React.Component<UsersList.Props, UsersList.State> {

    constructor(props?: UsersList.Props, context?: any) {
        super(props, context);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleCurrentUserSet = this.handleCurrentUserSet.bind(this);
    }

    handleRemove(id: UserId) {
        this.props.usersArrayActions.deleteUser({ id: id });
    }

    handleCurrentUserSet(id: UserId) {
        const user = this.props.users.find(user => user.id === id);
        user.isNew = false;
        this.props.currentUserActions.changeCurrentUser(user);
    }

    render() {
        const { users } = this.props;

        return (
            <div>
                <ul>
                    {users.map(user =>
                        <li key={user.id}>
                            <label><strong>Name: </strong></label>
                            <label>{user.name}</label><br />
                            <label><strong>Surname: </strong></label>
                            <label>{user.surname}</label><br />
                            <label><strong>Age: </strong></label>
                            <label>{user.age}</label><br />
                            <label><strong>Gender: </strong></label>
                            <label>{user.gender}</label><br />
                            <button onClick={() => this.handleCurrentUserSet(user.id)}>Edit</button>
                            <button onClick={() => this.handleRemove(user.id)}>
                                Remove
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users,
});

const mapDispatchToProps = dispatch => ({
    usersArrayActions: bindActionCreators(UsersActions as any, dispatch),
    currentUserActions: bindActionCreators(UserActions as any, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);