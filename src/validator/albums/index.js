const InvariantError = require('../../exceptions/InvariantError');
const {AlbumPayloadSchema} = require('./schema');

const AlbumsValidator = {
  validateAlbumPayload: (payload) => {
    const validationResult = AlbumPayloadSchema.validate(payload);
    if (validationResult.error) {
      // throw new Error(validationResult.error.message);
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = AlbumsValidator;
