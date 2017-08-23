import * as React from 'react';
import * as UsersActions from '../../../actions/users';
import * as UserActions from '../../../actions/user';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { createRenderer } from 'react-test-renderer/shallow';
import currentUser from '../../../reducers/currentUser';
import users from '../../../reducers/users';
import UserInput from "../index";
import { create } from 'react-test-renderer';
import { shallow } from 'enzyme';
import { NewPage } from "../../../containers/NewPage/index";

describe('<UserInput />', () => {
    const store = createStore(users);
    const currentUser = { name: '', surname: '', age: 0 } as UserData;

    it('renders', () => {
        const component = create(<Provider store={store}>
            <UserInput usersArrayActions={UsersActions}
                currentUserActions={UserActions}
                currentUser={currentUser} />
        </Provider >);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('UserInput check changes for name', () => {
        const userInput = shallow(
            <Provider store={store}>
                <UserInput usersArrayActions={UsersActions}
                    currentUserActions={UserActions}
                    currentUser={currentUser} />
            </Provider >);

        userInput.find("input").first().simulate('change', {target: {value: 'My new value'}});

        // console.log(userInput.find("input").first().text());
        // console.log(userInput.find("input").first());
        // expect( userInput.find("input").first()).to;
    });
});
