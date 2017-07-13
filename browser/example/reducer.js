'use strict';

/* ------------------- INITIAL STATE ------------------- */

const initialState = {
    data: null
};

/* ------------------- ACTION  TYPES ------------------- */

export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';

/* ------------------ ACTION CREATORS ------------------ */

export const exampleActionCreator = data => {
    return {
        type: EXAMPLE_ACTION,
        data
    };
};

/* --------------- THUNK ACTION CREATORS --------------- */

export const exampleThunk = () => {
    return dispatch => {
        //do stuff
        //dispatch(exampleActionCreator(something));
    };
};

/* ---------------------- REDUCER ---------------------- */

export default const exampleReducer = (state = initialState, action) => {
    switch (action.type) {

        case EXAMPLE_ACTION:
            const newState = Object.assign({}, state);
            newState.data = action.data;
            //change stuff
            return newState;

        default:
            return state;
    }
}