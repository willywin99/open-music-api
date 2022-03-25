const {addAlbumHandler} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/albums',
    handler: addAlbumHandler,
  },
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: () => {},
  },
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: () => {},
  },
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: () => {},
  },
];

module.exports = routes;
