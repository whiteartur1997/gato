import {registrationReducer, RegistrationStateType, setError, setIsRegistrationIn} from './registration-reducer';

let startState: RegistrationStateType;
beforeEach(() => {
    startState = {
        error: null,
        isRegistrationIn: false
    }
});

test('Correct error message should be added', () => {
    const error = 'Some error is occur!'
    const endState = registrationReducer(startState, setError(error));
    expect(endState.error).toBe(error);
    expect(endState.isRegistrationIn).toBeFalsy();

});
test('isRegistrationIn  should be correct changed', () => {
    const endState = registrationReducer(startState, setIsRegistrationIn(true));
    expect(endState.error).toBe(null);
    expect(endState.isRegistrationIn).toBeTruthy();
});