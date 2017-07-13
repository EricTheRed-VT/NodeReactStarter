'use strict';

import db from '../../db';
const ExampleModel = db.model('example');

import { Router } from 'express';

const exampleRouter = Router()
// get all {example}s
.get(`/`, (req, res, next) => {
    ExampleModel.findAll()
    .then(res.send.bind(res))
    .catch(next)
})

// get one {example}
.get(`/:id`, (req, res, next) =>
    ExampleModel.findById(req.params.id)
    .then(res.send.bind(res))
    .catch(next)
)

// add a new {example}
.post(`/`, (req, res, next) =>
    ExampleModel.findOrCreate({ where: {name: req.body.name} })
    .then( created => created[0] )
    .then( createdExample => res.status(201).send(createdExample) )
    .catch(next)
)

// edit an {example}
.put(`/:id`, (req, res, next) =>
    ExampleModel.update(req.body, {
        where: {
            id: req.params.id
        },
        returning: true
    })
    .then(result => result[1][0])
    .then(res.send.bind(res))
    .catch(next)
)

// delete an {}example
.delete(`/:id`, (req, res, next) =>
    ExampleModel.destroy({ where: {id: req.params.id} })
    .then(result => res.sendStatus(200))
    .catch(next)
)

export default exampleRouter;