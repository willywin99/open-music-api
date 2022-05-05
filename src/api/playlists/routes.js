const routes = (handler) => [
  {
    method: 'POST',
    path: '/playlists',
    handler: handler.postPlaylistHandler,
  },
  {
    method: 'GET',
    path: '/playlists',
    handler: handler.getPlaylistsHandler,
  },
  {
    method: 'DELETE',
    path: '/playlists/{playlistId}',
    handler: handler.deletePlaylistByIdHandler,
  },
  {
    method: 'POST',
    path: '/playlists/{playlistId}/songs',
    handler: handler.postSongHandler,
  },
  {
    method: 'GET',
    path: '/playlists/{playlistId}/songs',
    handler: handler.getSongsHandler,
  },
  {
    method: 'DELETE',
    path: '/playlists/{playlistId}/songs',
    handler: handler.deleteSongByIdHandler,
  },
];

module.exports = routes;
