'use strict';

/* --------------------- COMPONENT --------------------- */

import React, {Component} from 'react';

const exampleComponent = ({exampleData, doExampleAction, doExampleThunk}) => {
    //setup any helper funcs/logic (e.g. onSubmit)
    return (
        <div>Stuff</div>
    );
};

/* --------------------- CONTAINER --------------------- */

import { exampleActionCreator, exampleThunk } from './reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    exampleData: state.exampleReducer.data
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    doExampleAction: data => dispatch(exampleActionCreator(data)),
    doExampleThunk: () => dispatch(exampleThunk())
});

const Example = connect(
    mapStateToProps,
    mapDispatchToProps
)(exampleComponent);

export default Example;