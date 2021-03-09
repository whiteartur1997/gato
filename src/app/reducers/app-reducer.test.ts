import {appReducer, AppStateType, setStatus} from './app-reducer';

let startState: AppStateType;
beforeEach(() => {
    startState = {
        status: 'idle'
    }
});

test('Status should be changed to correct value', () => {
    const status = 'loading';
    const endState = appReducer(startState, setStatus(status));
    expect(endState.status).toBe(status);
});