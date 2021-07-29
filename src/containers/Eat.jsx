import React from 'react';
import { connect } from 'react-redux';
import { actionEat } from '../actions';

const Eat = props => (
    <button onClick={props.handleClick}>Eat</button>
);

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionEat());
        }
    }
}

export default connect(null, mapDispatchToProps)(Eat);