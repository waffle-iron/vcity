const { authenticate } = require('feathers-authentication').hooks;
const { restrictToRoles } = require('feathers-authentication-hooks');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [restrictToRoles({roles: ['admin','moderator']})],
    update: [restrictToRoles({
      roles: ['admin','moderator'],
      ownerField: 'responsible',
      owner: true
    })],
    patch: [restrictToRoles({
      roles: ['admin','moderator'],
      ownerField: 'responsible',
      owner: true
    })],
    remove: [restrictToRoles({
      roles: ['admin','moderator'],
      ownerField: 'responsible',
      owner: true
    })]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
