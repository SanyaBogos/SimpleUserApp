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
import { shallow, mount } from 'enzyme';
import { NewPage } from "../../../containers/NewPage/index";
import { configureStore } from "../../../store/index";

describe('<UserInput />', () => {
    const setup = () => {
        const store = configureStore();
        const props = {
            currentUser: {},
            currentUserActions: UserActions,
            usersArrayActions: UsersActions,
            store: store
        }

        const enzymeWrapper = mount(<UserInput {...props} />)

        return {
            store,
            props,
            enzymeWrapper
        }
    };

    it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.find('h4').length > 0).toBe(true);
        expect(enzymeWrapper.find('input').length > 1).toBe(true);
        expect(enzymeWrapper.find('button').length > 0).toBe(true);
    })

    it('should change props if name input has changed', () => {
        const { enzymeWrapper } = setup();
        const newValue = 'New Name';
        const nameInput = enzymeWrapper.find('input').findWhere(
            x => x.props().placeholder
                && (x.props().placeholder as string).indexOf(' name') > 0)
            .first();

        nameInput.simulate('change', { target: { value: newValue } });

        expect(nameInput.props().value).toBe(newValue);
    });

    it('should change props if surname input has changed', () => {
        const { enzymeWrapper } = setup();
        const newValue = 'New surname';
        const nameInput = enzymeWrapper.find('input').findWhere(
            x => x.props().placeholder
                && (x.props().placeholder as string).indexOf(' surname') > 0)
            .first();

        nameInput.simulate('change', { target: { value: newValue } });

        expect(nameInput.props().value).toBe(newValue);
    });

    it('should change props if age input has changed', () => {
        const { enzymeWrapper } = setup();
        const newValue = 111;
        const nameInput = enzymeWrapper.find('input').findWhere(
            x => x.props().type
                && (x.props().type as string) === 'number')
            .first();

        nameInput.simulate('change', { target: { value: newValue } });

        expect(nameInput.props().value).toBe(newValue);
    });

    it('should change props if gender input has changed to male', () => {
        const { enzymeWrapper } = setup();
        const newValue = 'Male';
        const nameInput = enzymeWrapper.find('input').findWhere(
            x => x.props().type
                && (x.props().type as string) === 'radio'
                && x.props().value === 'Male')
            .first();

        nameInput.simulate('click');

        expect(nameInput.props().value).toBe(newValue);
    });

    it('should change props if gender input has changed to female', () => {
        const { enzymeWrapper } = setup();
        const newValue = 'Female';
        const nameInput = enzymeWrapper.find('input').findWhere(
            x => x.props().type
                && (x.props().type as string) === 'radio'
                && x.props().value === 'Female')
            .first();

        nameInput.simulate('click');

        expect(nameInput.props().value).toBe(newValue);
    });
});
