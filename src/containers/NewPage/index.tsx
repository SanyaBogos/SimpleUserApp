import * as UsersActions from '../../actions/users';
import * as UserActions from '../../actions/user';
import * as React from "react";
import * as style from './style.css';
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import UserInput from "../../components/UserInput/index";
import UsersList from "../../components/UsersList/index";

export namespace NewPage {
    export interface Props extends RouteComponentProps<void> {
        users: UserData[];
        currentUser: UserData;
        userArrayActions: typeof UsersActions;
        currentUserActions: typeof UserActions
    }

    export interface State {
        users: UserData[];
        currentUser: UserData;
    }
}

export class NewPage extends React.Component<NewPage.Props, NewPage.State> {

    constructor(props?: NewPage.Props, context?: any) {
        super(props, context);
        this.state = {
            users: this.props.users || [],
            currentUser: this.props.currentUser || {}
        };
    }

    render() {
        const { users, userArrayActions, children, currentUserActions, currentUser } = this.props;

        return (
            <div className={style.normal}>
                <h1>Welcome!!!</h1>
                <UserInput currentUserActions={currentUserActions}
                    usersArrayActions={userArrayActions} currentUser={currentUser} />

                <UsersList currentUserActions={currentUserActions}
                    usersArrayActions={userArrayActions} users={users} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users,
    currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(UsersActions as any, dispatch),
    currentUserActions: bindActionCreators(UserActions as any, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPage);