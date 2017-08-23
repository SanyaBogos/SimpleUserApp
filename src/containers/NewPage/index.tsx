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
    export interface Props extends RouteComponentProps<void> { }
    export interface State { }
}

export class NewPage extends React.Component<NewPage.Props, NewPage.State> {

    constructor(props?: NewPage.Props, context?: NewPage.State) {
        super(props, context);
    }

    render() {
        return (
            <div className={style.normal}>
                <h1>Welcome!!!</h1>
                <UserInput />
                <UsersList />
            </div>
        );
    }
}