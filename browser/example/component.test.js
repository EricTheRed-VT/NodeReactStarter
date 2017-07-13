'use strict';

import React from 'react';
import chai, { expect } from 'chai';
import chai-enzyme from 'chai-enzyme';
import sinon-chai from 'sinon-chai';
import { shallow } from 'enzyme';
// import { spy } from 'sinon';

chai.use(chai-enzyme());
chai.use(sinon-chai);

import Example from './component';

describe('<Example/>', () => {
    let root;
    beforeEach('render the root', () =>
        root = shallow(<Example />)
    )

    xit('renders a thing', () => {
        let thing = root.find('.thing');
        expect(thing).to.be.ok;
    })
})