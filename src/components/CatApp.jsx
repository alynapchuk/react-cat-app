import React from 'react';
import Output from '../containers/Output';
import Nap from '../containers/Nap';
import Eat from '../containers/Eat';
import Play from '../containers/Play';

const CatApp = props => (
    <div>
        <h1>What's new, pussycat?</h1>
        <Output />
        <Nap />
        <Eat />
        <Play />
    </div>
);

export default CatApp;