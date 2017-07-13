'use strict';

import db from '../';

const data = [ //records to be seeded
    {name: "Joe"},
    {name: "Bob"},
    {name: "Maurice"}
]

const seedExample = () => db.Promise.map(data, ex => db.model('example').create(ex));

export default seedExample;