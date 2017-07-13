'use strict';

import db from '../../db';
import app from '../';
import ExampleModel from '../../db/example/model';

import request from 'supertest-as-promised';
import chai, { expect } from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);


describe('/api/example', () => {
    before('wait for the db', () => db.didSync);

    let option1, option2, option3, adminUser;
    before(() => ExampleModel.destroy({
                                   truncate: true,
                                   cascade: true,
                                   restartIdentity: true
                               })
        .then(() => {
            option1 = ExampleModel.build({ name: "Joe" });
            option2 = ExampleModel.build({ name: "Bob" });
            option3 = ExampleModel.build({ name: "Maurice" });

            return Promise.all([option1.save(), option2.save(), option3.save()])
            .then( values => values[0].setOptions([option2, option3]) );
        })
    );

    after(() => ExampleModel.truncate(
            {
                truncate: true,
                cascade: true,
                restartIdentity: true
            })
    );

    describe('routes:', () => {
        it('GET / returns all', () =>
            request(app)
            .get(`/api/example`)
            .then(response => {
                expect(response.body.length).to.equal(3);
                expect(response.body).to.contain.a.thing.with('name', "Joe");
                expect(response.body).to.contain.a.thing.with('name', "Bob");
                expect(response.body).to.contain.a.thing.with('name', "Maurice");
            }))


        it('GET /:id returns a single {example}', () =>
            request(app)
            .get(`/api/example/1`)
            .then(response => {
                expect(response.body).to.be.an('object');
                expect(response.body.id).to.equal(1);
                expect(response.body.name).to.be.equal("Joe");
            })
        );

        it('POST creates a user', () =>
            request(app)
           .post('/api/users')
           .send({ name: "Daniel" })
           .then( res => expect(res.body.name).to.be.equal("Daniel") )
        );

        it('PUT /:id alters an {example}', () =>
            request(app)
            .put(`/api/example/1`)
            .send({ name: 'Alexander' })
            .then( res => expect(res.body).to.be.an('object') )
        );

        it('DELETE /:id deletes an {example}', () =>
            request(app)
            .delete(`/api/example/1`)
            .expect(200)
        );

    })

});