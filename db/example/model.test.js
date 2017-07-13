'use strict';

import db from '../';
import Example from './model';
import { expect } from 'chai';

describe('Example', () => {
    before('wait for the db sync', () => db.didSync);

    describe('validates', () => {
        var example;
        beforeEach(() => {
            example = Example.build({ name: "Jimmy" });
        });

        xit('requires a name', () => {
            example.name = null;
            return example.save()
                          .then(result => expect(result).to.be.null)
                          .catch(err => expect(err.message).to.be.equal('Validation error: requires a name'))
                          .then(() => {
                              address.name = "Jimmy";
                              return address.save();
                          })
                          .then(result => expect(result.name).to.equal('Jimmy'));
        });
    });
});
