'use strict';

import db from '../db';
import { Router } from 'express';
import exampleRouter from './example'

const api = Router()

//check if the server is running
.get('/heartbeat', (req, res) => res.send({ ok: true }))

//subrouters
.use('/example', exampleRouter)

// No /api/ routes matched? 404.
.use((req, res) => res.status(404).send());

export default api;