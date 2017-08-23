import reducer from '../users'
import * as Actions from '../../constants/usersActions';
import { addUser, editUser, deleteUser } from "../../actions/users";

describe('users array reducer', () => {
    const usersArray = [{ id: 3 }, { id: 10 }];

    it('should add new user', () => {
        expect(reducer(undefined, addUser({}))).toEqual([{ id: 1 }, {
            id: 0,
            name: 'Alex',
            surname: 'B',
            age: 25,
            gender: 'Male'
        }])
    });

    it('should add new user with correct id', () => {
        expect(reducer(usersArray, addUser({})))
            .toEqual([{ id: 11 }, { id: 3 }, { id: 10 }])
    });

    it('should add new user with all existing fields', () => {
        const userForAdding = {
            name: 'One',
            surname: 'Two',
            age: 33,
            gender: 'Female'
        } as UserData;
        expect(reducer(usersArray, addUser(userForAdding)))
            .toEqual([{
                id: 11,
                name: 'One',
                surname: 'Two',
                age: 33,
                gender: 'Female'
            },
            { id: 3 }, { id: 10 }])
    });

    it('should edit existing user (no fields filled)', () => {
        const userForEdit = { id: 3, name: 'NewOne' };
        expect(reducer(usersArray, editUser(userForEdit)))
            .toEqual([{ id: 3, name: 'NewOne' }, { id: 10 }])
    });

    it('should edit existing user (fully filled)', () => {
        const userForEdit = {
            id: 11,
            name: 'NewOne',
            surname: 'NewTwo',
            age: 44,
            gender: 'Male'
        } as UserData;
        expect(reducer([{
            id: 11,
            name: 'One',
            surname: 'Two',
            age: 33,
            gender: 'Female'
        }], editUser(userForEdit)))
            .toEqual([userForEdit])
    });

    it('should remove user (init check)', () => {
        const id = 0;
        expect(reducer(undefined, deleteUser({ id }))).toEqual([])
    });

    it('should remove user', () => {
        const id = 3;
        expect(reducer(usersArray, deleteUser({ id }))).toEqual([{ id: 10 }])
    });

    it('shouldn`t remove user if no id', () => {
        const id = 111;
        expect(reducer(usersArray, deleteUser({ id }))).toEqual(usersArray)
    });
});    