import React from 'react';
import { connect } from 'react-redux';

const Output = props => (
    <div>
        <h3>The kitty-cat is currently... {props.activity}!</h3>
    </div>
);

function mapStateToProps(state) {
    return {
        activity: state.activity
    }
}

export default connect(mapStateToProps)(Output);