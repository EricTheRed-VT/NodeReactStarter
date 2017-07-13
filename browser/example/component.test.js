'use strict';

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';
import { shallow } from 'enzyme';
// import { spy } from 'sinon';

chai.use(chaiEnzyme());
chai.use(sinonChai);

import Example from './component';

describe('<Example/>', () => {
    let root;
    beforeEach('render the root', () =>
        root = shallow(<Example />)
    );

    xit('renders a thing', () => {
        let thing = root.find('.thing');
        expect(thing).to.be.ok;
    })
});