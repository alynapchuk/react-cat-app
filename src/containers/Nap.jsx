import React from 'react';
import { connect } from 'react-redux';
import { actionNap } from '../actions';

const Nap = props => (
    <button onClick={props.handleClick}>Nap</button>
);

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionNap());
        }
    }
}

export default connect(null, mapDispatchToProps)(Nap);