'use strict';

import { expect } from 'chai';
import { createStore } from 'redux';

import exampleReducer, { EXAMPLE_ACTION } from './reducer';

describe('Product reducer', () => {
    let testStore;
    beforeEach('create testing store', () => {
        testStore = createStore(exampleReducer)
    });
    
    it('has the proper initial state', () => {
        expect(testStore.getState()).to.be.deep.equal({ data: null });
    });
    
    it('sets new data', () => {
        let testAction = {
            type: EXAMPLE_ACTION,
            data: {hi: "hello"}
        };
        testStore.dispatch(testAction);
        let newState = testStore.getState();
        expect(newState.data).to.be.deep.equal(testAction.data);
    })
});