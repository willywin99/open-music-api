const {nanoid} = require('nanoid');
const albums = require('./albums');

const addAlbumHandler = (request, h) => {
  const {name, year, body} = request.payload;

  const id = 'album-' + nanoid(16);
  // console.log(id);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newAlbum = {
    name, year, body, id, createdAt, updatedAt,
  };

  albums.push(newAlbum);

  const isSuccess = albums.filter((album) => album.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Album berhasil ditambahkan',
      data: {
        albumId: id,
        // album: {albums},
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Album gagal ditambahkan',
  });
  response.code(500);
  return response;
};

const getAlbumByIdHandler = (request, h) => {
  const {id} = request.params;

  const album = albums.filter((a) => a.id === id)[0];

  if (album !== undefined) {
    return {
      status: 'success',
      data: {
        album,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Album tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {addAlbumHandler, getAlbumByIdHandler};
