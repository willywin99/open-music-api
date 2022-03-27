const {
  addAlbumHandler,
  getAlbumByIdHandler,
  editAlbumByIdHandler,
  deleteAlbumByIdHandler,
  addSongHandler,
  getAllSongsHandler,
  getSongByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/albums',
    handler: addAlbumHandler,
  },
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: getAlbumByIdHandler,
  },
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: editAlbumByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: deleteAlbumByIdHandler,
  },
  {
    method: 'POST',
    path: '/songs',
    handler: addSongHandler,
  },
  {
    method: 'GET',
    path: '/songs',
    handler: getAllSongsHandler,
  },
  {
    method: 'GET',
    path: '/songs/{id}',
    handler: getSongByIdHandler,
  },
];

module.exports = routes;
