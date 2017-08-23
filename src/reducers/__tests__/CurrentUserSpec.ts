import reducer from '../currentUser'
import * as Actions from '../../constants/userActions';
import { changeCurrentUser } from "../../actions/user";

describe('currentUser reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, changeCurrentUser({}))).toEqual({
            id: 0,
            name: '',
            surname: '',
            age: 0,
            gender: null
        })
    });

    it('should change only name state', () => {
        const name = 'new name';
        expect(reducer(undefined, changeCurrentUser({ name }))).toEqual({
            id: 0,
            name: name,
            surname: '',
            age: 0,
            gender: null
        })
    });

    it('should change only age state', () => {
        const age = 222;
        expect(reducer(undefined, changeCurrentUser({ age }))).toEqual({
            id: 0,
            name: '',
            surname: '',
            age: age,
            gender: null
        })
    });

    it('should change only surname state', () => {
        const surname = 'new name';
        expect(reducer(undefined, changeCurrentUser({ surname }))).toEqual({
            id: 0,
            name: '',
            surname: surname,
            age: 0,
            gender: null
        })
    });

    it('should change only gender state', () => {
        const gender = 'Male';
        expect(reducer(undefined, changeCurrentUser({ gender }))).toEqual({
            id: 0,
            name: '',
            surname: '',
            age: 0,
            gender: gender
        });
    });

    const userData = { id: 2, name: 'One', surname: 'Two', age: 22, gender: 'Male' } as UserData;

    it('should change some props state', () => {
        const name = 'NewOne';
        const surname = 'NewTwo';

        expect(reducer(userData, changeCurrentUser({ name, surname }))).toEqual(
            {
                id: 2,
                name: name,
                surname: surname,
                age: 22,
                gender: 'Male'
            });
    });
});