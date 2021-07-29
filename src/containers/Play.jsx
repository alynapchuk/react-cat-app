import React from 'react';
import { connect } from 'react-redux';
import { actionPlay } from '../actions';

const Play = props => (
    <button onClick={props.handleClick}>Play</button>
);

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {
            dispatch(actionPlay());
        }
    }
}

export default connect(null, mapDispatchToProps)(Play);