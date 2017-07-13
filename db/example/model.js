'use strict';

import Sequelize from 'sequelize';
import db from '../';

const Example = db.define('example', {
    name: Sequelize.STRING
});

export default Example;