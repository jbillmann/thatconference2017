import { Action, Reducer } from 'redux';

const types = {
    MOVE_SLIDE_FORWARD: 'MOVE_SLIDE_FORWARD',
    MOVE_SLIDE_BACKWARD: 'MOVE_SLIDE_BACKWARD',
    UPDATE_USER: 'UPDATE_USER',
    SAVE_USER_REQUEST: 'SAVE_USER_REQUEST',
    SAVE_USER_RECEIVE: 'SAVE_USER_RECEIVE',
    TOGGLE_TOOLS: 'TOGGLE_TOOLS',
};

const initialState = {
    slidePosition: 0,
    currentSlide: 'LandBeforeTime',
    isLoading: false,
    slides: ['LandBeforeTime', 'About', 'AboutRedux', 'AboutRedux2', 'AboutRedux3', 'ReduxFocus', 'BeforeWeBegin', 'PredictableBehavior', 'PureFunctions', 'ImpureFunctionExamples', 'PureFunctionExamples', 'Immutability', 'ImmutabilityExamples', 'ImmutabilityExamples2', 'ObjectAssign', 'ArraySplice', 'SpreadOperator', 'FlatState', 'ReduxImmutability', 'ReferenceEqualityExample', 'ValueEqualityExample', 'ReduxFlow', 'PuttingItAllTogether', 'TimeTravelForFree', 'DeveloperExperience', 'TimeTravelExample', 'References'],
    users: [],
    user: {
        firstName: '',
        lastName: '',
        showErrors: false,
    },
    hasErrors: true,
    errors: {},
    showTools: false
};

export const actions = {
    moveSlideForward: () => ({ type: types.MOVE_SLIDE_FORWARD }),
    moveSlideBackward: () => ({ type: types.MOVE_SLIDE_BACKWARD }),
    updateUser: (updates) => ({ type: types.UPDATE_USER, value: updates }),
    saveUser: () => ({ type: types.SAVE_USER }),
    toggleTools: () => ({ type: types.TOGGLE_TOOLS }),

    requestSaveUser: () => ({ type: types.SAVE_USER_REQUEST }),
    receiveSaveUser: (json) => ({ type: types.SAVE_USER_RECEIVE }),
    saveUser: () => dispatch => {
        dispatch(actions.requestSaveUser());
        setTimeout(() => {
             dispatch(actions.receiveSaveUser());
        }, 500)
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.MOVE_SLIDE_FORWARD:
            var slidePosition = state.slidePosition + 1;
            slidePosition = slidePosition >= state.slides.length - 1 ? state.slides.length - 1 : slidePosition

            return Object.assign({}, state, { slidePosition, currentSlide: state.slides[slidePosition] });

        case types.MOVE_SLIDE_BACKWARD:
            var slidePosition = state.slidePosition - 1;
            slidePosition = slidePosition < 0 ? 0 : slidePosition

            return Object.assign({}, state, { slidePosition: slidePosition, currentSlide: state.slides[slidePosition] });

        case types.UPDATE_USER:
            var errors = {};
            var newUser = Object.assign({}, state.user, action.value);
            
            if(newUser.firstName == '') {
                errors.firstName = 'Enter a First Name';
            }
            if(newUser.lastName == '') {
                errors.lastName = 'Enter a Last Name';
            }

            return Object.assign({}, state, { user: newUser, errors, hasErrors: Object.keys(errors).length > 0 });

        case types.SAVE_USER_REQUEST:
            return Object.assign({}, state, { isLoading: true });

        case types.SAVE_USER_RECEIVE:
            var users = state.users.splice(0);
            var newUser = Object.assign({}, state.user, initialState.user);

            if(users.length < 2) {
                users.push({ id: users.length + 10, firstName: state.user.firstName, lastName: state.user.lastName });
            }

            return Object.assign({}, state, { users, errors: {}, user: newUser, hasErrors: true, showErrors: false, isLoading: false });

        case types.TOGGLE_TOOLS:
            return Object.assign({}, state, { showTools: !state.showTools });

        default:
            return state;
    }
};