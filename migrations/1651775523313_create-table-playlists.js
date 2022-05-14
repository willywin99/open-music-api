/* eslint-disable max-len */
/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('playlists', {
    id: {
      type: 'VARCHAR(50)',
      notNull: true,
      primaryKey: true,
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    owner: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });

  // membuat user baru.
  pgm.sql('INSERT INTO users(id, username, password, fullname) VALUES (\'old_playlists\', \'old_playlists\', \'old_playlists\', \'old playlists\')');

  // mengubah nilai owner pada playlist yang owner-nya bernilai NULL
  pgm.sql('UPDATE playlists SET owner = \'old_playlists\' WHERE owner = NULL');

  pgm.addConstraint(
      'playlists',
      'fk_playlists.owner_users.id',
      'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE',
  );
};

exports.down = (pgm) => {
  pgm.dropConstraint('playlists', 'fk_playlists.owner_users.id');

  // mengubah nilai owener old_playlists pada playlist menjadi NULL
  pgm.sql('UPDATE playlists SET owner = NULL WHERE owner = \'old_playlists\'');

  // menghapus user baru
  pgm.sql('DELETE FROM users WHERE id = \'old_playlists\'');

  pgm.dropTable('playlists');
};
