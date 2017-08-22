import * as React from 'react';
import * as UserActions from '../../actions/user';
import * as UsersActions from '../../actions/users';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

export namespace UserInput {
    export interface Props {
        currentUser?: UserData;
        currentUserActions: typeof UserActions;
        usersArrayActions: typeof UsersActions;
    }

    export interface State {
        currentUser: UserData;
    }
}

export class UserInput extends React.Component<UserInput.Props, UserInput.State> {

    constructor(props?: UserInput.Props, context?: any) {
        super(props, context);
        this.state = {
            currentUser: this.props.currentUser || {}
        };
        this.handleNameEnter = this.handleNameEnter.bind(this);
        this.handleSurnameEnter = this.handleSurnameEnter.bind(this);
        this.handleAgeEnter = this.handleAgeEnter.bind(this);
        this.handleUserAdding = this.handleUserAdding.bind(this);
        this.handleUserEditing = this.handleUserEditing.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.clearCurrentUser();
    }

    handleNameEnter(e) {
        const text = e.target.value.trim();
        this.props.currentUserActions.changeCurrentUser({ name: text });
    }

    handleSurnameEnter(e) {
        const text = e.target.value.trim();
        this.props.currentUserActions.changeCurrentUser({ surname: text });
    }

    handleAgeEnter(e) {
        const text = e.target.value.trim();
        this.props.currentUserActions.changeCurrentUser({ age: text });
    }

    handleUserAdding() {
        this.props.usersArrayActions.addUser(this.props.currentUser);
        this.clearCurrentUser();
    }

    handleUserEditing() {
        this.props.usersArrayActions.editUser(this.props.currentUser);
        this.clearCurrentUser();
    }

    handleGenderChange(e) {
        const text = e.target.value.trim();
        this.props.currentUserActions.changeCurrentUser({ gender: text });
    }

    render() {
        const { currentUser, children } = this.props;

        return (
            <div>
                <h4>Create new user</h4>
                <input placeholder="Enter name" onChange={this.handleNameEnter}
                    value={currentUser.name} /><br />
                <input placeholder="Enter surname" onChange={this.handleSurnameEnter}
                    value={currentUser.surname} /><br />
                <input placeholder="Enter age" type="number" min="0" max="250"
                    onChange={this.handleAgeEnter} value={currentUser.age} /><br />
                <input type="radio" value="Male"
                    checked={currentUser.gender === 'Male'}
                    onClick={(e) => this.handleGenderChange(e)} />Male
                <input type="radio" value="Female"
                    checked={currentUser.gender === 'Female'}
                    onClick={(e) => this.handleGenderChange(e)} />Female
                <br />
                {currentUser.name || currentUser.surname || currentUser.age ?
                    <label>User:
                        <label>{!!currentUser.name ? <label>{currentUser.name}</label> : null} </label>
                        <label>{!!currentUser.surname ? <label>{currentUser.surname}</label> : null} </label>
                        <label>{!!currentUser.age ? <label>{currentUser.age}</label> : null} </label>
                    </label> : null}

                <br />
                {currentUser.isNew ? <button onClick={this.handleUserAdding}>Add user</button> : null}
                {!currentUser.isNew ? <button onClick={this.handleUserEditing}>Edit user</button> : null}
            </div>
        );
    }

    private clearCurrentUser() {
        const newUser = { name: '', surname: '', age: 0, isNew: true } as UserData;
        this.props.currentUserActions.changeCurrentUser(newUser);
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
    currentUserActions: bindActionCreators(UserActions as any, dispatch),
    usersArrayActions: bindActionCreators(UsersActions as any, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInput);