const {nanoid} = require('nanoid');

/* eslint-disable require-jsdoc */
class SongsService {
  constructor() {
    this._songs = [];
  }

  addSong({title, year, genre, performer, duration, albumId}) {
    const id = 'song-' + nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newSong = {
      // eslint-disable-next-line max-len
      title, year, genre, performer, duration, albumId, id, createdAt, updatedAt,
    };

    this._songs.push(newSong);

    const isSuccess = this._songs.filter((song) => song.id === id).length > 0;

    if (!isSuccess) {
      throw new Error('Lagu gagal ditambahkan');
    }

    return id;
  }

  getSongs() {
    return this._songs;
  }

  getSongById(id) {
    const song = this._songs.filter((s) => s.id === id)[0];

    if (!song) {
      throw new Error('Lagu tidak ditemukan');
    }
    return song;
  }

  editSongById(id, {title, year, genre, performer, duration, albumId}) {
    const index = this._songs.findIndex((song) => song.id === id);

    if (index === -1) {
      throw new Error('Gagal memperbarui lagu. Id tidak ditemukan');
    }

    const updatedAt = new Date().toISOString();

    this._songs[index] = {
      ...this._songs[index],
      title,
      year,
      genre,
      performer,
      duration,
      albumId,
      updatedAt,
    };
  }

  deleteSongById(id) {
    const index = this._songs.findIndex((song) => song.id === id);

    if (index === -1) {
      throw new Error('Lagu gagal dihapus. Id tidak ditemukan');
    }

    this._songs.splice(index, 1);
  }
}

module.exports = SongsService;
